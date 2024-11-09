import {PlusCircle} from "@phosphor-icons/react";
import {Dialog} from "primereact/dialog";

import {useState} from "react";


export const User=()=>{
    const [visible, setVisible] = useState<boolean>(false);
    return (<>
        <section className="d-flex justify-content-center align-items-center">
            <section>
                <button className="btn btn-success btn-sm" onClick={() => setVisible(true)}><PlusCircle size={32} /> Add new User</button>
                <Dialog header="Add new user" visible={visible} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                    <section className="">
                        <form className="row">
                            <section className="form-group col-12 col-sm-6">
                                <label htmlFor="name-id">Email address</label>
                                <input type="text" className="form-control" id="name-id"
                                       aria-describedby="emailHelp" placeholder="Firt Name"/>
                            </section>
                            <section className="form-group col-12 col-sm-6">
                                <label htmlFor="name-id">Email address</label>
                                <input type="text" className="form-control" id="name-id"
                                       aria-describedby="emailHelp" placeholder="Firt Name"/>
                            </section>
                                <section className="col-12 d-flex justify-content-center align-items-center">
                            <button type="submit" className="btn btn-primary mt-3">save</button>
                                </section>
                        </form>


                    </section>
                </Dialog>
            </section>
            <section>
            </section>
            <section></section>
        </section>
    </>)
}