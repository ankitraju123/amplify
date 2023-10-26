// pages/renderedPage.js

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
AWS.config.update({
    accessKeyId: 'AKIAW6NHOSIAG7OBVW5E',
    secretAccessKey: 'CpadDtG3Shsl0RyNt1ov1qSY42kRuKT9nwcCfK4I',
    region: 'ap-south-1', // Replace with your AWS region
  });
const s3 = new AWS.S3();

const RenderedPage = () => {
  const router = useRouter();
  const { fileName, university, semester, branch, subject } = router.query;
  const [mathJaxKey, setMathJaxKey] = useState(0);

  // Fetch the HTML content for the specified file from AWS S3
  // You can reuse your existing S3 fetching logic here
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        if (fileName) {
          // Fetch HTML content for the specified file from AWS S3
          const key = `universities/${university}/${semester}/${branch}/${subject}/${fileName}.html`;
          const params = {
            Bucket: 'demonext', // Replace with your S3 bucket name
            Key: key,
          };

          const response = await s3.getObject(params).promise();
          const content = response.Body.toString();
          setHtmlContent(content);
          setMathJaxKey(mathJaxKey + 1);
        }
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtmlContent();
  }, [fileName]);

  const renderHtmlWithLatex = (htmlContent) => {
    // Parse the HTML content and replace LaTeX expressions with MathJax components
    const latexRegex = /\$(.*?)\$/g;
    const replacedHtml = htmlContent.replace(latexRegex, (match, latexExpression) => {
      return `<MathJaxText text="${latexExpression}" />`;
    });

    return replacedHtml;
  };


  return (
    <div className='latex p-4 ' style={{ zIndex: 0, color:"black" }}>
    {htmlContent && (
      <MathJaxContext>
        <MathJax key={mathJaxKey}>
          <div className='main_latex' style={{ zIndex: 0 ,color:"black"}} dangerouslySetInnerHTML={{ __html: renderHtmlWithLatex(htmlContent) }} />
        </MathJax>
      </MathJaxContext>
    )}
    </div>
  );
};

export default RenderedPage;
