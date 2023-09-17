import React, { useEffect, useState } from 'react';
import { MathJaxContext, MathJax, MathJaxText } from 'better-react-mathjax';
import AWS from 'aws-sdk';

// AWS credentials configuration
AWS.config.update({
    accessKeyId: 'AKIAW6NHOSIAG7OBVW5E',
    secretAccessKey: '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',
    region: 'ap-south-1',
});

// Create an S3 instance after configuring AWS credentials
const s3 = new AWS.S3();

const LatexPage = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [subtopics, setSubtopics] = useState([]);
  const [questionNos, setQuestionNos] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState('');
  const [selectedQuestionNo, setSelectedQuestionNo] = useState('');

  useEffect(() => {
    // Fetch initial units, subtopics, and questionNos from your API or data source
    // For example, you can populate them with dummy data here

    setSubtopics(['Rotational Dynamics', 'Force']);
    setQuestionNos({
      'Rotational Dynamics': [1, 2, 3, 4, 5, 6],
      'Force': [1, 2, 3, 4],
    });
  }, []);

  // Function to fetch question numbers based on selected subtopic
  const getQuestionOptions = () => {
    return questionNos[selectedSubtopic] || [];
  };

  const fetchHtmlContent = async () => {
    try {
      // Fetch HTML content from your source (e.g., S3 bucket)
      const key = `${selectedSubtopic}/question${selectedQuestionNo}.html`;
      const params = {
        Bucket: 'milind1234',
        Key: key,
      };

      const response = await s3.getObject(params).promise();
      const content = response.Body.toString();
      setHtmlContent(content);
    } catch (error) {
      console.error('Error fetching HTML:', error);
    }
  };

  const renderHtmlWithLatex = (htmlContent) => {
    // Parse the HTML content and replace LaTeX expressions with MathJax components
    const latexRegex = /\$(.*?)\$/g;
    const replacedHtml = htmlContent.replace(latexRegex, (match, latexExpression) => {
      return `<MathJaxText text="${latexExpression}" />`;
    });

    return replacedHtml;
  };

  // Ensure that question options are updated when the selected subtopic changes
  const questionOptions = getQuestionOptions();

  return (
    <div className='container-latex'>
      <div className='container-solution mx-auto flex flex-col sm:flex-row items-center justify-center gap-5'>
        <select
          className='w-full sm:w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 sm:mb-0'
          value={selectedSubtopic}
          onChange={e => setSelectedSubtopic(e.target.value)}
          style={{ color: 'black' }}
        >
          <option value="">Select Unit</option>
          {subtopics.map(subtopic => (
            <option key={subtopic} value={subtopic}>
              {subtopic}
            </option>
          ))}
        </select>
        <select
          className='w-full sm:w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3 sm:mb-0'
          value={selectedQuestionNo}
          onChange={e => setSelectedQuestionNo(e.target.value)}
          style={{ color: 'black' }}
        >
          <option value="">Select Question No</option>
          {questionOptions.map(questionNo => (
            <option key={questionNo} value={questionNo}>
              {questionNo}
            </option>
          ))}
        </select>
        <button
          className='w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
          onClick={fetchHtmlContent}
        >
          View Solution
        </button>
      </div>

      <br />
      <br />
      <br />
      {htmlContent && (
        <MathJaxContext>
          <MathJax>
            <div
              dangerouslySetInnerHTML={{ __html: renderHtmlWithLatex(htmlContent) }}
            />
          </MathJax>
        </MathJaxContext>
      )}
    </div>
  );
};

export default LatexPage;
