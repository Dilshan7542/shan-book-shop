import apiClient from "../ApiClient.ts";
import {AxiosError} from "axios";
export interface IStudent {
    studentId?: string;
    name: string;
    address: string;
    age: number;
    phone: string;
}
const URL="post/student";
export const getAllStudent=async ()=>{
    try {
        const response = await apiClient.get<IStudent[]>(URL);
        return response.data;
    }catch (error){
        throw (error as AxiosError).message;
    }
}