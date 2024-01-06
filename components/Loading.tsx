import { Fragment} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FidgetSpinner } from 'react-loader-spinner'
import React from 'react'
export default function Example() {

    return (
        <Transition.Root as={Fragment} show={true}>
            <Dialog as="div" className="relative z-50" onClose={() => console.log('')}>
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

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full sm:max-w-lg items-center justify-center">
                                <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 items-center justify-center">
                                    <div className="sm:flex sm:items-start items-center justify-center">
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <div className="mt-2">
                                                <div className="text-sm text-gray-500">
                                                    <FidgetSpinner
                                                        visible={true}
                                                        height="80"
                                                        width="80"
                                                        ariaLabel="fidget-spinner-loading"
                                                        wrapperStyle={{}}
                                                        wrapperClass="fidget-spinner-wrapper"
                                                    />
                                                    <p className='text-black'>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
