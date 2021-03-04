import axios from "axios";

const instance = axios.create({
  baseURL: "https://docplus-api.herokuapp.com/",
  timeout: 10000,
});

export default instance;
