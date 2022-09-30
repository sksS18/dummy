import React, { useEffect } from "react";
import './Landing-page.scss';
import { About } from "./About";
import { Security } from './Security';
import { Service } from './Service';
import { Banner } from './Banner';
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./NavBar";
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';


export const LandingPage = () => {
   // const [isDark, setDark] = useState(false);
   // // Previously selected topic (if user selected)
   // const selectedTheme = localStorage.getItem("selected-theme");
   // const selectedIcon = localStorage.getItem("selected-icon");

   useEffect(() => {
      window.addEventListener("scroll", scrollUp);
   }, []);

   function scrollUp() {
      const scrollUp = document.getElementById("scroll-up");
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
   }

   // // We obtain the current theme that the interface has by validating the dark-theme class
   // const getCurrentTheme = () =>
   //    document.body.classList.contains(darkTheme) ? "dark" : "light";
   // const getCurrentIcon = () =>
   //    themeButton.classList.contains(iconTheme)
   //       ? "bx-toggle-left"
   //       : "bx-toggle-right";

   const handleClick = () => {
      // document.body.classList.toggle(darkTheme);
      // themeButton.classList.toggle(iconTheme);
      // // We save the theme and the current icon that the user chose
      // localStorage.setItem("selected-theme", getCurrentTheme());
      // localStorage.setItem("selected-icon", getCurrentIcon());
   };

   // if (selectedTheme) {
   //    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
   //    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
   //       darkTheme
   //    );
   //    themeButton.classList[
   //       selectedIcon === "bx-toggle-left" ? "add" : "remove"
   //    ](iconTheme);
   // }

   return (
      <>
         <body>
            <Navbar handleClick={handleClick} />
            <main className="main">
               <Hero />
               <About />
               <Security />
               <Service />
               <Banner />
               <Contact />
            </main>
            <Footer />
            <a href="#" class="scrollup" id="scroll-up">
               <ExpandLessSharpIcon />
            </a>
         </body>
      </>
   );
};
