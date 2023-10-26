import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full p-8 mt-auto">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <img src="/public/img/default_transparent_765x625.png" alt="logo-ct" className="h-40 h w-auto object-contain mr-2" />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        About Us
                    </li>
                    <li>
                        License
                    </li>
                    <li>
                        Contribute
                    </li>
                    <li>
                        Contact Us
                    </li>
                </ul>
            </div>

            <div className='flex justify-between border-t-2 border-red-600 mt-2'>
                <span>
                    © 2021 DH Technology All Rights Reserved
                </span>
                <span>
                    Fake 123, Buenos Aires , Argentina
                </span>
            </div>
        </footer>
    )
}

export default Footer