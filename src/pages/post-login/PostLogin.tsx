import {Link, Outlet} from "react-router-dom";
import {Header} from "../../component/header/Header.tsx";
import {useState} from "react";

interface SlideMenu {
    name: string;
    link?: string;
    icon:string;
    description?: string;
    list: {
        name: string;
        link: string;
        description: string;
    }[];
}

export const PostLogin = () => {
    const [message, setMessage] = useState('')
    const navList: SlideMenu[] = [
        {name: "Dashboard",icon:"ph ph-gauge", list: [{name: "go to Dashboard", link: "/", description: "Dashboard"},]},
        { name: "Order",icon:"ph ph-currency-circle-dollar", list: [
                {name: "Add Order", link: "order", description: "Manage Order"},
                {name: "Add Delete", link: "order", description: "Delete Order"},
            ]
        },
        {
            name: "Book", icon:"ph ph-book",list: [
                {name: "Add Book", link: "book", description: "Manage Book"}
            ]
        },
    ];
    const handleClick = (des: string) => {
        setMessage(des);
    }
    return (<>
        <Header message={message}/>
        <main className="" style={{'height':"92vh"}}>
            <section className="w-100 d-flex justify-content-between h-100">
                <section className="h-100 w-15 overflow-y-scroll" style={{'height': '50px'}}>
                    <section className={'h-5 d-flex justify-content-end align-items-center'}>
                       <button className={'btn btn-dark'}>Back</button>
                    </section>
                    <section className={'d-flex justify-content-center align-items-center h-95'}>
                        <section className="w-95">
                            <section className="accordion accordion-flush" id="main-side-nav-list">
                                {navList.map((slide, index) => (
                                    <section className="accordion-item">
                                        <h2 className="accordion-header" id={slide.name + index}>
                                            <button className=" accordion-button collapsed p-2" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={"#" + slide.name + index + 1}
                                                    aria-expanded="false" aria-controls={slide.name + index + 1}>
                                                {slide.link && <div className="p-3"><Link
                                                    to={slide.link}>{slide.name}</Link>
                                                </div>}
                                                {!slide.link && (<div className='d-flex align-items-center gap-1'><i
                                                    className={slide.icon + ' fw-bold'}></i>
                                                    <div className="fw-bold">{slide.name}</div>
                                                </div>)}
                                            </button>
                                        </h2>
                                        <div id={slide.name + index + 1} className="accordion-collapse collapse"
                                             aria-labelledby={slide.name + index} data-bs-parent="#main-side-nav-list">
                                            <div className="accordion-body pt-1 ps-0 pe-0">
                                                <section className={'d-flex flex-column gap-1'}>
                                                    {slide.list.map(list => (
                                                        <button className="w-100 btn btn-light" onClick={() => {
                                                            handleClick(list.description)
                                                        }}><Link to={list.link}>{list.name}</Link></button>))}
                                                </section>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </section>
                        </section>
                    </section>
                </section>
                <section className="">
                    <Outlet/>
                </section>
            </section>
        </main>
    </>)
}