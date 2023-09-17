import React, { useEffect, useState, useCallback } from 'react';
import { MathJaxContext, MathJax, MathJaxText } from 'better-react-mathjax';
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
  region: 'ap-south-1',
});

const s3 = new AWS.S3();

const LatexPage = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [subtopics, setSubtopics] = useState([]);
  const [questionNos, setQuestionNos] = useState([]);
  const [selectedSubtopic, setSelectedSubtopic] = useState('');
  const [selectedQuestionNo, setSelectedQuestionNo] = useState('');

  // Function to fetch HTML content from S3
  const fetchHtmlContent = async (bucketName, key) => {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    try {
      const response = await s3.getObject(params).promise();
      return response.Body.toString('utf-8');
    } catch (error) {
      console.error('Error fetching HTML from S3:', error);
      return null;
    }
  };

  // Callback to handle fetching and rendering HTML content
  const handleFetchHtmlContent = useCallback(async () => {
    if (!selectedSubtopic || !selectedQuestionNo) {
      return;
    }

    const key = `${selectedSubtopic}/question${selectedQuestionNo}.html`;
    const content = await fetchHtmlContent('milind1234', key);
    if (content) {
      setHtmlContent(content);
      // Reload MathJax to render LaTeX in the new content
      if (window.MathJax) {
        window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub]);
      }
    }
  }, [selectedSubtopic, selectedQuestionNo]);

  useEffect(() => {
    // Fetch initial units, subtopics, and questionNos from your API or data source
    // For example, you can populate them with dummy data here

    setSubtopics(['Rotational Dynamics', 'Force']);
    setQuestionNos({
      'Rotational Dynamics': [1, 2, 3, 4, 5, 6],
      'Force': [1, 2, 3, 4],
    });
  }, []);

  // Ensure that question options are updated when the selected subtopic changes
  const questionOptions = questionNos[selectedSubtopic] || [];

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
          onClick={handleFetchHtmlContent}
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
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </MathJax>
        </MathJaxContext>
      )}
    </div>
  );
};

export default LatexPage;
