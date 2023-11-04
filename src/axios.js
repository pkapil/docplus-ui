import axios from "axios";

const instance = axios.create({
  baseURL: "http://udtnjoycqs.us17.qoddiapp.com/",
  timeout: 10000,
});

export default instance;
