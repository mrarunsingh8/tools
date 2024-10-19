import {Button, Card, Textarea, TextInput} from "flowbite-react";
import {FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter} from "react-icons/fa";

export default function ContactUs(){
    return(
        <>
            <section className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    Get in Touch with Us
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    We are here to answer any questions you may have about our tools, services, or products. Reach out
                    to us and we will respond as soon as possible.
                </p>
            </section>

            {/* Contact Form and Info Section */}
            <section className="container mx-auto px-4 my-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div>
                        <Card className="shadow-lg p-6 bg-white dark:bg-gray-800">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Send Us a
                                Message</h2>

                            <form className="space-y-6">
                                {/* Name Input */}
                                <TextInput
                                    id="name"
                                    type="text"
                                    placeholder="Your Name"
                                    required
                                    shadow={true}
                                    className="w-full"
                                />

                                {/* Email Input */}
                                <TextInput
                                    id="email"
                                    type="email"
                                    placeholder="Your Email"
                                    required
                                    shadow={true}
                                    className="w-full"
                                />

                                {/* Message Input */}
                                <Textarea
                                    id="message"
                                    placeholder="Write your message here..."
                                    required
                                    rows={5}
                                    shadow={true}
                                    className="w-full"
                                />

                                {/* Submit Button */}
                                <Button type="submit" gradientDuoTone="cyanToBlue" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Our Contact
                                Information</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400">
                                Feel free to reach us through any of the methods below. We are always here to assist
                                you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Email Info */}
                            <div className="flex items-center">
                                <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-4" size={24}/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">
                                        <a href="mailto:support@aitoolshub.com" className="hover:underline">
                                            support@aitoolshub.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Phone Info */}
                            <div className="flex items-center">
                                <FaPhone className="text-blue-600 dark:text-blue-400 mr-4" size={24}/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Phone</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            {/* Address Info */}
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-4" size={24}/>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Address</h3>
                                    <p className="text-lg text-gray-600 dark:text-gray-400">123 AI Tools Lane, Tech
                                        City, 56789</p>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="flex space-x-6 mt-4">
                                <a
                                    href="https://facebook.com"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook size={28}/>
                                </a>
                                <a
                                    href="https://twitter.com"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400"
                                    aria-label="Twitter"
                                >
                                    <FaTwitter size={28}/>
                                </a>
                                <a
                                    href="https://instagram.com"
                                    className="text-gray-600 dark:text-gray-400 hover:text-pink-400"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={28}/>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-700"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={28}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}