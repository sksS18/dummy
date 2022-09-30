import React from 'react';
import Icon1 from 'components/Landing-page/icons/Icon1';

export const Footer = () => {
  return (
    <footer class="footer section">
      <div class="footer__container container grid">
        <div class="footer__content">
          <a href="#" class="footer__logo">
            Delivery
          </a>
          <p class="footer__description">
            Order Products Faster <br /> Easier
          </p>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Our Services</h3>
          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                Pricing{' '}
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Discounts
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Report a bug
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Our Company</h3>
          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Our mision
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Get in touch
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Community</h3>
          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                Support
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Questions
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Customer help
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__social">
          <a href="#" class="footer__social-link">
            <i class="bx bxl-facebook-circle "></i>
          </a>
          <a href="#" class="footer__social-link">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="#" class="footer__social-link">
            <i class="bx bxl-instagram-alt"></i>
          </a>
        </div>
      </div>

      <p class="footer__copy">&#169; Bedimcode. All right reserved</p>
    </footer>
  );
}
