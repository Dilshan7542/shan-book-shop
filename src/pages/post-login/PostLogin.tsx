import {Link, Outlet} from "react-router-dom";
import {Header} from "../../component/header/Header.tsx";
import {useState} from "react";
// import { Dialog } from 'primereact/dialog';

interface SlideMenu {
    name: string;
    link?: string;
    icon: string;
    description?: string;
    list: {
        name: string;
        link: string;
        description: string;
    }[];
}

export const PostLogin = () => {
    const [message, setMessage] = useState('');
    const [togggleMunu, setTogggleMunu] = useState(true);
    const navList: SlideMenu[] = [
        {
            name: "Dashboard",
            icon: "ph ph-gauge",
            description: "Dashboard",
            list: [{name: "go to Dashboard", link: "/", description: "Dashboard"},]
        },
        {
            name: "Student", icon: "ph ph-person",
            description: "Manage Student",
            link: "student",
            list: [
                {name: "Add Student", link: "student", description: "Manage Student"},
            ]
        },
        {
            name: "Order", icon: "ph ph-currency-circle-dollar", list: [
                {name: "Add Order", link: "order", description: "Manage Order"},
                {name: "Add Delete", link: "order", description: "Delete Order"},
            ]
        },
        {
            name: "Book", icon: "ph ph-book", list: [
                {name: "Add Book", link: "book", description: "Manage Book"}
            ]
        },
        {
            name: "User", icon: "ph ph-user-circle", list: [
                {name: "Add User", link: "user", description: "Manage User"}
            ]
        },
    ];
    const handleClick = (des: string) => {
        setMessage(des);
    }
    const handleToggleMenu = () => {
        setTogggleMunu(!togggleMunu);
    }
    return (<>
        <Header message={message}/>
        <main className="" style={{'height': "92vh"}}>
            <section className="w-100 d-flex justify-content-between h-100 ">
                <section className="h-100 w-15 overflow-y-scroll min-w-300px"
                         style={{height: '50px', display: togggleMunu ? "block" : "none"}}>
                    <section className={'h-5 d-flex justify-content-end align-items-center'}>
                        <button className={'btn btn-dark'} onClick={handleToggleMenu}>Back</button>
                    </section>
                    <section className={'d-flex justify-content-center align-items-center h-95'}>
                        <section className="w-95">
                            <section className="accordion accordion-flush" id="main-side-nav-list">
                                {navList.map((slide, index) => (
                                    <section className="accordion-item" key={index} onClick={()=>handleClick(slide.description ? slide.description:slide.list[0].description)}>
                                        <h2 className="accordion-header" id={slide.name + index}>
                                            <Link
                                                to={slide.link ? slide.link:slide.list[0].link} >
                                            <button className=" accordion-button collapsed p-2 fw-bold" type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={"#" + slide.name + index + 1}
                                                    aria-expanded="false" aria-controls={slide.name + index + 1}>
                                             {/*   {slide.link && <div className="">{slide.name}
                                                </div>}
                                                {!slide.link && (<div className='d-flex align-items-center gap-1'><i
                                                    className={slide.icon + ' fw-bold'}></i>
                                                    <div className="fw-bold">{slide.name}</div>
                                                </div>)}*/}
                                                {slide.name}
                                            </button>
                                            </Link>
                                        </h2>
                                        <div id={slide.name + index + 1} className="accordion-collapse collapse"
                                             aria-labelledby={slide.name + index} data-bs-parent="#main-side-nav-list">
                                            <div className="accordion-body pt-1 ps-0 pe-0">
                                                <section className={'d-flex flex-column gap-1'}>
                                                    {slide.list.map((subSlide, index2) => (
                                                        <Link to={subSlide.link} key={index2}>
                                                        <button  className="w-100 btn btn-light"
                                                                onClick={() => {
                                                                    handleClick(subSlide.description)
                                                                }}>{subSlide.name}</button></Link>))}
                                                </section>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </section>
                        </section>
                    </section>
                </section>
                <section className=" bg-app-primary w-95">
                    <Outlet/>
                </section>
            </section>
        </main>
    </>)
}