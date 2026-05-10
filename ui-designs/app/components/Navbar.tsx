import React from 'react'

const Navbar = () => {
  return (
           <nav className="navbar navbar-dark bg-transparent ">
          <a className="navbar-brand text-black" href="#">
            Bior
          </a>

          <div className="d-flex gap-3">
            <a className="text-black text-decoration-none" href="#">
              Home
            </a>

            <a className="text-black text-decoration-none" href="#">
              About
            </a>

            <a className="text-black text-decoration-none" href="#">
              Contact
            </a>
          </div>
        </nav>
  )
}

export default Navbar