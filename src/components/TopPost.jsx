import { useMemo } from "react";
import { useGetPostsQuery } from "../redux/features/post/postApi";
import PostCard from "./PostCard";


const TopPost = () => {
    const { data, isLoading, error } = useGetPostsQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    const allPosts = data?.data;

    console.log("allPosts", allPosts)

    // const topBooks = useMemo(() => {

    //     if (allPosts.length > 0) {
    //         const computedUsers = allPosts.sort((a, b) => a.like - b.like);
    //         return computedUsers.slice(0, 3);
    //     }
    //     return [];

    // }, [allPosts]);

    // console.log("topBooks", topBooks)


    return (
        <section className="px-2 py-16 bg-white md:px-0">
            <div className="items-center max-w-6xl px-0 mx-auto xl:px-5">
                <h3 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-xl md:text-4xl lg:text-2xl xl:text-3xl">
                    <span className="block xl:inline">Top </span>
                    <span className="block text-indigo-600 xl:inline"> Post</span>
                </h3>

                {allPosts ? (
                    <section className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 my-10 '>
                        {allPosts?.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </section>
                ) : (
                    <div>
                        {/* <Image src={noDataImg} alt='Not Found' width={500} height={500} /> */}
                    </div>
                )}
            </div>
        </section>
    );
};

export default TopPost;