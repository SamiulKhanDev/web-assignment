import axios from "axios";

const api = axios.create({
  baseURL: "https://faithful-bat-onesies.cyclic.cloud/",
  method: ["GET"],
});

export async function getProducts() {
  return await api.get("/");
}
