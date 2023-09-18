import React, { useEffect, useState } from 'react';
import { MathJaxContext, MathJax, MathJaxText } from 'better-react-mathjax';
import AWS from 'aws-sdk';

AWS.config.update({
    accessKeyId: 'AKIAW6NHOSIAG7OBVW5E',
    secretAccessKey: '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',
    region: 'ap-south-1',
});

const s3 = new AWS.S3();

const LatexPage = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [subtopics, setSubtopics] = useState([]);
  const [questionNos, setQuestionNos] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState('');
  const [selectedQuestionNo, setSelectedQuestionNo] = useState('');
  const [mathJaxKey, setMathJaxKey] = useState(0);

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
      // Increment the mathJaxKey to trigger MathJax rendering
      setMathJaxKey(mathJaxKey + 1);
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
      <div className='container-solution '>
        <div className='responsive_select'>
        <select
          className='select-box'
          value={selectedSubtopic}
          onChange={e => setSelectedSubtopic(e.target.value)}
          style={{ color: 'black' }}
        >
          <option value="">Select Unit</option>
          {subtopics.map(subtopic => (
            <option key={subtopic} value={subtopic}>{subtopic}</option>
          ))}
        </select>
        <select
          className='select-box'
          value={selectedQuestionNo}
          onChange={e => setSelectedQuestionNo(e.target.value)}
          style={{ color: 'black' }}
        >
          <option value="">Select Question No</option>
          {questionOptions.map(questionNo => (
            <option key={questionNo} value={questionNo}>{questionNo}</option>
          ))}
        </select>
        </div>
      
        <button
          className='view-button'
          onClick={fetchHtmlContent}
        >
          View Solution
        </button>
      </div>

      <br />
      <br />
      <br />
      <div className='latex p-4' style={{ zIndex: 0 }}>
      {htmlContent && (
        <MathJaxContext>
          <MathJax key={mathJaxKey}>
            <div style={{ zIndex: 0 }} dangerouslySetInnerHTML={{ __html: renderHtmlWithLatex(htmlContent) }} />
          </MathJax>
        </MathJaxContext>
      )}
      </div>
      
    </div>
  );
};

export default LatexPage;
