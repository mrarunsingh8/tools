import {Card} from "flowbite-react";

export default function PrivacyPolicy(){
    return (
        <>
            <section className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                    Privacy Policy
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    At AI Tools Hub, your privacy is a priority. This Privacy Policy outlines how we collect, use, and
                    protect your information when you use our tools and services.
                </p>
            </section>
            <section className="container mx-auto px-4 my-12">
                    {/* 1. Introduction */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        AI Tools Hub is committed to ensuring that your privacy is protected. This Privacy Policy
                        outlines how
                        we handle your personal data when you use our services, visit our website, and engage with our
                        platform.
                    </p>

                    {/* 2. Information We Collect */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We may collect the following types of information from users:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
                        <li>Personal Information: Name, email address, and contact details when you sign up or contact
                            us.
                        </li>
                        <li>Usage Data: Information about how you use our website and tools, including IP address,
                            browser type,
                            and browsing behavior.
                        </li>
                        <li>Media Files: Uploaded images, videos, or files for conversion, resizing, or AI generation
                            purposes.
                        </li>
                    </ul>

                    {/* 3. How We Use the Information */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use the
                        Information</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
                        <li>To provide and improve our services, including AI-powered image and video tools.</li>
                        <li>To communicate with you regarding your account, services, or any inquiries.</li>
                        <li>To analyze how our users interact with the website and improve user experience.</li>
                        <li>To ensure the security of our website and services.</li>
                    </ul>

                    {/* 4. Data Sharing and Disclosure */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Sharing and
                        Disclosure</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We do not share, sell, or rent your personal data with third parties unless required to by law
                        or with
                        your explicit consent. However, we may share your data with:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
                        <li>Third-party service providers who assist us in providing the services.</li>
                        <li>Authorities or regulators if required by law.</li>
                    </ul>

                    {/* 5. Security of Information */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Security of
                        Information</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We are committed to ensuring that your data is secure. We use technical, administrative, and
                        physical
                        safeguards to protect the information we collect. However, please be aware that no method of
                        transmission over the Internet is 100% secure.
                    </p>

                    {/* 6. Your Rights */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6">
                        <li>Access, update, or delete the personal information we hold about you.</li>
                        <li>Opt-out of any marketing communications.</li>
                        <li>Request data portability or restrict the processing of your personal information.</li>
                    </ul>

                    {/* 7. Changes to This Privacy Policy */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Changes to This Privacy
                        Policy</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        We may update this Privacy Policy from time to time. If we make significant changes, we will
                        notify you
                        by email or by posting a prominent notice on our website. Your continued use of our services
                        after such
                        changes will signify your consent to the updated policy.
                    </p>

                    {/* 8. Contact Us */}
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Contact Us</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        If you have any questions or concerns about this Privacy Policy, please contact us:
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        Email: <a href="mailto:privacy@aitoolshub.com"
                                  className="text-blue-600 dark:text-blue-400 hover:underline">privacy@aitoolshub.com</a>
                        <br/>
                        Address: 123 AI Tools Lane, Tech City, 56789
                    </p>
            </section>
        </>
    )
}