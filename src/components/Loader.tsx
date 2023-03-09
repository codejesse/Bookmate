import Lottie from "lottie-react";
import LogoAnimation from "../assets/Bookmate.json"

const Loader = () => {
    return ( 
        <div>
            <Lottie className="h-screen m-auto bg-white" animationData={LogoAnimation} loop={false}/>
        </div>
     );
}
 
export default Loader;