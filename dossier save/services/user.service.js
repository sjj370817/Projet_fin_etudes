import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:4000/api/test/";

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getAdminBoard,
};

export default UserService;
