import React from 'react'

export const TopNavbar = () => {
  return (
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
                <div class="row gx-0">
                    <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div class="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i> Koh-e-fiza, Bhopal , Madhya
                        Pradesh</small>
                            <small class="me-3 text-white"><i class="fa fa-phone-alt me-2"></i>+91-8349113331</small>
                            <small class="text-light"><i class="fa fa-envelope-open me-2"></i> info@affyclouditsolutions.com</small>
                        </div>
                    </div>
                    <div class="col-lg-4 text-center text-lg-end">
                    <div class="d-inline-flex align-items-center" style={{ height: '45px' }}>                    
                        <a href="https://www.instagram.com/affy_cloud/?igsh=MXE1YXpuN3VrOTZwYw%3D%3D" target="_blank" class="me-4 fs-4  text-white insta">
                                        <i class="fab fa-instagram"></i>
                                    </a>

                                    {/* <!-- WhatsApp --> */}
                                    <a  target="_blank" class="me-4 fs-4 text-white whatsapp">
                                        <i class="fab fa-whatsapp"></i>
                                    </a>
                                    {/* <!-- LinkedIn --> */}
                                    <a href="https://www.linkedin.com/in/affy-cloud-2b6137309/" target="_blank" class="me-4 fs-4 text-white linkdlin">
                                        <i class="fab fa-linkedin"></i>
                                    </a>                                    
                                    <a href="https://www.youtube.com/@affycloud" target="_blank" class="me-3 fs-4 text-white youtube">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                    </div>
                </div>
                </div>
            </div>
  )
}
