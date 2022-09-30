import React from 'react';

export const Contact = () => {
  return (
    <section class="contact section container" id="contact">
      <div class="contact__container grid">
        <div class="contact__content">
          <h2 class="section__title-center">
            Contact Us From <br /> Here
          </h2>
          <p class="contact__description">
            You can contact us from here, you can write to us, call us or visit
            our service center, we will gladly assist you.
          </p>
        </div>

        <ul class="contact__content grid">
          <li class="contact__address">
            Telephone: <span class="contact__information">999 - 888 - 777</span>
          </li>
          <li class="contact__address">
            Email: <span class="contact__information">delivery@email.com</span>
          </li>
          <li class="contact__address">
            Location: <span class="contact__information">Lima - Peru</span>
          </li>
        </ul>

        <div class="contact__content">
          <a href="#" class="button">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
