import MUIDataTable from "mui-datatables";
import React, { useState, useEffect, useCallback } from "react";
import axios from "./axios";
import { useHistory } from "react-router-dom";

export default function TabPanel(props) {
  const history = useHistory();
  const columns = ["id", "firstName", "lastName", "age", "email"];
  const options = {
    filterType: "checkbox",
    enableNestedDataAccess: ".",
    onRowClick: (a, b, c) => {
      history.push("/patients/" + `${a[0]}`);
    },
  };
  const apiUrl = "/api/patients";
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPatients() {
      const request = await axios.get(apiUrl);
      const pas = request.data._embedded.patients.map((p) => {
        const url = p._links.self.href;
        p.id = url.substring(url.lastIndexOf("/") + 1);
        return p;
      });
      setData(pas);
      return request;
    }
    getPatients();
  }, []);

  return (
    <MUIDataTable
      title={"List of Patients"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}
