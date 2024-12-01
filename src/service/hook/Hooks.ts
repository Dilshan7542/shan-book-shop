
import {useState} from "react";




export const useDataState=<T>()=>{
    const [dataList, setDataList] = useState<T[]>([]);
    const [data, setData] = useState<T>()
    return {dataList,setDataList,data,setData}
}
export const useTableState=<T>()=>{
    const [sort, setSort] = useState<T | null>(null);
    const [first, setFirst] = useState<number>(5);
    const [rows, setRows] = useState<number>(10);
    return {sort,setSort,first,setFirst,rows,setRows};
}

export const useDialogState=()=> {
    const [visible, setVisible] = useState<boolean>(false);
    const [isEdit, setEdit] = useState<boolean>(false);
    const hideVisibility = () => {
        setVisible(false);
    }
    return {visible, setVisible, hideVisibility,isEdit,setIsEdit: setEdit};
}