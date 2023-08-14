/* eslint-disable react/no-unescaped-entities */

import AddPostForm from "./AddPostForm";


const Hero = () => {
    return (
        <section className="px-2 py-16 bg-white md:px-0">
            <div className="items-center max-w-6xl px-0 mx-auto xl:px-5">
                <div className="flex flex-wrap items-center sm:-mx-3">
                    <div className="w-full md:w-1/2 md:px-3">
                        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                                <span className="block xl:inline">Share your post in</span>
                                <span className="block text-indigo-600 xl:inline">Photo Book</span>
                            </h1>

                            <AddPostForm />

                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                            <img src="https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;