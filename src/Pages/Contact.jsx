import React from 'react'
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer';
import {Contactus} from "../Componants/Contactus"



export const Contact = () => {
  return (
    <div>
       <TopNavbar/>
      <div className="container-fluid position-relative p-0">
        <Navbar/>
        <div className="container-fluid bg-primary py-5 bg-header" >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Contact us</h1>
              <a href="/" className="h6 text-white">Home</a>
              <i className="fa fa-angle-right text-white px-2"></i>
              <a className="h6 text-white">Contact us</a>
            </div>
          </div>
        </div>
      </div>
     <Contactus/>
      <Footer/>
    </div>
  )
}
