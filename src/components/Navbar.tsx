import Logo from "../assets/Nav-logo.png"
import Modal from "./Modal";

const Navbar = () => {
    return ( 
        <div className="flex flex-row flex-1 w-full h-20 fixed overflow-hidden z-40 bg-white">
            <div className="ml-5">
                <img src={Logo} alt="nav-logo" />
            </div>
            <div className="flex flex-row m-auto justify-between w-2/6">
                <p className="neutral-800 text[15px] not-italic font-medium mt-2.5">Library</p>
                <p className="neutral-800 text[15px] not-italic font-medium mt-2.5">Saved</p>
                <div className="flex flex-row justify-center">
                    {/* <button className="w-32 h-11 border-2 border-green-200 text-green-400 bg-none rounded-3xl">Add book</button> */}
                    <Modal />
                </div>
            </div>
            <div className="flex justify-center w-32">
                <div className="flex flex-row m-3 mt-5 text[15px] not-italic font-medium mt-1.5">
                    <p>👨🏿‍💻</p>
                    <p className="font-medium font-thin">Sign in</p>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;

