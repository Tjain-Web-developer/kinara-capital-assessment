import axios from "axios";
const apiUrl = "http://localhost:3000/";

export const fetchStudents = async (query) => {
  let data = await axios.get(apiUrl + "view/students", {
    params: query,
  });
  return data;
};

export const filterStudents = async (query) => {
  let data = await axios.get(apiUrl +"filter/students", {
    params: query,
  });
  return data;
};
