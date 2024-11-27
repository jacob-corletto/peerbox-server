import { S3 } from "../../utils/awsConfig";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { fileName, fileType } = req.body;

      const params = {
        Bucket: "", //replace with bucket name
        Key: fileName,
        Expires: 60, // Presigned URL expiration
        ContentType: fileType,
      };

      const uploadUrl = await S3.getSignedUrlPromise("putObject", params);

      res.status(200).json({ uploadUrl });
    } catch (error) {
      console.error("Error generating upload URL:", error);
      res.status(500).json({ error: "Failed to generate upload URL" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}