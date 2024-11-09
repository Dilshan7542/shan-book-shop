import {Dialog} from "primereact/dialog";
import React from "react";

interface DialogStudent{
    hideVisibility:()=>void;
    studentHandler:(event:React.FormEvent<HTMLFormElement>)=>void;
    visible:boolean;
}

export const AddStudentDialog = (dialog:DialogStudent) => {
    const handleSubmit=(event: React.FormEvent<HTMLFormElement>)=>{

        event.preventDefault();
        dialog.studentHandler(event);
    }
    return (<>
        <Dialog header="Add new Student" visible={dialog.visible} style={{ width: '50vw' }} onHide={() => {if (!dialog.visible) return; dialog.hideVisibility(); }}>
            <section className="">
                <form className="row" onSubmit={handleSubmit}>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="name-id">Name</label>
                        <input type="text" className="form-control" id="name-id" name='name'
                               aria-describedby="emailHelp" placeholder="Firt Name"/>
                    </section>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="address-id">Address</label>
                        <input type="text" className="form-control" id="address-id" name='address'
                               aria-describedby="emailHelp" placeholder="Firt Name"/>
                    </section>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="age-id">Age</label>
                        <input type="number" className="form-control" id="age-id" name="age"
                               aria-describedby="emailHelp" placeholder="Age"/>
                    </section>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="phone-id">Phone</label>
                        <input type="text" className="form-control" id="phone-id" name='phone'
                               aria-describedby="emailHelp" placeholder="Phone"/>
                    </section>
                    <section className="col-12 d-flex  align-items-center">
                        <button type="submit" className="btn btn-primary mt-3">save</button>
                    </section>
                </form>


            </section>
        </Dialog>
    </>)
}