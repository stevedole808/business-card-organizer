import axios from "axios";

const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://businesscardorganizer.herokuapp.com/",
    headers: {
      Authorization: token,
      "Access-Control-Allow-Origin": "*"
    }
  });
};
export default AxiosWithAuth;
