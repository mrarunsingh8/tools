import {Button, FileInput, Spinner} from "flowbite-react";

export default function ImageConverter(){
    return (
        <section className="container mx-auto px-4 text-center py-16">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                Image Converter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Upload your image and convert it to any desired format like JPEG, PNG, or WebP instantly.
            </p>

            <div className="p-6 max-w-3xl mx-auto dark:bg-gray-800">
                {/* Image Upload */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Select Image
                    </h3>
                    <FileInput
                        id="fileUpload"
                        accept="image/*"
                        helperText="Choose an image to convert."
                    />
                </div>

                {/* Format Dropdown */}
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        Output Format
                    </h3>

                </div>

                {/* Convert Button */}
                <div className="flex justify-center">
                    <Button
                        gradientDuoTone="cyanToBlue"
                        className="px-6 py-3"
                    >
                        <Spinner size="sm" light={true} className="mr-2"/>
                        Convert Image
                    </Button>
                </div>

                {/* Conversion Result */}

                    <div className="mt-8 text-center">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                            Conversion Complete
                        </h3>
                        <a
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Download Converted Image
                        </a>
                    </div>
            </div>
        </section>
    )
}