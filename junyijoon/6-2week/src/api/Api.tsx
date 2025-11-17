import { api } from "./Axios";

export const List = () => api.get("/api/v1/spots");

export const SignUp = (data: {
  name: string;
  studentNumber: string;
  password: string;
}) => api.post("/api/v1/auth/signup", data);

export const Login = (data: { studentNumber: string; password: string }) =>
  api.post("/api/v1/auth/login", data);

export const Delete = () =>
  api.delete("/api/v1/auth/delete", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });
