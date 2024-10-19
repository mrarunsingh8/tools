export default function HowItWorks(){
    return(
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Step 1: Choose a Tool</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Select the tool you need from our wide range of AI-powered utilities.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Step 2: Upload Media</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Upload your images or videos to get started.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Step 3: Download Results</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Instantly download the converted or resized media.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}