import { useForm } from "react-hook-form";


const RegisterForm = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    }

    const handleGoogleLogin = (data) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
                <label htmlFor="fName" className="text-sm font-semibold text-gray-500">First Name<span className="text-error">*</span></label>
                <input
                    type="fName"
                    id="fName"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("fName", {
                        required: "First name is required",

                    })}
                    aria-invalid={errors.fName ? "true" : "false"}
                />
                {errors.fName && <p className="text-error text-sm" role="alert">{errors.fName.message}</p>}
            </div>
            <div className="flex flex-col space-y-1">
                <label htmlFor="lName" className="text-sm font-semibold text-gray-500">First Name<span className="text-error">*</span></label>
                <input
                    type="lName"
                    id="lName"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("lName", {
                        required: "Last name is required",

                    })}
                    aria-invalid={errors.lName ? "true" : "false"}
                />
                {errors.lName && <p className="text-error text-sm" role="alert">{errors.lName.message}</p>}
            </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="text-sm font-semibold text-gray-500">Email address <span className="text-error">*</span></label>
                <input
                    type="email"
                    id="email"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("email", {
                        required: "Email Address is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Please enter a valid email",
                        }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p className="text-error text-sm" role="alert">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col space-y-1">
                <label htmlFor="password" className="text-sm font-semibold text-gray-500">Password <span className="text-error">*</span></label>
                <input
                    type="password"
                    id="password"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"

                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password should be at-least 8 characters.",
                        }
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p className="text-error text-sm" role="alert">{errors.password.message}</p>}
            </div>
            <div className="flex flex-col space-y-1">
                <label htmlFor="address" className="text-sm font-semibold text-gray-500">Address <span className="text-error">*</span></label>
                <textarea
                    type="address"
                    id="address"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"

                    {...register("address", {
                        required: "address is required",

                    })}
                    aria-invalid={errors.address ? "true" : "false"}
                />
                {errors.address && <p className="text-error text-sm" role="alert">{errors.address.message}</p>}
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-1"
                >
                    Log in
                </button>
            </div>
            <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                    <span className="h-px bg-gray-400 w-14"></span>
                    <span className="font-normal text-gray-500">or login with</span>
                    <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                    <span
                        onClick={() => handleGoogleLogin()}
                        className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none cursor-pointer"
                    >
                        <span>
                            <svg className="w-5 h-5 text-gray-800 fill-current group-hover:text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>

                        </span>
                        <span className="text-sm font-medium text-gray-800 group-hover:text-white">Google</span>
                    </span>

                </div>
            </div>
        </form>
    );
};

export default RegisterForm;