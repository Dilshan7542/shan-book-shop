import axios,{CanceledError} from "axios";

 const apiClient = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
});

apiClient.interceptors.request.use((req)=>{
req.headers.set({"lang":"eng"});
        return req;
},error => {
   return Promise.reject(error);
});

export default  apiClient;
export {CanceledError};
