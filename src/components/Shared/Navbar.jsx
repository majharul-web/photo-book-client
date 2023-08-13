
import { Link } from 'react-router-dom'
const Navbar = () => {

    const signOut = () => { }

    return (
        <div className='flex justify-center items-center bg-black'>
            <div className='container '>
                <div className='navbar '>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <label tabIndex={0} className='btn btn-sm btn-error lg:hidden'>
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
                                    <button onClick={() => router.push("/pc-builder")} className='my-1 btn btn-sm btn-error'>
                                        PC Builder{" "}
                                    </button>
                                </li> */}


                                <li>
                                    <button onClick={() => signOut()} className='my-1 btn btn-sm btn-outline btn-error'>
                                        Logout
                                    </button>
                                </li>

                                <li>
                                    <Link to='/login'>
                                        <button className='mx-1 btn btn-sm btn-outline btn-error'>Login</button>
                                    </Link>
                                </li>



                            </ul>
                        </div>
                        <Link className='hidden lg:flex' to='/'>
                            <h3 className='text-red-500 text-2xl font-bold '>Photo Book</h3>
                        </Link>
                    </div>

                    <div className='navbar-end'>
                        <Link className='lg:hidden' to='/'>
                            <h3 className='text-red-500 text-xl font-bold'>Photo Book</h3>
                        </Link>
                        <div className='hidden lg:flex items-center'>


                            <Link to='/pc-builder'>
                                <button className='my-1 btn btn-sm btn-error'>About </button>
                            </Link>


                            <button onClick={() => signOut()} className='mx-1 btn btn-sm btn-outline btn-error'>
                                Logout
                            </button>

                            <Link to='/login'>
                                <button className='mx-1 btn btn-sm btn-outline btn-error'>Login</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
