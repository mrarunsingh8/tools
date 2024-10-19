import {Button, Card} from "flowbite-react";

export default function HomeFeatures(){
    return (
        <>
            <section className="py-16 bg-gray-50 dark:bg-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
                        Our Popular Tools
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Tool 1 - Image Converter */}
                        <Card>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Image Converter</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Convert images to different formats instantly.
                            </p>
                            <Button href="/image-converter" gradientDuoTone="cyanToBlue">
                                Try Image Converter
                            </Button>
                        </Card>

                        {/* Tool 2 - Image Resizer */}
                        <Card>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Image Resizer</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Resize your images for any platform with just a click.
                            </p>
                            <Button href="/image-resizer" gradientDuoTone="cyanToBlue">
                                Try Image Resizer
                            </Button>
                        </Card>

                        {/* Tool 3 - Video Converter */}
                        <Card>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Video Converter</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Convert videos to different formats and resolutions.
                            </p>
                            <Button href="/video-converter" gradientDuoTone="cyanToBlue">
                                Try Video Converter
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
                        Features to make your development easier
                    </h2>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Feature 1 */}
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center mb-4">
                                <svg
                                    className="w-10 h-10 text-cyan-600 dark:text-cyan-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.707V14a1 1 0 11-2 0V6.293L6.293 8.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 6.293z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Easy to use
                            </h3>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Build responsive layouts and design beautiful websites faster
                                with Tailwind CSS and Flowbite&pos;s prebuilt components.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center mb-4">
                                <svg
                                    className="w-10 h-10 text-cyan-600 dark:text-cyan-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.707V14a1 1 0 11-2 0V6.293L6.293 8.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 6.293z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Components Library
                            </h3>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Access a variety of components to customize and build unique
                                user experiences for your applications.
                            </p>
                        </div>
                        {/* Feature 3 */}
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex justify-center mb-4">
                                <svg
                                    className="w-10 h-10 text-cyan-600 dark:text-cyan-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.707V14a1 1 0 11-2 0V6.293L6.293 8.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 6.293z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                Open Source
                            </h3>
                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Flowbite is open-source and maintained by a community of
                                developers. Customize and contribute to the project on GitHub.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}