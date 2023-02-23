import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 5,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Peek at Some of the Projects I Worked On"}
      />
      <section className="testimonial-section fadeIn" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              items={1}
              className="owl-theme"
              loop
              nav
              dots
              margin={8}
            >
              <div className="testi-item">
                <div>
                  <img className="img" src={"img/Testimonial/website.png"} />
                  <a href="https://www.w3schools.com/" >Vist the Application Here!</a>
                </div>
              </div>

              <div className="testi-item">
                <div>
                  <img className="img" src={"img/Testimonial/website.png"} />
                  <a href="https://www.w3schools.com/" >Vist the Application Here!</a>
                </div>
              </div>

              <div className="testi-item">
                <div>
                  <img className="img" src={"img/Testimonial/website.png"} />
                  <a href="https://www.w3schools.com/" >Vist the Application Here!</a>
                </div>
              </div>

              <div className="testi-item">
                <div>
                  <img className="img" src={"img/Testimonial/website.png"} />
                  <a href="https://www.w3schools.com/" >Vist the Application Here!</a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
