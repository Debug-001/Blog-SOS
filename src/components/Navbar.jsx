import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="container-fluid navbar-style py-3">
  <div className="row">
    <div className="col-md-10 col-12 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/" id="logo">Future-X Industries</a>
        <button className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home
                <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutid">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#serviceid">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</div>
</div>
  )
}

export default Navbar
