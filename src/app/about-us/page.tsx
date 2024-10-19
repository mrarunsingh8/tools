import {Button, Card} from "flowbite-react";

export default function AboutUs(){
    return(
        <>
            <section className="bg-white dark:bg-gray-900 py-16">
                <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        About AI Tools Hub
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        At AI Tools Hub, we are committed to delivering the best AI-powered media tools for image and
                        video conversions, resizing, and more. Our mission is to empower creators and professionals with
                        fast, efficient, and reliable tools.
                    </p>
                    <Button size="lg" gradientDuoTone="cyanToBlue" className="mt-6">
                        Explore Our Tools
                    </Button>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
                        Our Mission & Vision
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Mission</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our mission is to provide innovative, easy-to-use, and reliable AI tools that help
                                professionals streamline their workflows and save valuable time.
                            </p>
                        </div>
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Vision</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We envision a world where anyone can access powerful, AI-driven media tools to transform
                                their creative ideas into reality, without technical barriers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <Card imgSrc="https://flowbite.com/docs/images/people/profile-picture-1.jpg" className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Jane Doe</h3>
                            <p className="text-gray-500 dark:text-gray-400">CEO & Co-Founder</p>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Jane has over 15 years of experience in AI and software development, leading the
                                company’s vision and strategic direction.
                            </p>
                        </Card>

                        {/* Team Member 2 */}
                        <Card imgSrc="https://flowbite.com/docs/images/people/profile-picture-2.jpg" className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">John Smith</h3>
                            <p className="text-gray-500 dark:text-gray-400">CTO & Co-Founder</p>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                John is the technical mastermind behind our AI-powered tools, focusing on development,
                                scalability, and performance.
                            </p>
                        </Card>

                        {/* Team Member 3 */}
                        <Card imgSrc="https://flowbite.com/docs/images/people/profile-picture-3.jpg" className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Emily Williams</h3>
                            <p className="text-gray-500 dark:text-gray-400">Lead Developer</p>
                            <p className="mt-4 text-gray-600 dark:text-gray-400">
                                Emily brings expertise in front-end and back-end development, ensuring that our tools
                                are both functional and user-friendly.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We constantly push the boundaries of technology to create cutting-edge tools that solve
                                real-world problems.
                            </p>
                        </div>
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Customer Focus</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our users are at the heart of everything we do. We are committed to delivering the best
                                user experience and customer support.
                            </p>
                        </div>
                        <div
                            className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Excellence</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                We strive for excellence in every aspect of our work, from product design to technical
                                performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-white dark:bg-gray-900 text-center flex flex-col items-center justify-center">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Ready to Learn More?</h2>
                <Button size="lg" gradientDuoTone="cyanToBlue">
                    Contact Us
                </Button>
            </section>
        </>
    )
}