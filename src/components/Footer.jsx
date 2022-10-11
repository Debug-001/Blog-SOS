import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5'
import { FiMail } from 'react-icons/fi'
import { IoEarth } from 'react-icons/io5'

const Footer = () => {
    return (
        <footer className='bg-primaryDark text-white p-10'>
            <div className="flex flex-wrap md:flex-nowrap mb-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className='text-2xl font-bold'>Christ</h2>
                    <p>(Deemed to be university)</p>
                    <div className="flex gap-6 items-center my-4 text-md">
                        <MdOutlineLocationOn/>
                        <p>Mariam Nagar, Meerut Road, Delhi NCR <br />Ghaziabad - 201003 <br />Telephone :01206666100</p>
                    </div>
                    <div className="flex gap-6 items-center my-4 text-md">
                        <IoCallOutline/>
                        <p>Tel: 1800-123-3212</p>
                    </div>
                    <div className="flex gap-6 items-center my-4 text-md">
                        <FiMail/>
                        <p>Email: mail.ncr@christuniversity.in</p>
                    </div>
                    <div className="flex gap-6 items-center my-4 text-md">
                        <IoEarth/>
                        <p>Web: http://www.ncr.christuniversity.in</p>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="mb-20">
                    <h2 className='text-2xl font-bold'>Vision</h2>
                    <p>EXCELLENCE AND SERVICE</p>
                    </div>
                    <div className="max-w-sm">
                    <h2 className='text-2xl font-bold'>Misson</h2>
                    <p className='text-justify'>CHRIST (Deemed to be University) is a nurturing ground for an individual's holistic development to make effective contribution to the society in a dynamic environment.</p>
                    </div>

                </div>
            </div>
                 <div className="text-center"><p className='mb-4'>Copyright © CHRIST (Deemed to be University) 2020</p><p>Website developed by <a className='text-primaryLight hover:underline' href="http://ombhatt.com">Om Sharma</a>, <a className='text-primaryLight hover:underline' href="https://samyak003.in">Samyak Jain</a></p>
            </div>
        </footer>

    )
}

export default Footer