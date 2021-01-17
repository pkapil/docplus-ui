import React, { useState, useEffect } from "react";
import Form from "@rjsf/material-ui";
import axios from "axios";
import "./GenericForm.css";
import Typography from "@material-ui/core/Typography";
import {
  Router,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function PatientForm({ id, type, title }) {
  const [Id, setId] = useState(id);
  const [formSchema, setformSchema] = useState();
  const [uiSchema, setuiSchema] = useState({});
  const [formData, setFormData] = React.useState({});

  const rootUrl = "https://docplus-api.herokuapp.com";
  // const rootUrl = "http://localhost:8080";
  const apiUrlForFormSchema = `${rootUrl}` + "/forms/" + `${type}`;
  const apiUrlForSpecifcEntity =
    `${rootUrl}` + "/api/" + `${type}` + "s/" + `${id}`;
  const apiUrl = `${rootUrl}` + "/api/" + `${type}` + "s";

  useEffect(() => {
    async function getSchema() {
      const request = await axios.get(apiUrlForFormSchema);
      delete request.data.$schema;
      setformSchema(request.data);
      const tempSchema = { "ui:order": [] };
      tempSchema["ui:order"].push(...request.data["ui:order"]);
      setuiSchema(tempSchema);
      if (Id) {
        const requestPatient = await axios.get(apiUrlForSpecifcEntity);
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
      const url = apiUrlForSpecifcEntity;
      axios
        .put(url, e.formData)
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post(apiUrl, e.formData)
        .then(function (response) {})
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="patient__form">
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
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
