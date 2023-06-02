"use client";
import { useState } from "react";
import content from "../../../public/data/Form";
import TextField from "@mui/material/TextField";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { uploadToS3 } from "../../api/BucketService";
import { saveUserFromForm } from "../../api/DatabaseService";

export interface FormValues {
  email: string;
  age: number;
  gender: string;
  education: string;
  interests: string[];
  profession: string;
}

export interface FormEntity {
  email: string;
  age: number;
  gender: number | undefined;
  education: number | undefined;
  interests: string[];
  profession: number | undefined;
}

const Form = () => {
  const [values, setValues] = useState<FormValues>({
    email: "",
    age: 0,
    gender: "",
    education: "",
    interests: [],
    profession: "",
  });

  const [file, setFile] = useState<File | null>(null);

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    if (name === "interests") {
      setValues({ ...values, [name]: event.target.value.split(",") });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleInterestsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { checked, value } = event.target;
    const currentInterests = values.interests;
    let updatedInterests: string[] = [];

    if (checked) {
      updatedInterests = [...currentInterests, value];
    } else {
      updatedInterests = currentInterests.filter(
        (interest) => interest !== value
      );
    }

    setValues({ ...values, interests: updatedInterests });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    uploadFile(file);
    const formEntity = formValuesToFormEntity(values);
    saveUserFromForm(formEntity);
  };

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFile(file);
    console.log("File dropped:", file);
    // Aqui você pode fazer algo com o arquivo, como enviar para um servidor
  };

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      console.log("File selected:", file);
    }
  };

  const uploadFile = (file: File | null) => {
    const reader = new FileReader();
    reader.readAsText(file!, "utf-8");
    const fileContent = reader.result?.toString();
    uploadToS3(fileContent, file?.name);
  };

  const formValuesToFormEntity = (formValues: FormValues): FormEntity => {
    let genderId = content.genderList.indexOf(formValues.gender) + 1;

    let educationId =
      content.educationalLevel.indexOf(formValues.education) + 1;

    let professionId =
      content.professionsList.indexOf(formValues.profession) + 1;

    return {
      email: formValues.email,
      age: formValues.age,
      gender: genderId,
      education: educationId,
      interests: formValues.interests,
      profession: professionId,
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={5} sx={{ padding: 3 }}>
          <TextField
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            label="E-mail"
            sx={{ width: "80%", mb: 3 }}
          />

          <TextField
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            value={values.age}
            label="idade"
            sx={{ width: "38%", mb: 3, mr: 1 }}
          />

          <FormControl sx={{ width: "41%", mb: 3 }}>
            <InputLabel id="input-gender">Sexo</InputLabel>
            <Select
              labelId="input-gender"
              id="gender"
              value={values.gender}
              name="gender"
              onChange={handleChange}
            >
              {content.genderList.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: "38%", mb: 3, mr: 1 }}>
            <InputLabel id="input-education">Nível de escolaridade</InputLabel>
            <Select
              labelId="input-education"
              id="education"
              value={values.education}
              name="education"
              onChange={handleChange}
            >
              {content.educationalLevel.map((education) => (
                <MenuItem key={education} value={education}>
                  {education}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ width: "41%" }}>
            <InputLabel id="input-profession">Profissão</InputLabel>
            <Select
              labelId="input-profession"
              id="profession"
              value={values.profession}
              name="profession"
              onChange={handleChange}
            >
              {content.professionsList.map((profession) => (
                <MenuItem key={profession} value={profession}>
                  {profession}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/*" // aqui é possível definir o tipo de arquivo aceito pelo input
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onChange={handleFileChange}
            style={{
              width: "500px",
              height: "180px",
              border: "2px dashed gray",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "70px",
            }}
          />
          {file && (
            <div>
              <p>Arquivo selecionado: {file.name}</p>
              <p>Tamanho: {file.size} bytes</p>
            </div>
          )}
          <button type="submit">Enviar</button>
        </Grid>
        <Grid item xs={7} sx={{ pt: 3 }}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Interresses</FormLabel>
            <FormGroup sx={{ maxHeight: 500 }}>
              {content.interestsList.map((interest) => (
                <div key={interest}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="interests"
                        value={interest}
                        id={interest}
                        onChange={handleInterestsChange}
                      />
                    }
                    label={interest}
                  />
                </div>
              ))}
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
