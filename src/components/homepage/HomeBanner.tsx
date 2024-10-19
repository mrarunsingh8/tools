import {Button} from "flowbite-react";
import Image from "next/image";

export default function HomeBanner() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7 flex flex-col items-center justify-center">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                        Build and design modern websites faster
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        Flowbite is an open-source library of interactive components built
                        on top of Tailwind CSS including buttons, modals, and more.
                    </p>
                    <Button gradientDuoTone="cyanToBlue">Get Started</Button>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <Image
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                        alt="mockup"
                        width={600}
                        height={100}
                    />
                </div>
            </div>
        </section>
    );
}
