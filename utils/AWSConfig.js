import AWS from "aws-sdk";

AWS.config.update({
  region: "", // Replace with region
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: "us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // Replace with Identity Pool ID
  }),
});

export const S3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: "" }, // Replace with storage bucket name
});