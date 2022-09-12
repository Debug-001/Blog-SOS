import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function faculty(){
  const faculty = [
    {
      name : "",
      img : "",
      post : "",
    },
    {
      name : "",
      img : "",
      post : "",
    },
    {
      name : "",
      img : "",
      post : "",
    },
    {
      name : "",
      img : "",
      post : "",
    },
    {
      name : "",
      img : "",
      post : "",
    },
  ]
    return (
      <div className="">
              <Navbar/>
            <h1>Faculty List</h1>
            <ul>
                {
                  faculty.map((listItem) => (
                    <li>
                            <p>Name : {listItem.name}</p>
                            <img src={listItem.img} alt={listItem.name} />
                            <p>Post : {listItem.post}</p>
                        </li>
                    ))
                  }
            </ul>
            <Footer/>
        </div>
    )
  }