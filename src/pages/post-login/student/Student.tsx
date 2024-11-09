import {PlusCircle} from "@phosphor-icons/react";


import React, {useEffect, useState} from "react";
import {AddStudentDialog} from "./add-student-dialog/Add-Student-Dialog.tsx";
import {Column} from "primereact/column";
import {InputText} from "primereact/inputtext";
import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";

interface IStudent {
    studentId?: string;
    name: string;
    address: string;
    age: number;
    phone: string;
}


export const Student = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const hideVisibility = () => {
        setVisible(false);
    }
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [studentList,setStudentList]=useState<IStudent[]>([]);
    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
        console.log(event)
    };


    useEffect(() => {

        const students: IStudent[] = [
            {
                name: 'Alice Johnson',
                address: '123 Maple Street, Springfield',
                age: 25,
                phone: '0751234567'
            },
            {
                name: 'Bob Smith',
                address: '234 Oak Avenue, Springfield',
                age: 30,
                phone: '0752345678'
            },
            {
                name: 'Charlie Brown',
                address: '345 Pine Lane, Springfield',
                age: 22,
                phone: '0753456789'
            },
            {
                name: 'Daisy Miller',
                address: '456 Elm Boulevard, Springfield',
                age: 28,
                phone: '0754567890'
            },
            {
                name: 'Ethan Clark',
                address: '567 Cedar Drive, Springfield',
                age: 35,
                phone: '0755678901'
            },
            {
                name: 'Fiona Wong',
                address: '678 Birch Street, Springfield',
                age: 19,
                phone: '0756789012'
            },
            {
                name: 'George King',
                address: '789 Willow Avenue, Springfield',
                age: 27,
                phone: '0757890123'
            },
            {
                name: 'Hannah White',
                address: '890 Cherry Road, Springfield',
                age: 32,
                phone: '0758901234'
            },
            {
                name: 'Isaac Torres',
                address: '901 Ash Street, Springfield',
                age: 29,
                phone: '0759012345'
            },
            {
                name: 'Julia Carter',
                address: '1010 Pine Crescent, Springfield',
                age: 31,
                phone: '0750123456'
            }
        ];
        setStudentList(students);

    }, []);
    const studentHandler=(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(event)
        setStudentList(studentList)
    }
    const getHeader = () => {
        return (
            <div className="flex justify-content-center w-100">
                <button className="btn btn-success btn-sm" onClick={() => setVisible(true)}><PlusCircle size={32}/> Add
                    new Student
                </button>
                <AddStudentDialog hideVisibility={hideVisibility} visible={visible} studentHandler={studentHandler}/>
                <section className="w-100 d-flex justify-content-end">
                    <div className="p-inputgroup w-25">
                        <Button label="Search"/>
                        <InputText placeholder="Search"/>
                    </div>
                </section>
            </div>
        );
    };
    const getFooter = () => {
        return (<div>
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[5, 10, 20, 30]}
                       onPageChange={onPageChange}/>

        </div>)
    }

    const header = getHeader();
    const footer = getFooter();

    return (<>
        <section className="d-flex flex-column gap-4 justify-content-center align-items-center mt-3 w-100">
            <section className={'w-100'}>
                <section className="w-100 d-flex justify-content-center">
                    <DataTable value={studentList} header={header} footer={footer} className={"w-80 flex-grow-1"}>
                        <Column field="name" header="Name"></Column>
                        <Column field="address" header="Address"></Column>
                        <Column field="age" header="Age"></Column>
                        <Column field="phone" header="Phone"></Column>
                    </DataTable>
                </section>
            </section>
        </section>
    </>)
}