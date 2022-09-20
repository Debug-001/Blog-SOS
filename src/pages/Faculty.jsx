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
      <div className="faculty">
              <Navbar/>
            <h1 className='text-center main-heading'>Faculty List</h1>
            <ul className='list-group w-auto'>
                {
                  faculty.map((listItem) => (
                    <li className='list-group-item list-group-item-action d-flex gap-3 py-3'>
                      <div className="rounded-circle flex-shrink-0">
                            <img src={listItem.img} className="faculty-image" alt={listItem.name} style={{marginRight: "1.5rem"}} width={90} height={90} />
                      </div>
                            <div className='faculty-details'>
                            <p>{listItem.name}</p>
                            <p>{listItem.post}</p>
                            </div>
                        </li>
                    ))
                  }
            </ul>
            <Footer/>
        </div>
    )
  }