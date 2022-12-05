import { ToastContainer } from "react-toastify";
import Navbar from "../navegation/Navbar";
import Footer from "../navegation/Footer";


const Layout = (props) => {
    return(
        <div>
            <Navbar/>
            <ToastContainer autoClose={5000} />
            {props.children}
            <Footer/>
        </div>
    );
}
export default Layout