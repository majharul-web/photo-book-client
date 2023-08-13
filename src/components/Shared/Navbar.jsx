
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/features/auth/authSlice';
const Navbar = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = auth?.user;

    const signOut = () => {
        dispatch(
            logOut()
        )
    }

    return (
        <div className='flex justify-center items-center bg-base-300'>
            <div className='container '>
                <div className='navbar '>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <label tabIndex={0} className='btn btn-sm btn-primary lg:hidden'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h8m-8 6h16'
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                            >
                                {/* <li>
                                    <button onClick={() => router.push("/pc-builder")} className='my-1 btn btn-sm btn-primary'>
                                        PC Builder{" "}
                                    </button>
                                </li> */}

                                <Link to='/media'>
                                    <button className='my-1 btn btn-sm btn-primary'>Media</button>
                                </Link>
                                <Link to='/about'>
                                    <button className='my-1 btn btn-sm btn-primary'>About </button>
                                </Link>


                                {
                                    user.email ? <li>
                                        <button onClick={() => signOut()} className='my-1 btn btn-sm btn-outline btn-primary'>
                                            Logout
                                        </button>
                                    </li> :
                                        <li>
                                            <Link to='/login'>
                                                <button className='mx-1 btn btn-sm btn-outline btn-primary'>Login</button>
                                            </Link>
                                        </li>

                                }





                            </ul>
                        </div>
                        <Link className='hidden lg:flex' to='/'>
                            <h3 className='text-blue-500 text-2xl font-bold '>Photo Book</h3>
                        </Link>
                    </div>

                    <div className='navbar-end'>
                        <Link className='lg:hidden' to='/'>
                            <h3 className='text-blue-500 text-xl font-bold'>Photo Book</h3>
                        </Link>
                        <div className='hidden lg:flex items-center'>

                            <Link to='/media'>
                                <button className='my-1 mx-1 btn btn-sm btn-primary'>Media</button>
                            </Link>
                            <Link to='/about'>
                                <button className='my-1 mx-1 btn btn-sm btn-primary'>About </button>
                            </Link>


                            {
                                user.email ? <button onClick={() => signOut()} className='mx-1 btn btn-sm btn-outline btn-primary'>
                                    Logout
                                </button> : <Link to='/login'>
                                    <button className='mx-1 btn btn-sm btn-outline btn-primary'>Login</button>
                                </Link>
                            }




                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
