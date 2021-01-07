import React, { useState, useEffect } from "react";
import Form from "@rjsf/material-ui";
import axios from "axios";
import "./PatientForm.css";

function PatientForm() {
  const [formSchema, setformSchema] = useState();

  const [uiSchema, setuiSchema] = useState({
    "ui:order": ["*"],
  });
  const [formData, setFormData] = React.useState({});

  useEffect(() => {
    async function getSchema() {
      const request = await axios.get("http://localhost:9000/forms/patient");
      delete request.data.$schema;
      setformSchema(request.data);
      uiSchema["ui:order"].unshift(...request.data["ui:order"]);
      setuiSchema(uiSchema);
      console.log(JSON.stringify(uiSchema));
      return request;
    }
    getSchema();
  }, []);

  const handleForm = (e) => {
    setFormData(e.formData);
  };

  const onSubmit = (e) => {
    console.log(e.formData);
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
        />
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
}

export default PatientForm;
