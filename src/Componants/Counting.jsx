import React, { useState, useEffect } from 'react';

export const Counting = () => {
  const [counters, setCounters] = useState({
    happyClients: 12345,
    projectsDone: 12345,
    winAwards: 12345
  });

  useEffect(() => {
    const counterElements = document.querySelectorAll('[data-toggle="counter-up"]');

    const counterOptions = {
      time: 1500,
      delay: 10,
      offset: 100,
      beginAt: 0,
      formatter: false,
      context: window,
      callback: () => {} // Add callback logic if needed
    };

    const counterUpper = (element, target) => {
      const divisions = counterOptions.time / counterOptions.delay;
      const increment = target / divisions;

      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        element.innerText = Math.ceil(current);

        if (current >= target) {
          clearInterval(interval);
          element.innerText = target; // Ensure it ends exactly at the target value
        }
      }, counterOptions.delay);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.innerText, 10);
            counterUpper(entry.target, target);
            observer.unobserve(entry.target); // Stop observing once the animation is done
          }
        });
      },
      { threshold: 0.1 }
    );

    counterElements.forEach(element => {
      observer.observe(element);
    });

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container  pt-lg-0">
        <div className="row mainn gx-0">
          <div className="col-lg-4 wow zoomIn" >
            <div className="one shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
              <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                <i className="fa fa-users text-black fs-5"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Happy Clients</h5>
                <div className='d-flex'>
                <h1 className="text-white mb-0" data-toggle="counter-up">150</h1>
                <h1>+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" >
            <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
              <div className="pro d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                <i className="fa fa-check text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-0 text-black">Projects Delivered</h5>
                <div className='d-flex'>
                <h1 className="text-dark mb-0" data-toggle="counter-up">100</h1>
                <h1 className='text-dark'>+</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
            <div className="one1 shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
              <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
              <i class="fa fa-laptop text-black fs-5" aria-hidden="true"></i>
                
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Project Ongoing</h5>
                <div className='d-flex'>
                <h1 className="text-white mb-0" data-toggle="counter-up">10</h1>
                <h1 className='text-white'>+</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
