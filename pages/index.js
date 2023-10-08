// pages/index.js
import { useEffect, useState } from 'react';
import AWS from 'aws-sdk';

export default function Home() {
  const [htmlContent, setHtmlContent] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Initialize isLoading as false

  async function getHtmlFileFromS3() {
    // Configure AWS credentials (replace with your own credentials)
    AWS.config.update({
      accessKeyId: 'AKIAW6NHOSIAG7OBVW5E',
      secretAccessKey: 'CpadDtG3Shsl0RyNt1ov1qSY42kRuKT9nwcCfK4I',
      region: 'ap-south-1',
    });

    const s3 = new AWS.S3();
    const params = {
      Bucket: 'demonext',
      Key: 'Rotaional Dynamics/question13.html',
    };

    try {
      setIsLoading(true); // Set isLoading to true while fetching
      const { Body } = await s3.getObject(params).promise();
      const htmlContent = Body.toString('utf-8');
      setHtmlContent(htmlContent);
    } catch (error) {
      console.error('Error fetching HTML file from S3:', error);
    } finally {
      setIsLoading(false); // Set isLoading back to false after fetching
    }
  }

  const fetchQuestion = () => {
    // Call the function to fetch the HTML file again when the button is clicked
    getHtmlFileFromS3();
  };

  return (
    <div>
      <h1>HTML File from S3</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <button onClick={fetchQuestion}>Fetch Question</button>
        </>
      )}
    </div>
  );
}
