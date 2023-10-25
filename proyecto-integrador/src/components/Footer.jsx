import React from 'react'

export const Footer = () => {
    return (
        <footer className="w-full bg-white p-8 fixed bottom-0">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <img src="/logo-editor1.png" alt="logo-ct" className="w-60" />
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
            <div className=''>
                <ul>
                    <li>
                        <hr className="my-8 border-blue-gray-50" />
                        © 2021 DH Technology All Rights Reserved
                    </li>
                    <li>
                        Fake 123, Buenos Aires , Argentina
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer