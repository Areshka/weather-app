import axios from "axios";
import { API_CONFIG } from "../config/api.config";

export default axios.create({
  baseURL: API_CONFIG.baseUrl, 
});
