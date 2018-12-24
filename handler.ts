import { APIGatewayProxyHandler } from 'aws-lambda';
import { saveToS3 } from './service/s3-saver';
const path = require('path');

export const hello: APIGatewayProxyHandler = async (event, context) => {
  // saveToS3("C:/Users/airno/Desktop/Develop/arnold-study/aws/sls-s3-test/assets/img/"+ "worldmap.jpg")
  saveToS3();
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
    }),
  };
}
