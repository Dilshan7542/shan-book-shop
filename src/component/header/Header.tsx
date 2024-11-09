import style from './Header.module.css'
interface HeaderProps {
    message: string;
}
export const Header = ({message}:HeaderProps) => {

    return (<>
        <section className={`${style.header} w-100 bg-dark d-flex align-items-center justify-content-center`}>
            <h2 className="text-white text-center m-0 ">{message}</h2>
        </section>
    </>)
}