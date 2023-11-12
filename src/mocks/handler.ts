import { http, HttpResponse } from "msw";
import { mockUsers } from "../setupTests";

const urlApi = import.meta.env.VITE_API_URL;

const handlers = [
  http.get(`${urlApi}/users`, () => {
    return HttpResponse.json(mockUsers);
  }),
];

export default handlers;
