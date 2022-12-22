import axios from "axios";

export const host = "https://jsd-final-backend-pakajji.vercel.app";

export const api = axios.create({
  baseURL: `${host}`,
});
