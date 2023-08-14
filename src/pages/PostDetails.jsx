import { useParams } from "react-router-dom";
import { useAddLikeMutation, useSinglePostQuery } from "../redux/features/post/postApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { FcLike } from "react-icons/fc";
import { RxAvatar } from "react-icons/rx"
import AddComentForm from "../components/AddComentForm";
import Loading from "../components/Shared/Loading";


const PostDetails = () => {
    const { id } = useParams()
    const { data: singlePost, isLoading: isDataLoading, isError: isDataError } = useSinglePostQuery(id);
    const post = singlePost?.data;

    const [addLike, { data, isLoading, isSuccess, error }] = useAddLikeMutation();

    const handleLike = () => {

        addLike(post?._id)
    }

    useEffect(() => {
        if (!isLoading && !error && isSuccess && data.statusCode === 200) {
            toast.success("like added successfully");
        } else if (!isLoading && error) {
            toast.error(error.data.message);
        }
    }, [data, isSuccess, isLoading, error]);


    let content = null;

    if (isDataLoading) {
        content = <div className="h-screen flex justify-center items-center">
            <Loading />
        </div>
    }

    if (!isDataLoading && isDataError) {
        content = <div className="h-screen flex justify-center items-center">
            <h1 className="text-2xl text-red-500">Something went wrong</h1>
        </div>
    }

    if (!isDataLoading && !isDataError && singlePost) {
        content = <div className='container px-5 py-24 mx-auto' style={{ cursor: "auto" }}>
            <div className='lg:w-4/5 mx-auto flex flex-wrap'>

                <img src={post?.image} alt='Post' className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' />

                <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0' style={{ cursor: "auto" }}>




                    <p className='leading-relaxed'>{post?.details}</p>

                    <p className='flex mt-3'>
                        <span className='mx-2 font-semibold'>
                            {
                                post?.like
                            }
                        </span>
                        <span onClick={() => handleLike()} className='cursor-pointer'>
                            <FcLike size={22} />
                        </span>

                    </p>


                    {/* Reviews Section */}
                    <AddComentForm postId={id} />

                    {post?.reviews && post.reviews.length > 0 && (
                        <div className='py-3'>
                            <h2 className='font-semibold text-lg'>
                                Reviews
                                {/* <span className='text-sm'>({post?.individual_rating})</span> */}
                            </h2>
                            {post?.reviews.map((review, index) => (
                                <div key={index} className='border-t border-gray-300 py-2'>
                                    <div className='flex items-center mb-1'>
                                        <span className='mr-1 text-green-600'>
                                            <RxAvatar size={20} />
                                        </span>

                                    </div>
                                    <p className='italic'>{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    }


    return (
        <div className="container">
            {
                content
            }
        </div>
    );
};

export default PostDetails;