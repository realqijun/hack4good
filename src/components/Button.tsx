import { Link } from "react-router-dom"
import '../App.css';
interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}
function Button({ children, color= 'primary' }: Props) {

    return (
        <>
            <div>
                <button
                    type="button"
                    className={"btn btn-" + color}
                >
                    {children}
                </button>
            </div>
        </>
    );
}

export default Button