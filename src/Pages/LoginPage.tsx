import Button from '../components/Button';
import { Link } from "react-router-dom";
// import '../App.css'

function LoginPage() {
    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Username" id="username"/>

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"/>

                <Link to="/test">
                    <Button color='secondary'>Log In</Button>
                </Link>
            </form>
        </div>
    );
}

export default LoginPage;