import axios from "axios";


const API_URL = "http://localhost:4000/api/auth/";

    const login = (username, password) => {
        return axios.post(API_URL + "signin", {
            username,
            password,
          })
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
      
            return response.data;
          });
      };

      const getCurrentUser = () => {
        return JSON.parse(localStorage.getItem("user"));
      };

      const Auth = {
        login,
        getCurrentUser,
      };

export default Auth