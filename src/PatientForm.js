import React, { useState, useEffect } from "react";
import Form from "@rjsf/material-ui";
import axios from "axios";
import "./PatientForm.css";

function PatientForm({ id }) {
  const [Id, setId] = useState(id);
  const [formSchema, setformSchema] = useState();
  const [uiSchema, setuiSchema] = useState({});
  const [formData, setFormData] = React.useState({});

  useEffect(() => {
    async function getSchema() {
      const request = await axios.get(
        "https://docplus-api.herokuapp.com/forms/patient"
      );
      delete request.data.$schema;
      setformSchema(request.data);
      const tempSchema = { "ui:order": ["*"] };
      tempSchema["ui:order"].unshift(...request.data["ui:order"]);
      setuiSchema(tempSchema);
      console.log(JSON.stringify(uiSchema));
      if (Id) {
        const requestPatient = await axios.get(
          "https://docplus-api.herokuapp.com/api/patients/" + `${id}`
        );
        setFormData(requestPatient.data);
      }
      return request;
    }
    getSchema();
  }, []);

  const handleForm = (e) => {
    console.log(e.formData);
    setFormData(e.formData);
  };

  const onSubmit = (e) => {
    console.log(e.formData);

    if (Id) {
      const url = "https://docplus-api.herokuapp.com/api/patients/" + `${Id}`;
      axios
        .put(url, e.formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      const url = "https://docplus-api.herokuapp.com/api/patients";

      axios
        .post(url, e.formData)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="patient__form">
      {formSchema ? (
        <Form
          schema={formSchema}
          formData={formData}
          onChange={handleForm}
          uiSchema={uiSchema}
          onSubmit={onSubmit}
          // liveValidate={true}
          noHtml5Validate
        />
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default PatientForm;
