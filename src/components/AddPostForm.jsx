import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAddPostMutation } from "../redux/features/post/postApi";
import { useSelector } from "react-redux";


const AddPostForm = () => {
    const auth = useSelector((state) => state.auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()



    const [addPost, { data, isLoading, isSuccess, error }] = useAddPostMutation();

    const navigate = useNavigate();


    const onSubmit = (data) => {

        if (!auth?.user?.email) {
            toast.error("Please login to share post");
            return;
        }
        data.createdBy = auth?.user?.email;

        addPost(data)
    };

    useEffect(() => {
        if (!isLoading && !error && isSuccess && data.statusCode === 200) {
            toast.success("Post shared successfully");
            reset();

        } else if (!isLoading && error) {
            toast.error(error.data.message);
        }
    }, [data, isSuccess, isLoading, error, navigate, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-5">


            <div className="flex flex-col space-y-1">
                <label htmlFor="address" className="text-sm font-semibold text-gray-500">Description <span className="text-error">*</span></label>
                <textarea
                    type="textarea"
                    id="textarea"
                    placeholder="Description..."
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"

                    {...register("details", {
                        required: "Description is required",

                    })}
                    aria-invalid={errors.details ? "true" : "false"}
                />
                {errors.details && <p className="text-error text-sm" role="alert">{errors.details.message}</p>}
            </div>

            <div className="flex flex-col space-y-1">
                <label htmlFor="image" className="text-sm font-semibold text-gray-500">Image<span className="text-error">*</span></label>
                <input
                    type="text"
                    id="image"
                    placeholder="Image link..."
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("image", {
                        required: "Image link is required",

                    })}
                    aria-invalid={errors.image ? "true" : "false"}
                />
                {errors.image && <p className="text-error text-sm" role="alert">{errors.image.message}</p>}
            </div>


            <div className="relative flex flex-col sm:flex-row sm:space-x-4">

                <button className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                    Share Post
                    {
                        isLoading && <span className="loading loading-dots loading-sm text-white ms-2"></span>
                    }
                </button>

            </div>

        </form>
    );
};

export default AddPostForm;