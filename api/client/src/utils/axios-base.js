import axios from "axios";

const instance = axios.create({
 baseURL: "http://localhost:5000",
 headers: {
   "Content-Type": "application/json",
 }
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;