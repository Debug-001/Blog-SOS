import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function faculty(){
  const faculty = [
    {
      name : "Dr. Bosco Paul",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5333.jpg",
      post : "Head of Department",
    },
    {
      name : "Dr. Shilpa Srivastava",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4762.jpg",
      post : "Acadamic Coordinator",
    },
    {
      name : "Dr. Ashish Sharma",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4982.jpg",
      post : "Associate Professor",
    },
    {
      name : "Dr. Swati Agrawal",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4738.jpg",
      post : "Associate Professor",
    },
    {
      name : "Dr. Anjali Mathur",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5831.jpg",
      post : "Associate Professor",
    },
    {
      name : "Dr. Varuna Gupta",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4777.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Dr. Riya Baby",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4181.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Dr. Stehphen Raj",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4699.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Dr. CHANDRAKETU SINGH",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5179.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Dr. Puneeth V",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5837.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Dr. Raju Ranjan",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6239.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Dr. Jawahar S",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E6102.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Prof. GARIMA ANAND",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E4778.jpg",
      post : "Assistant Professor",
    },
    {
      name : "Prof. VANDANA MEHNDIRATTA",
      img : "https://kp.christuniversity.in/KnowledgePro/images/EmployeePhotos/E5384.jpg",
      post : "Assistant Professor",
    },
  ]
    return (
      <div className="">
              <Navbar/>
            <div className="max-w-5xl mx-auto my-10">

            <h1 className='text-4xl md:text-5xl lg:text-6xl text-primary font-bold mt-6 text-center mb-10'>Faculty List</h1>
            <ul className='mx-auto max-w-3xl'>
                {
                  faculty.map((listItem) => (
                    <li className='flex border border-slate-400 gap-4 py-2 px-4 items-center'>
                      <div className="">
                            <img src={listItem.img} className="rounded-full" alt={listItem.name}width={90} height={90} />
                      </div>
                            <div className=''>
                            <p className='text-lg font-medium mb-2'>{listItem.name}</p>
                            <p className='text-md text-slate-600'>{listItem.post}</p>
                            </div>
                        </li>
                    ))
                  }
            </ul>
                  </div>
            <Footer/>
        </div>
    )
  }