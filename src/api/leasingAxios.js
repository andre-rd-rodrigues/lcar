import axios from "axios";
import { baseURL } from "./baseURL";

export default axios.create({
  baseURL,
  headers: { Accept: "application/json" }
});
