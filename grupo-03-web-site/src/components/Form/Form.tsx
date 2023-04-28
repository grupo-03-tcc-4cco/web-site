"use client";
import { useState } from "react";
import content from "../../../public/data/Form";

interface FormValues {
  email: string;
  age: number;
  gender: string;
  education: string;
  interests: string[];
  profession: string;
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
  };

  const [file, setFile] = useState<File | null>(null);

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
    const file = e.target.files[0];
    setFile(file);
    console.log("File selected:", file);
    // Aqui você pode fazer algo com o arquivo, como enviar para um servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={values.email}
      />

      <label htmlFor="age">Idade:</label>
      <input
        type="number"
        id="age"
        name="age"
        onChange={handleChange}
        value={values.age}
      />

      <label htmlFor="gender">Sexo:</label>
      <select
        id="gender"
        name="gender"
        onChange={handleChange}
        value={values.gender}
      >
        <option value="">Selecione</option>
        {content.genderList.map((gender) => (
          <option key={gender} value={gender}>
            {gender}
          </option>
        ))}
      </select>

      <label htmlFor="education">Nível de escolaridade:</label>
      <select
        id="education"
        name="education"
        onChange={handleChange}
        value={values.education}
      >
        <option value="">Selecione</option>
        {content.educationalLevel.map((education) => (
          <option key={education} value={education}>
            {education}
          </option>
        ))}
      </select>

      <fieldset>
        <legend>Interesses:</legend>
        {content.interestsList.map((interest) => (
          <div key={interest}>
            <input
              type="checkbox"
              id={interest}
              name="interests"
              value={interest}
              onChange={handleInterestsChange}
            />
            <label htmlFor={interest}>{interest}</label>
          </div>
        ))}
      </fieldset>

      <label htmlFor="profession">Profissão:</label>
      <select
        id="profession"
        name="profession"
        onChange={handleChange}
        value={values.profession}
      >
        <option value="">Selecione</option>
        {content.professionsList.map((profession) => (
          <option key={profession} value={profession}>
            {profession}
          </option>
        ))}
      </select>
      <label htmlFor="file">
        Arraste e solte o arquivo aqui ou selecione um arquivo:
      </label>
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
          width: "100%",
          height: "100px",
          border: "2px dashed gray",
          borderRadius: "10px",
          padding: "20px",
        }}
      />
      {file && (
        <div>
          <p>Arquivo selecionado: {file.name}</p>
          <p>Tamanho: {file.size} bytes</p>
        </div>
      )}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
