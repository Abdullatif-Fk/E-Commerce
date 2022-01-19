import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTBhYzJiOGQ3OWU1NjcwODQyOGZhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjYwMTgwNywiZXhwIjoxNjQyODYxMDA3fQ.hfuDENWs8UBTMPUo2-X74AONM6YFu7U5j1U-r5jcQfw";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
