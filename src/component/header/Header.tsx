import style from './Header.module.css'
interface HeaderProps {
    message: string;
}
export const Header = ({message}:HeaderProps) => {

    return (<>
        <section className={`${style.header} w-100 bg-dark`}>
            <h2 className="text-white">{message}</h2>
        </section>
    </>)
}