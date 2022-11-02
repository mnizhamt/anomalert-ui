import { Axios } from "axios";

export function readAll() {
  return Axios.get("http://localhost:8086/alert-api");
}

export function read(id) {
  let response = [];
  Axios.get("http://localhost:8086/alert-api/" + id)
    .then((data) => {
      response = data;
    })
    .catch((reason) => {
      response = "Error: " + reason;
    });
  return response;
}
