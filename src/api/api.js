import axios from "axios";

export const host = "http://localhost:3333";

export const api = axios.create({
  baseURL: `${host}`,
});
