import React from 'react'
import Image from '../assets/mb.png'
import Chess from '../assets/logo1.png'
import Ab from '../assets/ideathon.png'



function About() {
    const events = [
        {
            name : "Mobile Shiksha",
            description: `Greetings From School Of Sciences, CHRIST (Deemed To Be University) Delhi NCR. This Is To Inform You That The School Of Sciences Is Conducting An Awareness Activity For Supporting Staff "MOBILE-SHIKSHA " On 17 September 2022 At 01:30 PM (Indian Standard Time). The Training Will Be Delivered By The BCA Students. • Venue - Block A , First Floor, Computer Lab • Date - 17th September 2022 • Time - 01:30 PM Onwards`,
            url: "/",
            image : Image
        },
        {
            name : "Shah-Mat",
            description: `Chess is everything : art, culture, science and sport."♟ with these great words by Anataly Karpov, Christ University School of Business & Management and School of Sciences* invite everyone to sharpen your brain while having fun. So let's play a game of chess in *"Sheh-Maat 2022"* , a *Chess Tournament* being organized at the departmental level .`,
            url: "/",
            image : Chess
        },
        {
            name : "Ideathon for Soceity 5.0",
            description: `Christ Innovation and Incubation Centre (CIIC) is organizing an event called 'Ideathon for Society 5.0' on Saturday, 17th September 2022. Some stalls will also be set up on the new basketball court, which will be an opportunity for all the small business owners and budding entrepreneurs to promote their business, be it food, product sales, or services. Since the number of stalls will be limited, they will be allotted on a first come first serve basis.`,
            url: "/",
            image : Ab
        },
    ]
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className='text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-6 text-center'>School of Sciences</h1>
            <section className="p-10">
                <h2 className='text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>About</h2>
                <p className='text-justify text-lg'>School of Sciences at CHRIST (Deemed to be University) Delhi- NCR has created a niche in the realm of higher education in India through its programmes. Currently, the School of Sciences offers a wide array of undergraduate courses with multiple specializations. It offers undergraduate and doctoral programmes in the disciplines of Computer Science, Statistics & Mathematics. A dedicated research block with all the latest research facilities boosts the morale of the faculty and research scholars alike. This is an ideal place for students with a research bent of mind to explore his/her passion. Apart from academics, students are moulded holistically through various co-curricular and extracurricular activities.</p>
            </section>
            <div className="p-10">
                <h2 className='text-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-10'>Live/Upcoming Events</h2>
                    {events.map(({name,description,url,image}) => (
                <section className='mt-16 flex flex-wrap md:flex-nowrap gap-6 justify-center'>
                    <div className="max-w-[70%] mx-auto min-w-[300px] max-h-[400px] flex-1">
                    <img src={image} alt="" className='w-full h-full object-contain'/>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <h3 className="text-primary font-bold text-2xl md:text-3xl lg:text-4xl mb-4">{name}</h3>
                        <p className='text-justify text-lg my-5'>{description}</p>
                        <a href={url} className='px-4 py-2 bg-primary hover:bg-primaryLight rounded flex-none text-white'>Read More</a>
                    </div>
                </section>
                    ))}

            </div>
        </div>
      
    )
}

export default About
