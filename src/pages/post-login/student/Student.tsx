import {PlusCircle} from "@phosphor-icons/react";


import {useEffect, useState} from "react";
import {AddStudentDialog} from "./add-student-dialog/Add-Student-Dialog.tsx";
import {Column} from "primereact/column";
import {InputText} from "primereact/inputtext";
import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import {addStudent, getAllStudent, IStudent} from "../../../service/student/StudentService.ts";
import {ResponseCode} from "../../../service/ResponseCode.ts";


interface SortStudent{
    name: string;
    code: string;
}
const sortList: SortStudent[] = [
    {name: 'A-Z', code: 'A-Z'},
    {name: 'name', code: 'name'},
    {name: 'age', code: 'age'},
    {name: 'address', code: 'address'},
    {name: 'phone', code: 'phone'},
    {name: 'Z-A', code: 'Z-A'},
];

export const Student = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const hideVisibility = () => {
        setVisible(false);
    }
    const [sort, setSort] = useState<SortStudent | null>(null);
    const [first, setFirst] = useState<number>(0);
    const [rows, setRows] = useState<number>(10);
    const [studentList, setStudentList] = useState<IStudent[]>([]);
    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
        console.log(event)
    };
    useEffect(() => {
        loadAllStudent();
    }, []);

    const studentHandler = (event: IStudent) => {
        addStudent(event).then(resp=>{
            console.log(resp)
            if (resp.status == ResponseCode.SUCCESS) {
                loadAllStudent();
            }
        }).catch(error=>{
            console.log(error);
        });
    }
    const loadAllStudent=()=>{
        getAllStudent().then(resp=>{
            if (resp.status === ResponseCode.SUCCESS) {
                setStudentList(resp.content);
            }
        });
    }
    const searchStudent=()=>{
        console.log(sort);
    }
    const getHeader = () => {
        return (
            <div className="flex justify-content-center w-100">
                <button className="btn btn-success btn-sm" onClick={() => setVisible(true)}><PlusCircle size={32}/> Add
                    new Student
                </button>
                <AddStudentDialog hideVisibility={hideVisibility} visible={visible} studentHandler={studentHandler}/>
                <section className="w-100 d-flex justify-content-end min-w-50">
                    <div className="p-inputgroup w-50">
                        <Button label="Search" onClick={searchStudent}/>
                        <InputText placeholder="Search" className={'w-50'}/>
                            <Dropdown value={sort} className={'w-10'}
                                      onChange={(e: DropdownChangeEvent) => setSort(e.value)} options={sortList}
                                      optionLabel="name"
                                      placeholder="Sort"
                                      checkmark={true}  highlightOnSelect={false}

                            />

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