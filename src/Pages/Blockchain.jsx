import React, { useEffect } from 'react';
import { TopNavbar } from '../Componants/TopNavbar'
import { Navbar } from '../Componants/Navbar'
import { Footer } from '../Componants/Footer'
import block1 from "../img/blockchain1.png"
import block2 from "../img/blockchain2.jpeg"


export const Blockchain = () => { 
    useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopNavbar />
      <div className="container-fluid position-relative p-0">
        <Navbar />
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '60px' }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Blockchain Development</h1>
              <a href="/" className="h6 text-white">Home</a>
              <i className="fa fa-angle-right text-white px-2"></i>
              <a className="h6 text-white">Services</a>
              <i className="fa fa-angle-right text-white px-2"></i>
              <a className="h6 text-white">Blockchain Development</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid overflow-hidden px-lg-0">
                <div className="container feature py-3 px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 feature-text wow fadeInUp" >
                            <h1 className="mb-4 fw-medium fontf color">Blockchain Development</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>Welcome to our Blockchain Development Services! A blockchain is a revolutionary type of database designed to store and organize information. Unlike traditional databases that use tables with rows and columns, blockchains digitally format data into clusters or blocks. Each block has a limited storage capacity and is linked to the previous one, creating a secure and transparent chain of information.</h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3  fw-medium fontf color'>Our Approach</h5>
                                    <h5>At Affy Cloud, we believe in a meticulous approach to blockchain development that begins with a thorough understanding of your audience and objectives. Our process integrates cutting-edge technologies and industry best practices to deliver robust solutions tailored to your needs.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={block1} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid overflow-hidden mt-5 mb-5 px-lg-0">
                <div className="container feature px-lg-0">
                    <div className="row g-5 mx-lg-0">
                        <div className="col-lg-6 pe-lg-0 wow fadeInRight"  style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute img-fluid w-100 h-100" src={block2} style={{ objectFit: 'cover' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 feature-text px-5 fadeInUp"  >
                            <h1 className="mb-4 fw-medium fontf color">What is Blockchain Development ?</h1>
                            <div className="d-flex mb-5 wow fadeInUp" >
                                <h5>A blockchain is a type of database used to store and organise information. Traditional databases arrange information into rows and columns that make up tables. This makes the information accessible for computers to recognise. With blockchains, however, data is digitally formatted and collected into clusters or blocks. Each block has a limited storage capacity. </h5>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <div>
                                    <h5 className='h3 fw-medium fontf color'>Benefits of Blockchain Development</h5>
                                    <h5>The benefits of blockchain are increasing trust, security and transparency among member organizations by improving the traceability of data shared across a business network, plus delivering cost savings through new efficiencies.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
  )
}
