import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'AKIAW6NHOSIAG7OBVW5E',
  secretAccessKey: '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',
  region: 'ap-south-1',
});

const s3 = new AWS.S3();

export async function fetchHtmlFromS3(bucketName, key) {
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
}
