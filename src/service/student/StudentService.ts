import apiClient, {AppResponse, IPage, Pagination} from "../ApiClient.ts";
import {AxiosError} from "axios";
export interface IStudent {
    _id?:string;
    __v?:string;
    studentId?: string;
    name: string;
    address: string;
    age: number;
    phone: string;
}
export interface IStudentResponse extends Pagination{
    studentList:IStudent[]
}
const URL="/student";
export const getAllStudent=async (page:IPage)=>{
    try {
        const response = await apiClient.get<AppResponse<IStudentResponse>>(URL+'/'+page.rowCount+"/"+page.pageNo);
        return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }
}
export const creatStudent=async (student:IStudent)=>{
    try {
   const response = await apiClient.post<AppResponse<IStudentResponse>>(URL,student);
        console.log(response)
   return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }

}
export const updateStudent=async (student:IStudent)=>{
    try {
        const response = await apiClient.put<AppResponse<IStudentResponse>>(URL,student);
        console.log(response)
        return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }

}
export const deleteStudent=async (student:IStudent)=>{
    try {
        const response = await apiClient.delete<AppResponse<IStudentResponse>>(URL+"/"+student._id);
        console.log(response)
        return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }

}