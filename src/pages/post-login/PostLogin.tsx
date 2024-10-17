import {Link, Outlet } from "react-router-dom";

interface SlideMenu{
    name:string;
    link?:string;
    description?:string;
    list:{
        name:string;
        link:string;
        description:string;
    }[];
}
interface HeaderProps {
    sendMessage: (msg: string) => void;
}
export const PostLogin = ({sendMessage}:HeaderProps) => {
    const navList:SlideMenu[]=[
        {name:"Dashboard",list:[], link:"/"},
        {name:"Order",list:[
            {name:"add order", link:"order",description:"Manage Order"},
            {name:"add delete", link:"order",description: "Delete Order"},
            ]},
        {name:"Book",list:[
                {name:"add order", link:"book",description:"Manage Book"}
            ]},

    ];
    const handleClick=(des:string)=>{
        sendMessage(des);
    }
        return (<>
            <main className="">
                <section className="w-100 d-flex justify-content-between">
                <section className="w-25">
                    <section>
                        <section className="accordion accordion-flush" id="main-side-nav-list">
                            {navList.map((slide, index) => (
                                <section className="accordion-item">
                                    <h2 className="accordion-header" id={slide.name+index}>
                                        <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target={"#"+slide.name+index+1}
                                                aria-expanded="false" aria-controls={slide.name+index+1}>
                                            {slide.link && <div className="p-3"><Link className="text-decoration-none" to={slide.link}>{slide.name}</Link></div> }
                                            {!slide.link && slide.name}
                                        </button>
                                    </h2>
                                    <div id={slide.name+index+1} className="accordion-collapse collapse"
                                         aria-labelledby={slide.name+index} data-bs-parent="#main-side-nav-list">
                                        <div className="accordion-body p-3">
                                            {slide.list.map(list=> (<button onClick={()=>{handleClick(list.description)}}><Link to={list.link}>{list.name}</Link></button>))}
                                        </div>
                                    </div>
                                </section>
                            ))}
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