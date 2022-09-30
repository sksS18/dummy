import React from 'react';
import Icon7 from 'components/Landing-page/icons/Icon7';

export const Banner = () => {
  return (
    <section class="app section container">
      <div class="app__container grid">
        <div class="app__data">
          <h2 class="section__title-center">
            Watch Your Delivery <br /> At Any Time
          </h2>
          <p class="app__description">
            With our app you can view the route of your order, from our local
            headquarters to the place where you are. Look for the app now!
          </p>
          <div class="app__buttons">
            <a href="#" class="button button-flex">
              <i class="bx bxl-apple button__icon"></i> App Store
            </a>
            <a href="#" class="button button-flex">
              <i class="bx bxl-play-store button__icon"></i> Google Play
            </a>
          </div>
        </div>
        <Icon7 />
      </div>
    </section>
  );
}
