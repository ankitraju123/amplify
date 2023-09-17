import AWS from 'aws-sdk';





 const fetchHtmlFromS3 = async (bucketName, key) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  try {
    const response = await s3.getObject(params).promise();
    return response.Body.toString('utf-8'); // Return the content of the HTML file
  } catch (error) {
    console.error('Error fetching HTML from S3:', error);
    return null;
  }
};
export default fetchHtmlFromS3