/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useEditAboutMutation } from "../redux/features/about/aboutApi";


const UpdateInfoForm = ({ info, setOpen }) => {

    console.log("info", info)

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
        setValue
    } = useForm()



    const [editAbout, { data, isLoading, isSuccess, error }] = useEditAboutMutation();

    const navigate = useNavigate();


    const onSubmit = (data) => {
        editAbout({ data, id: info._id });
    };


    useEffect(() => {
        if (info) {
            // Update form values when book data is available
            setValue("name", info?.name || ""); // Set default value or empty string if no value available
            setValue("email", info?.email || "");
            setValue("institute", info?.institute || "");
            setValue("description", info?.description || "");

        }
    }, [info, setValue]);

    useEffect(() => {


        if (!isLoading && !error && isSuccess && data.statusCode === 200) {
            toast.success("Info updated successfully");
            reset();
            setOpen(false)

        } else if (!isLoading && error) {
            toast.error(error.data.message);
        }
    }, [data, isSuccess, isLoading, error, navigate, reset, setOpen]);






    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="text-sm font-semibold text-gray-500">Name<span className="text-error">*</span></label>
                <input
                    type="name"
                    id="name"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("name", {
                        required: "Name is required",

                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <p className="text-error text-sm" role="alert">{errors.name.message}</p>}
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
                <label htmlFor="institute" className="text-sm font-semibold text-gray-500">Institute<span className="text-error">*</span></label>
                <input
                    type="institute"
                    id="institute"
                    autoFocus
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("institute", {
                        required: "Institute is required",

                    })}
                    aria-invalid={errors.institute ? "true" : "false"}
                />
                {errors.institute && <p className="text-error text-sm" role="alert">{errors.institute.message}</p>}
            </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="description" className="text-sm font-semibold text-gray-500">Description <span className="text-error">*</span></label>
                <textarea
                    type="description"
                    id="description"
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"

                    {...register("description", {
                        required: "Description is required",

                    })}
                    aria-invalid={errors.description ? "true" : "false"}
                />
                {errors.description && <p className="text-error text-sm" role="alert">{errors.description.message}</p>}
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-1"
                >
                    Update

                    {
                        isLoading && <span className="loading loading-dots loading-sm text-white ms-2"></span>
                    }
                </button>
            </div>

        </form>
    );
};

export default UpdateInfoForm;