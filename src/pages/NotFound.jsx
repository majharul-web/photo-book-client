import { Link } from "react-router-dom";
import NOF from "../assets/404_Error_Page.png";

const NotFound = () => {
    return (
        <div className='text-center'>

            <div className=''>
                <div className='h-screen flex justify-center items-center flex-col'>
                    <img
                        src={NOF}
                        alt='error_image'
                        style={{ display: "flex", margin: "50px auto" }}
                        width='700'
                    />
                    <Link href='/'>
                        <button className='btn-sm btn btn-error'>Back To Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
