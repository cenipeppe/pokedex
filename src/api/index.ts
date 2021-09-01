import axios from "axios";

export const API = async (
  url: string,
  contentType = "application/json;charset=UTF-8"
): Promise<any> => {
  const headers: any = {
    Accept: "application/json",
    "Content-Type": contentType,
  };
  const req = axios({ method: "GET", url, headers });
  return req.then((res) => res.data);
};

export * from "./pokeApi";
