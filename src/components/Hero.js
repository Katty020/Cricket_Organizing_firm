import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import './Hero.css';

export default function Hero() {

  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="svg-wrapper-top svg-left-top">
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-top svg-right-top">
          <svg width="32" height="32" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-bottom svg-left-bottom">
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="svg-wrapper-bottom svg-right-bottom">
          <svg width="62" height="62" viewBox="0 0 72 72" fill="#9351f7" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 0L38.35 7.48C42.27 19.96 52.04 29.73 64.52 33.65L72 36L64.99 38.11C52.25 41.94 42.25 51.86 38.31 64.56L36 72L33.93 65.04C30.08 52.06 19.93 41.91 6.96 38.06L0 36L7.48 33.65C19.96 29.73 29.73 19.96 33.65 7.48L36 0Z" />
          </svg>
        </div>
        <div className="content">
          <h1>Unite. .Play<br /><span>.Elevate Cricket.</span></h1>

          <div className="container panel">
            <div className="row">
              <div className="col">
                <img className="img secondary-image" src="https://media.tenor.com/YdDCp6k6484AAAAi/ipl-x-cricket-x.gif" alt="01" />
              </div>
              <div className="col">
                <img className="img tertiary-image" src="https://tse2.mm.bing.net/th?id=OIP.A5rN3PXQZhk1taBrnYcRHwHaEK&pid=Api&P=0&h=180" alt="02" />
                <img className="img tertiary-image" src="https://tse2.mm.bing.net/th?id=OIP.Y8cOOYHnZwWXFXPEQGVm4AHaE7&pid=Api&P=0&h=180" alt="03" />
              </div>
              <div className="col">
                <img className="img main-image" src="https://static.vecteezy.com/system/resources/previews/000/371/663/original/vector-man-player-playing-cricket.jpg" alt="04" />
              </div>
              <div className="col">
                <img className="img tertiary-image" src="https://tse3.mm.bing.net/th?id=OIP.1VYKXE9pb0yA2JVpIv8SggHaFL&pid=Api&P=0&h=180" alt="05" />
                <img className="img tertiary-image" src="https://tse1.mm.bing.net/th?id=OIP.zm8dELIOSDjZKefsxhsgBAHaFj&pid=Api&P=0&h=180" alt="06" />
              </div>
              <div className="col">
                <img className="img secondary-image" src="https://media.tenor.com/K4mttbGHhDIAAAAi/ipl-x-cricket-x.gif" alt="07" />
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </section>
  );
};
