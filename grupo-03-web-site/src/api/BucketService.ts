'use server'
import { S3  } from '@aws-sdk/client-s3'

export const uploadToS3 = async (fileData: string | undefined, filename: string | undefined) => {

  const s3: S3 = new S3({
    region: "us-east-1",
    credentials: {
      accessKeyId: "ASIAVNYSX33UPX7HKMZF",
      secretAccessKey: "lEd7s2+L5Jkv+PyNZfbCvhnR7Dmh96p/FPOBSf20",
      sessionToken: "FwoGZXIvYXdzEAcaDOERGS1CCNMVU8rgziK+AXj2MtgI547Mksy1H2Myp5UEkKJFi89L36CllyHR10TtqGmM2pZuM73xWdb1iBd08/KmdeYJcsD7ZiindVcGDXC0W+V5Hg/nFWJ22pREiyRBXMynOOPK+WA+0lXDOUyiXQBDfAnu0fcR4gX1eIAtd0d/8zdtdAB0eJye7kxSIDce3cTufqsDqRHZXep5uf/EP9p7LloLz7Q/2B5YFf6wgrZIaExC1IY5Xla7ArjCgaeUIGNQRN3nOJdN7uQ0Tb0o3suKowYyLcUJZr81ME0Q+P+8Xf/FlKuTiX9uBIHbI8fY2EtqFCYhWWgHdVo3IeJrrSKgSQ=="
    }
  })

  try {

    const uploadParams = {
      Bucket: 'raw-input-gtakeout-files-group-3-tcc-01',
      Key: `path/to/destination/${filename}`,
      Body: fileData,
    };

    s3.putObject(uploadParams)
      .then(res => {
        console.log("File Uploaded with Successfull", res);
      })
      .catch(ex => {
        console.error("An error occured: ", ex)
      });

  } catch (error) {
    return {success:false, message: "Unalbe to access this file", data: {}};
  }
}