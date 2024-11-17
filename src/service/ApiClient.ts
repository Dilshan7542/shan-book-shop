import axios,{CanceledError} from "axios";

 const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((req)=>{
req.headers.set({"lang":"eng"});
        return req;
},error => {
   return Promise.reject(error);
});

export default  axiosInstance;
export {CanceledError};
