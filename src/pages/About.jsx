/* eslint-disable react/no-unescaped-entities */

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import UpdateInfoForm from "../components/UpdateInfoForm";
import { useGetAboutQuery } from "../redux/features/about/aboutApi";
import Loading from '../components/Shared/Loading';



const About = () => {

    const { data, isLoading, error } = useGetAboutQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const aboutInfo = data?.data;
    let Info = {}


    let content = null;
    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && error) {
        content = <span className="text-red-500">{error.data.message}</span>
    }

    if (!isLoading && !error && aboutInfo.length > 0) {
        Info = aboutInfo[0];
        content =
            <div>
                <p className="mb-4 font-sm tracking-tight text-gray-400 xl:mb-6">{
                    Info.description
                }</p>

                <ul>
                    <li className="flex items-center py-1 space-x-4 xl:py-3">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        <span className="font-medium text-gray-500">
                            <span className="text-yellow-500 font-bold">Name : </span>
                            <span className="me-2 inline-block">
                                {Info.name}
                            </span>
                        </span>

                    </li>
                    <li className="flex items-center py-1 space-x-4 xl:py-3">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        <span className="font-medium text-gray-500">
                            <span className="text-yellow-500 font-bold">Email : </span>
                            <span className="me-2 inline-block">
                                {Info.email}
                            </span>
                        </span>

                    </li>
                    <li className="flex items-center py-1 space-x-4 xl:py-3">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        <span className="font-medium text-gray-500">
                            <span className="text-yellow-500 font-bold">Institute : </span>
                            <span className="me-2 inline-block">
                                {Info.institute}
                            </span>
                        </span>

                    </li>
                    <li className="flex items-center py-1 space-x-4 xl:py-3">
                        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        <span className="font-medium text-gray-500">
                            <span className="text-yellow-500 font-bold">Address : </span>
                            <span className="me-2 inline-block">
                                {Info.address}
                            </span>
                        </span>

                    </li>
                </ul>
            </div>

    }

    return (
        <div className="container my-10">
            <div>

                <div className="text-end my-5">
                    <button onClick={() => setOpen(true)} className='btn'>Edit Info</button>
                </div>

                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

                                        <div className='bg-gray-50 px-4 py-3 flex justify-between sm:px-6'>
                                            <div>
                                                <h3 className="font-bold text-lg">UpdateInfo</h3>
                                            </div>
                                            <button onClick={() => setOpen(false)}
                                                ref={cancelButtonRef} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </div>
                                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                            <UpdateInfoForm info={Info} setOpen={setOpen} />
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>

                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>
            <section className="py-20  bg-gray-50">
                <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
                    <div className="flex flex-wrap items-center -mx-3">
                        <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                            <div className="w-full lg:max-w-md">
                                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">About me</h2>



                                {
                                    content
                                }


                            </div>
                        </div>
                        <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image" /></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;