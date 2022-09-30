import React from "react";
// import Icon1 from "../icons/Icon1"
import Icon1 from 'components/Landing-page/icons/Icon1';

export const Hero = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
          <Icon1 />
          <div className="home__data">
             <h1 className="home__title">Order Products <br /> Faster Easier</h1>
             <p className="home__description">Order your favorite foods at any time and we will deliver them right to where you are.</p>
            <a href="#" className="button">Get Started</a>
          </div> 
      </div>  
    </section>
  );
}
