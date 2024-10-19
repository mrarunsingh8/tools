"use client";
import {Dropdown, Navbar} from "flowbite-react";
import Link from "next/link";
import Image from "next/image";

export default function Header(){
    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="/">
                <Image
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Logo"
                    width={50}
                    height={50}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            AI Tools Hub
          </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="/">Home</Navbar.Link>
                <Dropdown
                    label="Tools"
                    inline={true}
                    className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <Dropdown.Item>
                        <Link href="/image-converter">
                            <span className="w-full text-left">Image Converter</span>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link href="/image-resizer">
                            <span className="w-full text-left">Image Resizer</span>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link href="/video-converter">
                            <span className="w-full text-left">Video Converter</span>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link href="/ai-image-generator">
                            <span className="w-full text-left">AI Image Generator</span>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Link href="/ai-video-generator">
                            <span className="w-full text-left">AI Video Generator</span>
                        </Link>
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Link href="/contact-us">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}