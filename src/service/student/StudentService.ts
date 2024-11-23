import apiClient, {AppResponse} from "../ApiClient.ts";
import {AxiosError} from "axios";
export interface IStudent {
    studentId?: string;
    name: string;
    address: string;
    age: number;
    phone: string;
}
const URL="/student";
export const getAllStudent=async ()=>{
    try {
        const response = await apiClient.get<AppResponse<IStudent[]>>(URL);
        return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }
}
export const creatStudent=async (student:IStudent)=>{
    try {
   const response = await apiClient.post<AppResponse<IStudent>>(URL,student);
        console.log(response)
   return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }

}
export const updateStudent=async (student:IStudent)=>{
    try {
        const response = await apiClient.put<AppResponse<IStudent>>(URL,student);
        console.log(response)
        return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }

}