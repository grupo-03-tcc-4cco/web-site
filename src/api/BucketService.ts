"use server";
import { S3 } from "@aws-sdk/client-s3";

export const uploadToS3 = async (
  fileData: string | undefined,
  filename: string | undefined
) => {
  const s3: S3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID!,
      secretAccessKey: process.env.SECRET_ACCESS_KEY!,
      sessionToken: process.env.SESSION_TOKEN!,
    },
  });

  try {
    const uploadParams = {
      Bucket: "raw-input-gtakeout-files-group-3-tcc-01",
      Key: `path/to/destination/${filename}`,
      Body: fileData,
    };

    s3.putObject(uploadParams)
      .then((res) => {
        console.log("File Uploaded with Successfull ", res);
      })
      .catch((ex) => {
        console.error("An error occured: ", ex);
      });
  } catch (error) {
    return { success: false, message: "Unalbe to upload this file", data: {} };
  }
};
