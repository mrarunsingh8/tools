import {Button} from "flowbite-react";

export default function HomeCTA(){
    return (
        <section className="py-16 bg-white dark:bg-gray-900 text-center flex flex-col items-center justify-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Ready to Try Our Tools?</h2>
            <Button size="lg" gradientDuoTone="cyanToBlue">
                Get Started for Free
            </Button>
        </section>
    )
}