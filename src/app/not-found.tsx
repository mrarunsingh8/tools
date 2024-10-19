import Link from "next/link";
import {Button} from "flowbite-react";
import Image from "next/image";

export default function NotFound(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="text-center">
                {/* 404 Error Text */}
                <h1 className="text-7xl font-extrabold text-cyan-700 dark:text-cyan-400 mb-4">404</h1>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Call to Action Button */}
                <div className="flex justify-center space-x-4">
                    <Link href="/">
                        <Button gradientDuoTone="cyanToBlue" className="px-6 py-3">
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Illustration or Decorative Icon */}
            <div className="my-12">
                <Image
                    src="https://thumbs.dreamstime.com/b/error-page-not-found-system-updates-uploading-operation-computing-installation-programs-system-maintenance-flat-vector-142684021.jpg"
                    alt="404 Illustration"
                    className="h-64"
                    width={900}
                    height={1900}
                />
            </div>
        </div>
    )
}