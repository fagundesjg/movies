import axios from "axios";

const YTS_AG = axios.create({
  baseURL: "https://yts.mx/api/v2",
  timeout: 10000,
});

export { YTS_AG };
