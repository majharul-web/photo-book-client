/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {

    return (
        <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
            <div
                className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
            >
                <div
                    className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly"
                >
                    <div className="my-3 text-3xl font-bold tracking-wider text-center">
                        <a href="#">Photo Book</a>
                    </div>
                    <em className="mt-6 text-sm text-center text-white md:mt-0">
                        Photo Book is a digital or physical collection of images organized and presented in a structured manner to showcase visual content. It serves as a visually appealing way to display photographs, artwork, or other visual media.
                    </em>
                    <p className="flex flex-col items-center justify-center mt-10 text-center">
                        <span> Don't have an account?</span>
                        <Link to='/register' className="underline">Get Started!</Link>
                    </p>

                </div>
                <div className="p-5 bg-white md:flex-1">
                    <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;