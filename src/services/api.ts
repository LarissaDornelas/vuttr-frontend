import axios from "axios";

export const api = axios.create({
  baseURL: "https://vuttr-backend-bossa.herokuapp.com",
  timeout: 3000,
});
