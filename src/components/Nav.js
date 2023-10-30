import { Link } from "react-router-dom";
import { UserAuth } from './authConfig/AuthContext';
function Nav() {
    const { user, logOut } = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <nav>
            <div class="nav-wrapper purple darken-3">
                <a href="#" class="brand-logo">Movies</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {user?.displayName ? (
                        <li><a onClick={handleSignOut} >Logout</a></li>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}

                </ul>
            </div>
        </nav>
    );
}
export default Nav;