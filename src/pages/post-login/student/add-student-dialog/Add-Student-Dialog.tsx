import {Dialog} from "primereact/dialog";
import {FieldValues, useForm} from "react-hook-form";

import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import {RegexService} from "../../../../utils/regex.service.ts";
import {IStudent} from "../../../../service/student/StudentService.ts";
import {useEffect} from "react";



interface DialogStudent {
    hideVisibility: () => void;
    studentHandler: (event: IStudent) => void;
    visible: boolean;
    isEdit:boolean;
    student?:IStudent
}

    const schema = z.object({
        name: z.string().min(2, {message: "Sorry you should input at least 2 character"}).regex(RegexService.NAME,{message:"invalid input"}),
        age:z.number().max(99,{message:"Age cannot be more than 2 digits"}),
        address:z.string(),
        phone:z.string().regex(RegexService.PHONE,{message:"Invalid Mobile Number"})
    });
export const AddStudentDialog = (dialog: DialogStudent) => {
    const {register, handleSubmit, formState: {errors,isValid},reset} = useForm<IStudent>({resolver: zodResolver(schema),mode:"onBlur"});
    useEffect(() => {
        if (dialog.student) {
        reset(dialog.student);
        }else{
            reset({name:undefined,age:undefined,address:undefined,phone:undefined});
        }

    }, [ reset,dialog]);

    const formData = (data: FieldValues) => {
        if (dialog.isEdit) {
        dialog.studentHandler({...data as IStudent,_id:dialog.student?._id});
        }else{
        dialog.studentHandler(data as IStudent);
        }
        dialog.hideVisibility();
        reset();
    }


    return (<>
        <Dialog header="Add new Student" visible={dialog.visible} style={{width: '50vw'}} onHide={() => {
            if (!dialog.visible) return;
            dialog.hideVisibility();
        }}>
            <section className="">
                <form className="row" onSubmit={handleSubmit(formData)}>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="name-id">Name</label>
                        <input type="text" className="form-control"
                               id="name-id"  {...register("name")}
                               onChange={(e) => {
                                   const value = e.target.value;
                                   e.target.value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                                   return e;
                               }}
                               aria-describedby="emailHelp" placeholder="Firt Name"/>
                        {errors.name?.message &&
                            < div className="invalid-input">
                            {errors.name.message}
                        </div>}
                    </section>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="address-id">Address</label>
                        <input type="text" className="form-control"
                               id="address-id"
                               {...register("address")}
                               aria-describedby="emailHelp" placeholder="Address"/>
                        {errors.address?.message &&
                            < div className="invalid-input">
                                {errors.address.message}
                            </div>}
                    </section>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="age-id">Age</label>
                        <input type="number" className="form-control" id="age-id" {...register("age",{ valueAsNumber: true })}
                               aria-describedby="emailHelp" placeholder="Age"/>
                        {errors.age?.message &&
                            < div className="invalid-input">
                                {errors.age.message}
                            </div>}
                    </section>
                    <section className="form-group col-12 col-sm-6">
                        <label htmlFor="phone-id">Phone</label>
                        <input type="text" className="form-control" id="phone-id" {...register("phone")}
                               aria-describedby="emailHelp" placeholder="Phone"/>
                        {errors.phone?.message &&
                            < div className="invalid-input">
                                {errors.phone.message}
                            </div>}
                    </section>
                    <section className="col-12 d-flex  align-items-center">
                        <button type="submit" className="btn btn-primary mt-3" disabled={!isValid}>{dialog.isEdit ? 'Update':'Save'}</button>
                    </section>
                </form>
            </section>
        </Dialog>
    </>)
}