import React from 'react';

import Icon4 from 'components/Landing-page/icons/Icon4';
import Icon5 from 'components/Landing-page/icons/Icon5';
import Icon6 from 'components/Landing-page/icons/Icon6';



export const Service = () => {
  return (
    <section class="services section container" id="services">
      <h2 class="section__title">
        Some Services We <br /> Offer
      </h2>
      <div class="services__container grid">
        <div class="services__data">
          <h3 class="services__subtitle">Payment Done</h3>
          <Icon4 />
          <p class="services__description">
            Pay with a Visa or PayPal card and without much ado.
          </p>
          <div>
            <a href="#" class="button button-link">
              Learn More
            </a>
          </div>
        </div>

        <div class="services__data">
        <h3 class="services__subtitle">Find Your Product</h3>
          <Icon5 />
          <p class="services__description">
          We offer sale of products through the Internet.
          </p>
          <div>
            <a href="#" class="button button-link">
              Learn More
            </a>
          </div>
        </div>

        <div class="services__data">
          <h3 class="services__subtitle">Product Received</h3>
          <Icon6 />
          <p class="services__description">In our app you can see the delay time of your order.</p>
          <div>
            <a href="#" class="button button-link">
              Learn More
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
