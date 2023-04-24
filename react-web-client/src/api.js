import axios from "axios";
import { apiBaseUrl } from "./settings";

const instance = axios.create({
  baseURL: apiBaseUrl,
});

export const getAllTasks = async () =>
  instance.get("/tasks").then((r) => r.data);

export const postTask = async (payload) =>
  instance.post("/tasks", payload).then((r) => r.data);
