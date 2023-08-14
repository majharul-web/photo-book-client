/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';
import { useAddLikeMutation } from '../redux/features/post/postApi';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const PostCard = ({ post }) => {

    const [addLike, { data, isLoading, isSuccess, error }] = useAddLikeMutation();

    const handleLike = () => {
        console.log({ like: 1, id: post?._id })
        addLike(post?._id)
    }

    useEffect(() => {
        if (!isLoading && !error && isSuccess && data.statusCode === 200) {
            toast.success("like added successfully");
        } else if (!isLoading && error) {
            toast.error(error.data.message);
        }
    }, [data, isSuccess, isLoading, error]);
    return (
        <div className='w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl'>

            <img src={post?.image} alt='Post' className='h-80 w-72 object-cover rounded-t-xl' />
            <div className='px-4 py-3 w-72'>
                <div className='flex justify-between items-center mb-1'>
                    <p>
                        <Link to={`/post/${post?._id}`} className='btn btn-sm btn-primary'>Details</Link>
                    </p>
                    <p className='flex'>
                        <span className='mx-2 font-semibold'>
                            {
                                post?.like
                            }
                        </span>
                        <span onClick={() => handleLike()} className='cursor-pointer'>
                            <FcLike size={22} />
                        </span>

                    </p>


                </div>
                <hr className='' />
                <em className='pt-1'>
                    {post?.details.slice(0, 50)}
                </em>

                {/* <div className='flex items-center'>
                        <p className='text-lg font-semibold text-black cursor-auto my-3'>৳ {post?.price}</p>

                        <div className='ml-auto my-3'>
                            <div className='flex'>
                                <span className='flex items-center'>

                                    <span className='text-gray-600 ml-3'>{post?.average_rating}</span>
                                </span>
                            </div>
                        </div>
                    </div> */}
            </div>

        </div>
    );
};

export default PostCard;