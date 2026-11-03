import { useEffect, useState } from "react";
import "./home.css";

/* =========================
   IMAGES
========================= */

import logo from "../assets/logo.png";


import img from "../assets/img.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";

/* Team */
import president from "../assets/President.png";
import manager from "../assets/Manager.png";


function Home() {

  /* =========================
     STATE
  ========================= */

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);


  /* =========================
     NAVBAR SCROLL
  ========================= */

  useEffect(() => {

    let lastScrollY = window.scrollY;

    const handleScroll = () => {

      const currentScrollY = window.scrollY;

      /* Always show navbar at top */
      if (currentScrollY <= 20) {

        setShowNavbar(true);

      }

      /* Scrolling down */
      else if (currentScrollY > lastScrollY) {

        setShowNavbar(false);

        setMenuOpen(false);

      }

      /* Scrolling up */
      else if (currentScrollY < lastScrollY) {

        setShowNavbar(true);

      }

      lastScrollY = currentScrollY;
    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =========================
     EVENT IMAGES
  ========================= */

  const eventImages = [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13
  ];


  return (

    <div className="home-page">


      {/* =================================================
          NAVBAR
      ================================================= */}

      <header
        className={`navbar ${
          showNavbar
            ? "navbar-visible"
            : "navbar-hidden"
        }`}
      >

        <div className="nav-container">


          {/* LOGO */}

          <a
            href="#home"
            className="nav-logo"
            onClick={closeMenu}
          >

            <img
              src={logo}
              alt="SAN Restro & Party Venue"
            />

          </a>


          {/* NAVIGATION */}

          <nav
            className={`nav-menu ${
              menuOpen ? "active" : ""
            }`}
          >

            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={closeMenu}
            >
              About
            </a>

            <a
              href="#events"
              onClick={closeMenu}
            >
              Events
            </a>

            <a
              href="#team"
              onClick={closeMenu}
            >
              Our Team
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>




          </nav>


          {/* DESKTOP BOOK BUTTON */}

          <a
            href="#contact"
            className="desktop-book-button"
          >
            Book Your Event
          </a>


          {/* HAMBURGER */}

          <button
            className={`hamburger ${
              menuOpen ? "active" : ""
            }`}
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            type="button"
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </header>


      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="hero"
        id="home"
      >

        <div className="hero-background">

          <img
            src={img6}
            alt="SAN Restro and Party Venue"
          />

        </div>


        <div className="hero-overlay"></div>


        <div className="hero-content">

          <p className="hero-small">
            SAN RESTRO & PARTY VENUE
          </p>


          <h1>
            Where Good Food
            <br />
            Meets Great Moments.
          </h1>


          <p className="hero-description">
            A place to dine, celebrate, connect and create
            unforgettable memories.
          </p>


          <div className="hero-buttons">

            <a
              href="#events"
              className="primary-button"
            >
              Explore Events
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Book Your Event
            </a>

          </div>

        </div>


        <a
          href="#about"
          className="scroll-down"
        >

          <span>
            Scroll to explore
          </span>

          <div className="scroll-arrow">
            ↓
          </div>

        </a>

      </section>


      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        className="section intro-section"
        id="about"
      >

        <div className="container">

          <div className="section-heading centered reveal">

            <span className="section-label">
              WELCOME TO SAN
            </span>

            <h2>
              More Than Just
              <br />
              A Restaurant.
            </h2>

            <p>
              SAN Restro & Party Venue brings together
              great food, comfortable spaces and memorable
              celebrations under one roof.
            </p>

          </div>


          <div className="intro-grid">

            <div className="intro-image reveal">

              <img
                src={img}
                alt="SAN Restaurant"
              />

            </div>


            <div className="intro-content reveal">

              <span className="content-number">
                01
              </span>

              <h3>
                Dine.
                <br />
                Celebrate.
                <br />
                Connect.
              </h3>

              <p>
                Whether you're joining us for a meal with
                family and friends or planning an important
                celebration, SAN is designed to make every
                visit special.
              </p>

              <p>
                From intimate gatherings to larger events,
                our flexible venue and professional service
                help turn your occasion into a memorable
                experience.
              </p>

              <a
                href="#events"
                className="text-link"
              >
                Explore Our Events
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          RESTAURANT
      ================================================= */}

      <section className="dual-section">

        <div className="dual-image">

          <img
            src={img2}
            alt="SAN Restaurant"
          />

        </div>


        <div className="dual-content">

          <span className="section-label">
            THE RESTAURANT
          </span>

          <h2>
            Good Food.
            <br />
            Good Company.
          </h2>

          <p>
            Enjoy delicious food in a comfortable
            environment that's perfect for family meals,
            friends gatherings, casual dining and special
            occasions.
          </p>


          <div className="feature-list">

            <div className="feature-item">

              <span>01</span>

              <div>

                <h4>
                  Freshly Prepared Food
                </h4>

                <p>
                  Prepared with care and quality
                  ingredients.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <span>02</span>

              <div>

                <h4>
                  Comfortable Space
                </h4>

                <p>
                  A welcoming environment for
                  every occasion.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <span>03</span>

              <div>

                <h4>
                  Excellent Service
                </h4>

                <p>
                  Professional service from
                  beginning to end.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          EVENT VENUE
      ================================================= */}

      <section className="dual-section reverse">

        <div className="dual-image">

          <img
            src={img3}
            alt="SAN Event Venue"
          />

        </div>


        <div className="dual-content">

          <span className="section-label">
            THE EVENT VENUE
          </span>

          <h2>
            Your Moment.
            <br />
            Your Space.
          </h2>

          <p>
            From weddings and engagements to birthdays,
            conferences and private celebrations, SAN
            provides a flexible space designed around
            your event.
          </p>


          <div className="feature-list">

            <div className="feature-item">

              <span>01</span>

              <div>

                <h4>
                  Custom Event Setup
                </h4>

                <p>
                  Flexible arrangements according
                  to your event.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <span>02</span>

              <div>

                <h4>
                  Decoration Support
                </h4>

                <p>
                  Create the atmosphere you want
                  for your occasion.
                </p>

              </div>

            </div>


            <div className="feature-item">

              <span>03</span>

              <div>

                <h4>
                  Event Support
                </h4>

                <p>
                  Our team helps your event run
                  smoothly.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          EVENTS
      ================================================= */}

      <section
        className="section events-section"
        id="events"
      >

        <div className="container">

          <div className="section-heading centered reveal">

            <span className="section-label">
              CELEBRATE WITH US
            </span>

            <h2>
              Every Occasion
              <br />
              Deserves Its Moment.
            </h2>

            <p>
              Weddings, birthdays, engagements, conferences,
              parties and every special gathering.
            </p>

          </div>


          {/* EVENT TYPES */}

          <div className="event-types">

            <div className="event-type">
              <span>01</span>
              <h3>Weddings</h3>
            </div>

            <div className="event-type">
              <span>02</span>
              <h3>Birthdays</h3>
            </div>

            <div className="event-type">
              <span>03</span>
              <h3>Engagements</h3>
            </div>

            <div className="event-type">
              <span>04</span>
              <h3>Office Conferences</h3>
            </div>

            <div className="event-type">
              <span>05</span>
              <h3>Parties</h3>
            </div>

            <div className="event-type">
              <span>06</span>
              <h3>Special Gatherings</h3>
            </div>

          </div>

        </div>


        {/* AUTO SCROLLING IMAGES */}

        <div className="event-slider-wrapper">

          <div className="event-slider">


            {/* FIRST SET */}

            {eventImages.map(
              (image, index) => (

                <div
                  className="event-slide"
                  key={`first-${index}`}
                >

                  <img
                    src={image}
                    alt={`SAN Event ${index + 1}`}
                  />

                </div>

              )
            )}


            {/* DUPLICATE SET */}

            {eventImages.map(
              (image, index) => (

                <div
                  className="event-slide"
                  key={`second-${index}`}
                >

                  <img
                    src={image}
                    alt={`SAN Event ${index + 1}`}
                  />

                </div>

              )
            )}

          </div>

        </div>


        <div className="container">

          <div className="events-bottom reveal">

            <p>
              Your celebration. Your style. Our space.
            </p>

            <a
              href="#contact"
              className="primary-button"
            >
              Plan Your Event
            </a>

          </div>

        </div>

      </section>


      {/* =================================================
          SERVICES
      ================================================= */}

      <section className="section services-section">

        <div className="container">

          <div className="section-heading centered reveal">

            <span className="section-label">
              WHY SAN
            </span>

            <h2>
              Everything You Need
              <br />
              For Your Event.
            </h2>

          </div>


          <div className="services-grid">


            <div className="service-card reveal">

              <div className="service-icon">
                01
              </div>

              <h3>
                Event Setup
              </h3>

              <p>
                Flexible arrangements and setup
                options according to your event.
              </p>

            </div>


            <div className="service-card reveal">

              <div className="service-icon">
                02
              </div>

              <h3>
                Decoration
              </h3>

              <p>
                Create the right atmosphere with
                event decoration support.
              </p>

            </div>


            <div className="service-card reveal">

              <div className="service-icon">
                03
              </div>

              <h3>
                Catering
              </h3>

              <p>
                Delicious food options for your
                guests and celebrations.
              </p>

            </div>


            <div className="service-card reveal">

              <div className="service-icon">
                04
              </div>

              <h3>
                Parking
              </h3>

              <p>
                Convenient parking facilities
                for your guests.
              </p>

            </div>


            <div className="service-card reveal">

              <div className="service-icon">
                05
              </div>

              <h3>
                Audio Visual
              </h3>

              <p>
                Audio and visual support for
                meetings, programs and celebrations.
              </p>

            </div>


            <div className="service-card reveal">

              <div className="service-icon">
                06
              </div>

              <h3>
                Event Support
              </h3>

              <p>
                Our team is available to help your
                event run smoothly.
              </p>

            </div>


          </div>

        </div>

      </section>


      {/* =================================================
          TEAM
      ================================================= */}

      <section
        className="section team-section"
        id="team"
      >

        <div className="container">

          <div className="section-heading centered reveal">

            <span className="section-label">
              OUR TEAM
            </span>

            <h2>
              People Behind
              <br />
              The Experience.
            </h2>

            <p>
              Meet the people helping SAN create memorable
              dining and event experiences.
            </p>

          </div>


          <div className="team-grid">


            {/* PRESIDENT */}

            <div className="team-card reveal">

              <div className="team-image">

                <img
                  src={president}
                  alt="Madhav P. Chalise"
                />

              </div>

              <div className="team-info">

                <span>
                  PRESIDENT
                </span>

                <h3>
                  Madhav P. Chalise
                </h3>

              </div>

            </div>


            {/* MANAGER */}

            <div className="team-card reveal">

              <div className="team-image">

                <img
                  src={manager}
                  alt="Ishwor Chalise"
                />

              </div>

              <div className="team-info">

                <span>
                  MANAGER
                </span>

                <h3>
                  Ishwor Chalise
                </h3>

              </div>

            </div>


          </div>

        </div>

      </section>


      {/* =================================================
          CTA
      ================================================= */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-content reveal">

            <span className="section-label">
              YOUR NEXT EVENT
            </span>

            <h2>
              Because Every Big
              <br />
              Moment Deserves Space.
            </h2>

            <p>
              Let's make your next celebration something
              worth remembering.
            </p>

            <a
              href="#contact"
              className="primary-button"
            >
              Book Your Event
            </a>

          </div>

        </div>

      </section>


      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        className="section contact-section"
        id="contact"
      >

        <div className="container">

          <div className="contact-grid">


            {/* CONTACT INFORMATION */}

            <div className="contact-info reveal">

              <span className="section-label">
                GET IN TOUCH
              </span>

              <h2>
                Let's Plan
                <br />
                Your Moment.
              </h2>

              <p>
                Looking for a restaurant or an event venue?
                Contact us and let's discuss your next gathering.
              </p>


              <div className="contact-details">


                <a href="tel:9843052051">

                  <span>
                    PHONE
                  </span>

                  <strong>
                    9843052051 & 9703090244
                  </strong>

                </a>


                <a href="mailto:sanrestroandpartyvenue@gmail.com">

                  <span>
                    EMAIL
                  </span>

                  <strong>
                    sanrestroandpartyvenue@gmail.com
                  </strong>

                </a>


                <div>

                  <span>
                    LOCATION
                  </span>

                  <strong>
                    Bauddha, Nayabasti,
                    <br />
                    Kathmandu, Nepal
                  </strong>

                </div>


              </div>


              {/* SOCIAL MEDIA */}

              <div className="social-links">

                <a
                  href="https://www.instagram.com/san_restro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>

                <a
                  href="https://www.tiktok.com/@sanrestroandpartyvenue?lang=en-GB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61571432912023"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>

              </div>

            </div>


            {/* GOOGLE MAP */}

            <div className="map-container reveal">

              <iframe
                title="SAN Restro And Party Venue Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.162328554428!2d85.36005737546759!3d27.712273876180525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0050bc9291%3A0xfc8e3d40550f2039!2sSAN%20Restro%20And%20Party%20Venue!5e0!3m2!1sen!2snp!4v1793720189517!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">

        <div className="container">

          <div className="footer-top">


            <div className="footer-brand">

              <div className="footer-brand-logo">

                <img
                  src={logo}
                  alt="SAN Restro & Party Venue"
                />

              </div>

              <p>
                SAN Restro & Party Venue — where good food
                meets great moments.
              </p>

            </div>


            <div className="footer-links">

              <a href="#home">
                Home
              </a>

              <a href="#about">
                About
              </a>

              <a href="#events">
                Events
              </a>

              <a href="#team">
                Our Team
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>


          </div>


          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()}
              {" "}
              SAN Restro & Party Venue.
              All Rights Reserved.
            </p>

            <p>
              Bauddha, Nayabasti, Kathmandu, Nepal
            </p>

          </div>


        </div>

      </footer>


    </div>

  );

}


export default Home;