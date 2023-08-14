/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAddCommentMutation } from "../redux/features/post/postApi";
import { useSelector } from "react-redux";


const AddComentForm = ({ postId }) => {


    const auth = useSelector((state) => state.auth);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()
    const [addComment, { data, isLoading, isSuccess, error }] = useAddCommentMutation();

    const onSubmit = (payload) => {

        if (!auth?.user?.email) {
            toast.error("Please login to comment post");
            return;
        }

        const data = {
            comment: payload.comment,
            email: auth?.user?.email || "",
        }



        addComment({
            id: postId, data: data
        })
    };

    useEffect(() => {
        if (!isLoading && !error && isSuccess && data.statusCode === 200) {
            toast.success("Add comment successfully");
            reset();

        } else if (!isLoading && error) {
            toast.error(error.data.message);
        }
    }, [data, isSuccess, isLoading, error, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" mt-5 flex flex-col space-y-5">

            <div className="flex flex-col space-y-1">
                <label htmlFor="comment" className="text-sm font-semibold text-gray-500">Comment<span className="text-error">*</span></label>
                <input
                    type="text"
                    id="comment"
                    placeholder="Your comment..."
                    className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("comment", {
                        required: "Enter comment",

                    })}
                    aria-invalid={errors.comment ? "true" : "false"}
                />
                {errors.comment && <p className="text-error text-sm" role="alert">{errors.comment.message}</p>}
            </div>


            <div className="relative flex flex-col sm:flex-row sm:space-x-4">

                <button className="btn btn-sm btn-primary">
                    Add comment
                    {
                        isLoading && <span className="loading loading-dots loading-xs text-white ms-2"></span>
                    }
                </button>

            </div>

        </form>
    );
};

export default AddComentForm;