import axios from "axios";

const API = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("@khub:token") || ""}`,
  },
});

export default API;
