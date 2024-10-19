import {Card} from "flowbite-react";

export default function HomeTestimonials() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <Card>
                        <p className="text-gray-500 dark:text-gray-400">
                            "This platform has saved me hours! I love how easy it is to convert and resize images."
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Jane Doe</h3>
                    </Card>

                    {/* Testimonial 2 */}
                    <Card>
                        <p className="text-gray-500 dark:text-gray-400">
                            "The AI video generator is absolutely stunning! It helps me create content quickly."
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">John Smith</h3>
                    </Card>

                    {/* Testimonial 3 */}
                    <Card>
                        <p className="text-gray-500 dark:text-gray-400">
                            "A game-changer for media professionals. Highly recommend this platform!"
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Sarah Lee</h3>
                    </Card>
                </div>
            </div>
        </section>
    )
}