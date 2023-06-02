import { saveUserFromForm } from '../../api/DatabaseService'
import { uploadToS3 } from '../../api/BucketService'

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  'use server'
  uploadFile(file);
  const test = values;
  saveUserFromForm(test.email);
};

const uploadFile = (file: File | null) => {
  const reader = new FileReader();
  reader.readAsText(file!, "utf-8");
  const fileContent = reader.result?.toString();
  uploadToS3(fileContent, file?.name);
};