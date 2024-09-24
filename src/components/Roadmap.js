import React, { useState } from 'react';
import MetamaskLogo from '../images/metamask.svg';
import BitgoLogo from '../images/bitgo.svg';
import CoinbaseLogo from '../images/coinbase.svg';
import TrustWalletLogo from '../images/trustwallet.svg';
import ExodusLogo from '../images/exodus.svg';
import './Roadmap.css';

export default function Roadmap() {
  const [activeItem, setActiveItem] = useState('NEW NFTS');

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="roadmap">
      <div className="container-fluid">
        <h1 className="roadmap-title">Testimonials & <span>Reviews</span></h1>
        <div className="row">
          <div className="col-md-4">
            <div className="text-column">
              <ul>
                <li
                  className={activeItem === 'NEW NFTS' ? 'active' : ''}
                  onClick={() => handleClick('NEW NFTS')}
                >
                  <span>01</span> Management
                </li>
                <li
                  className={activeItem === 'WHITELIST MINTING' ? 'active' : ''}
                  onClick={() => handleClick('WHITELIST MINTING')}
                >
                  <span>02</span> Quality
                </li>
                <li
                  className={activeItem === 'WIRELAND NFT' ? 'active' : ''}
                  onClick={() => handleClick('WIRELAND NFT')}
                >
                  <span>03</span> Fair Play
                </li>
                <li
                  className={activeItem === 'METAVERSE' ? 'active' : ''}
                  onClick={() => handleClick('METAVERSE')}
                >
                  <span>04</span> Networking
                </li>
                <li
                  className={activeItem === 'LAUNCH' ? 'active' : ''}
                  onClick={() => handleClick('LAUNCH')}
                >
                  <span>05</span> Money
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                {activeItem === 'NEW NFTS' && (
                  <>
                    <p className="card-phase">Review 1</p>
                    <h3 className="card-title"> Tournament Organization</h3>
                    <p className="card-text">"The entire tournament was managed seamlessly. From scheduling to match coordination, everything was executed with professionalism."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> By- Mahaveer Singh</li>
                      
                    </ul>
                  </>
                )}
                {activeItem === 'WHITELIST MINTING' && (
                  <>
                    <p className="card-phase">Review 1</p>
                    <h3 className="card-title">Quality of Facilities</h3>
                    <p className="card-text"> "Fantastic facilities! The pitches were well-prepared, and the amenities for players were beyond expectations."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> By- Devansh Saroja</li>
                      
                    </ul>
                  </>
                )}
                {activeItem === 'WIRELAND NFT' && (
                  <>
                    <p className="card-phase">Review 1</p>
                    <h3 className="card-title">Fair Play & Transparency</h3>
                    <p className="card-text"> "The scoring system was transparent, and the umpires were unbiased. I really appreciated the fairness and integrity of the matches."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i>By- Rohan Kumar Savant</li>
                      
                    </ul>
                  </>
                )}
                {activeItem === 'METAVERSE' && (
                  <>                    
                    <p className="card-phase">Review 1</p>
                    <h3 className="card-title">Networking Opportunities</h3>
                    <p className="card-text"> "Participating in the tournament was an amazing opportunity to connect with players from different teams."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> By- Anurag Kumar Sharma</li>
                      
                    </ul>                  
                  </>
                )}
                {activeItem === 'LAUNCH' && (
                  <>
                    <p className="card-phase">Review 1</p>
                    <h3 className="card-title">Value for Money
                    </h3>
                    <p className="card-text"> "Great value for money! The organization provided a professional-level experience at an affordable price, making it accessible for players from all backgrounds."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> By- Yuraj Singh Cauhan</li>
                      
                    </ul>                  
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                {activeItem === 'NEW NFTS' && (
                  <>
                    <p className="card-phase">Review 2</p>
                    <h3 className="card-title"> Tournament Organization</h3>
                    <p className="card-text">"Impressed with how well-organized the event was! Matches started on time, and all the logistics were handled effortlessly."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i>By- Aryan Katiyar</li>
               
                    </ul>
                  </>
                )}
                {activeItem === 'WHITELIST MINTING' && (
                  <>
                    <p className="card-phase">Review 2</p>
                    <h3 className="card-title">Quality of Facilities</h3>
                    <p className="card-text"> "The cricket ground was in excellent condition, and the equipment provided was top-notch."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> By- Tripendra Gada</li>
                      
                    </ul>
                  </>
                )}
                {activeItem === 'WIRELAND NFT' && (
                  <>
                    <p className="card-phase">Review 2</p>
                    <h3 className="card-title">Fair Play & Transparency</h3>
                    <p className="card-text">"Great emphasis on fair play! The use of technology for scoring and decision-making ensured that there were no disputes"</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i>By- Sartaj UL Hasan</li>
                      
                    </ul>
                  </>
                )}
                {activeItem === 'METAVERSE' && (
                  <>                    
                    <p className="card-phase">Review 2</p>
                    <h3 className="card-title">Networking Opportunities
                    </h3>
                    <p className="card-text">"It’s not just about the cricket but also about meeting like-minded individuals who share a passion for the game."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i>By- Ayush Singh Bhardwaj</li>
                      
                    </ul>                  
                  </>
                )}
                {activeItem === 'LAUNCH' && (
                  <>
                    <p className="card-phase">Review 2</p>
                    <h3 className="card-title">Value for Money</h3>
                    <p className="card-text"> "Absolutely worth every penny! The entry fee was reasonable, and the overall experience, from facilities to management, exceeded my expectations."</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> By- Amber Prasad</li>
                      
                    </ul>                  
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="row sponsors-row">
          <div className="col-12">
          <h3 className="roadmap-title">Our sponsors</h3>
            <div className="sponsors">
              
              
              <img src={MetamaskLogo} alt="Metamask Logo" className="sponsor-logo" />
              <img src={BitgoLogo} alt="BitGO Logo" className="sponsor-logo" />
              <img src={CoinbaseLogo} alt="Coinbase Logo" className="sponsor-logo" />
              <img src={TrustWalletLogo} alt="Trust Wallet Logo" className="sponsor-logo" />
              <img src={ExodusLogo} alt="Exodus Logo" className="sponsor-logo" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
