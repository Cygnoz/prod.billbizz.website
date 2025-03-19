import axios from "axios";

const BASE_URLS: Record<number, string> = {
  3001: import.meta.env.VITE_REACT_APP_LEADS,
  //  3001: import.meta.env.VITE_REACT_APP_OCR,
   3003: import.meta.env.VITE_REACT_APP_SUPERADMIN,
};

const createInstance = (
  port: number,
  contentType: string,
  useAuth: boolean
) => {
  const baseURL = BASE_URLS[port];
  let headers: Record<string, string> = {
    "Content-Type": contentType,
    Accept: "application/json",
  };



  if (useAuth) {
    const authToken: string | null = localStorage.getItem("authToken");
    if (authToken) {
      headers = { ...headers, Authorization: `${authToken}`};
    }
  }

  return axios.create({
    baseURL,
    headers,
  });
};

const baseInstance = (port: number) =>
  createInstance(port, "application/json", false);

const authInstance = (port: number) =>
  createInstance(port, "application/json", true);

const MauthInstance = (port: number) =>
  createInstance(port, "multipart/form-data", true);

export default { baseInstance, authInstance, MauthInstance };
