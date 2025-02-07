import axios from "axios";
import { Itask } from "../types/types";

const BASE_URL = "https://67618d7346efb37323722400.mockapi.io/api/v1/tasks";

export const getTasks = async () => {
  const response = await axios.get(BASE_URL);
  console.log(response);
  return response;
};

export const addTask = async (task: Itask) => {
  const response = await axios.post(BASE_URL, task);
  return response;
};
