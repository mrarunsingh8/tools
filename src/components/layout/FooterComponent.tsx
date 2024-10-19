import {Footer} from "flowbite-react";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";

export default function FooterComponent(){
    return (
        <Footer container={true} className="py-8">
            <div className="w-full text-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Section 1: Logo */}
                    <div>
                        <Footer.Brand
                            href="/"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Logo"
                            name="AI Tools Hub"
                        />
                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                            AI-powered media tools for image conversion, resizing, and video generation.
                        </p>
                    </div>

                    {/* Section 2: Useful Links */}
                    <div className="text-left">
                        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Useful Links</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-2">
                                <Link href="/about-us" className="hover:underline">About Us</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/contact-us" className="hover:underline">Contact</Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3: Social Media */}
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Follow Us</h2>
                        <div className="flex justify-center space-x-6">
                            <Link href="https://facebook.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500">
                                <FaFacebook size={24} />
                            </Link>
                            <Link href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-400">
                                <FaTwitter size={24} />
                            </Link>
                            <Link href="https://instagram.com" className="text-gray-600 dark:text-gray-400 hover:text-pink-400">
                                <FaInstagram size={24} />
                            </Link>
                            <Link href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-700">
                                <FaLinkedin size={24} />
                            </Link>
                        </div>
                    </div>

                    {/* Section 4: Contact Information */}
                    <div>
                        <h2 className="mb-6 text-lg font-semibold text-gray-900 dark:text-white">Contact Us</h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Email: support@aitoolshub.com <br />
                            Phone: +1 (555) 123-4567 <br />
                            Address: 123 AI Lane, Tech City, 56789
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <Footer.Divider />
                <p className="my-6 text-sm text-gray-500 dark:text-gray-400">
                    © 2024 <a href="/" className="hover:underline">AI Tools Hub</a>. All Rights Reserved.
                </p>
            </div>
        </Footer>
    )
}