import React from 'react'
import "./nav.css";


const Navigation = () => {
  return (
           <nav className="navbar navbar-dark bg-transparent ">
          <a className="navbar-brand text-black" href="#">
            Moments shop
          </a>

          <div className="d-flex gap-3">
            <a className="text-black text-decoration-none" href="#">
              (555) 412-1234
            </a>
          </div>
        </nav>
  )
}

export default Navigation