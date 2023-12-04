import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "36c79a2045e642749a4c995f65872a74",
  },
});
