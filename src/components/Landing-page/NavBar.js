import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({ handleClick }) => {
   return (
      <header className="header" id="header">
         <nav class="nav container">
            <Link to="/slider" class="nav__logo">
               Delivery
            </Link>

            <div class="nav__menu" id="nav-menu">
               <ul class="nav__list">
                  <li class="nav__item">
                     <a href="#home" class="nav__link active-link">
                        Home
                     </a>
                  </li>
                  <li class="nav__item">
                     <a href="#about" class="nav__link">
                        About us
                     </a>
                  </li>
                  <li class="nav__item">
                     <a href="#services" class="nav__link">
                        Services
                     </a>
                  </li>
                  <li class="nav__item">
                     <a href="#contact" class="nav__link">
                        Contact us
                     </a>
                  </li>

                  <i
                     class="bx bx-toggle-left change-theme"
                     id="theme-button"
                  ></i>
               </ul>
            </div>

            <div class="nav__toggle" id="nav-toggle" onClick={handleClick}>
               <i class="bx bx-grid-alt"></i>
            </div>

            <span class="button button__header">
               Order Now!
            </span>
         </nav>
      </header>
   );
};
