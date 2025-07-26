import Link from "next/link";

export function Footer() {

    return (
        <div className='h- w-full bg-gray-100 relative flex justify-between items-start w-full mt-10'>
            <div className="flex-1 flex flex-col p-10">
                <h1 className="text-4xl font-bold text-gray-700 dark:text-white">
                    Kane Viggers
                </h1>
                <h1 className="text-md text-gray-500 dark:text-white underline">
                    <Link href="mailto:hello@kaneviggers.com">
                        hello@kaneviggers.com
                    </Link>
                </h1>
                <h1 className="text-md text-gray-500 dark:text-white">
                    © 2025 Kane Viggers. All rights reserved.
                </h1>
                {/* <h1 className="text-md text-gray-500 dark:text-white">
                    +64 27 772 6805
                </h1> */}
            </div>
        </div>
    );
}
