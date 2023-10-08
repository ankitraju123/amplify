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
    setSubtopics(['Rotational Dynamics','Mechanical Properties of Fluid','Kinetic theory of gases and radiation','Thermodynamics','Oscillations','Superpostion of waves','Wave Optics','Electrostatics','Current Electricity','Magnetic Effect of Electric current','Magnetic Materials','Electromagnetic Induction','AC Circuits','Dual Nature of radiation and matter','Structure of Atoms and Nuclie','Semiconductor']);
    setQuestionNos({
      'Rotational Dynamics': [12, 13, 14, 15, 16, 17,18,19,20,21,22,23],
      'Mechanical Properties of Fluid': [10,11,12, 13, 14, 15, 16, 17,18,19,20,21,22,23],
      'Kinetic theory of gases and radiation':[11,12, 13, 15, 16, 17,18,19,20,21,22,23,24,25],
      'Thermodynamics':[4,5,6,7,8,9,10,12],
      'Oscillations':[8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
      'Superpostion of waves':[10,11,12, 13, 14, 15, 16, 17,18,19,20,21,22,23],
   'Wave Optics':[13, 15, 16, 17,18,19,20,21,22,23,24,25],
   'Electrostatics':[8,9,10,11,12,13],
   'Current Electricity':[10,11,12, 13, 14, 15, 16, 17,18,19,20],
   'Magnetic Effect of Electric current':[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
   'Magnetic Materials':[3,4,5,6,7,8,9,10,11],
   'Electromagnetic Induction':[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
   'AC Circuits':[12, 13, 15, 16, 17,18,19,20,21,22,23],
   'Dual Nature of radiation and matter':[7,8,9,10,11,12,13,14,15,16,17,18],
   'Structure of Atoms and Nuclie':[10,11,12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24],
   'Semiconductor':[18,19,20]

      
    });
  }, []);

  
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

    
     
      <div className='latex p-4 ' style={{ zIndex: 0, color:"black" }}>
      {htmlContent && (
        <MathJaxContext>
          <MathJax key={mathJaxKey}>
            <div className='main_latex' style={{ zIndex: 0 ,color:"black"}} dangerouslySetInnerHTML={{ __html: renderHtmlWithLatex(htmlContent) }} />
          </MathJax>
        </MathJaxContext>
      )}
      </div>
      
    </div>
  );
};

export default LatexPage;
