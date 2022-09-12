import React from 'react'
import Logo from '../assets/logo.png'

function Navbar() {
  const navigation = [
    {
      text: "Darpan",
      url: "/"
    },
    {
      text: "TechGenX",
      url: "#techgenx"
    },
    {
      text: "Shah-Mat",
      url: "#shahmat"
    },
  ]
  const courses = [
    {
      text: "Master of Computer Applications (MCA)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/mca_ncr22"
    },
    {
      text: "Bachelor of Computer Application (BCA)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bca-ncr"
    },
    {
      text: "Bachelor of Science (BSc) Computer Science, Mathematics, Statistics (CMS)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bsc-cms-ncr"
    },
    {
      text: "Bachelor of Science (BSc) Economics, Mathematics, Statistics (EMS)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bsc-ems-ncr"
    },
    {
      text: "Bachelor of Science (BSc) (Data Science and Artificial Intelligence- Honours)",
      url: "https://ncr.christuniversity.in/courses/main-campus/school-of-sciences/sciences-ncr/bsc-(data-science-and-ai-honours)"
    },
  ]
  const clubs = [
    {
      text: "Science Club",
      url: "/scienceclub"
    },
    {
      text: "DSA",
      url: "/dsa"
    }
  ]
  return (
    <div className="navigationcontainer-fluid navbar-style py-3">
      <div className="row">
        <img src={Logo} className="icon" alt="Christ University" />

        <div className="col-md-10 col-12 ml-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home
                    <span className="sr-only"></span></a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Clubs
                  </a>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {clubs.map(item => (
                      <a className="dropdown-item" href={item.url}>{item.text}</a>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Courses
                  </a>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {courses.map(item => (
                      <a className="dropdown-item" href={item.url}>{item.text}</a>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Upcoming Events
                  </a>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {navigation.map(item => (
                      <a className="dropdown-item" href={item.url}>{item.text}</a>
                    ))}
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Faculty List
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/faculty">School Of Sciences</a>
                    <a className="dropdown-item" href="https://ncr.christuniversity.in/faculty-list">Christ University</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

        </div>
      </div>
    </div>
  )
}

export default Navbar
