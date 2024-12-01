import axios,{CanceledError} from "axios";
export interface AppResponse<T>{
    message:string;
    status:string;
    content:T
}
export interface Pagination{
    configCount:number;
    totalPage:number;
    totalRecode:number;
}
export interface IPage {
    pageNo:number;
    rowCount:number;
}
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
