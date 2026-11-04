
import { useEffect, useRef, useState } from "react";
import "./home.css";

/* =========================
   ASSETS
========================= */

import logo from "../assets/logo.png";

// Images
import aa from "../assets/aa.jpg";
import ab from "../assets/ab.jpg";
import ac from "../assets/ac.jpg";
import ad from "../assets/ad.jpg";
import ae from "../assets/ae.jpg";
import af from "../assets/af.jpg";
import ag from "../assets/ag.jpg";
import ah from "../assets/ah.jpg";
import img3 from "../assets/img3.png";
import img5 from "../assets/img5.png";
import img7 from "../assets/img7.jpg";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.jpg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.png";

// Videos
import vid from "../assets/vid.mp4";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";
import vid5 from "../assets/vid5.mp4";

// Team
import president from "../assets/President.jpeg";
import manager from "../assets/Manager.png";


function Home() {

  /* =========================
     STATES
  ========================= */

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const [sliderDirection, setSliderDirection] =
    useState("normal");

  const [selectedImageIndex, setSelectedImageIndex] =
    useState(null);

  const touchStartX = useRef(0);


  /* =========================
     IMAGE COLLECTION
  ========================= */

  const eventImages = [
    aa,
    ab,
    ac,
    ad,
    ae,
    af,
    ag,
    ah,
    img3,
    img5,
    img7,
    img9,
    img10,
    img12,
    img13,
    img14
  ];


  /* =========================
     VIDEO COLLECTION
  ========================= */

  const eventVideos = [
    vid,
    vid1,
    vid2,
    vid3,
    vid4,
    vid5
  ];


  /* =========================
     NAVBAR SCROLL
  ========================= */

  useEffect(() => {

    let lastScrollY = window.scrollY;

    const handleScroll = () => {

      const currentScrollY = window.scrollY;

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      }

      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setMenuOpen(false);
      }

      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;

    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  /* =========================
     CLOSE MOBILE MENU
  ========================= */

  const closeMenu = () => {
    setMenuOpen(false);
  };


  /* =========================
     GALLERY NAVIGATION
  ========================= */

  const scrollLeft = () => {
    setSliderDirection("reverse");
  };

  const scrollRight = () => {
    setSliderDirection("normal");
  };


  /* =========================
     FULLSCREEN IMAGE NAVIGATION
  ========================= */

  const showPreviousImage = () => {

    setSelectedImageIndex((current) =>
      current === null
        ? 0
        : (current - 1 + eventImages.length) %
          eventImages.length
    );

  };

  const showNextImage = () => {

    setSelectedImageIndex((current) =>
      current === null
        ? 0
        : (current + 1) % eventImages.length
    );

  };


  /* =========================
     TOUCH SWIPE
  ========================= */

  const handleTouchStart = (event) => {

    touchStartX.current =
      event.touches[0].clientX;

  };

  const handleTouchEnd = (event) => {

    const touchEndX =
      event.changedTouches[0].clientX;

    const difference =
      touchStartX.current - touchEndX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      scrollRight();
    } else {
      scrollLeft();
    }

  };


  /* =========================
     FULLSCREEN KEYBOARD
  ========================= */

  useEffect(() => {

    if (selectedImageIndex === null) return;

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {
        setSelectedImageIndex(null);
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";

    };

  }, [selectedImageIndex]);


  /* =========================
     RENDER
  ========================= */

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
              alt="SAN Restro"
            />

          </a>


          {/* NAVIGATION MENU */}

          <nav
            className={`nav-menu ${
              menuOpen ? "active" : ""
            }`}
          >

            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#events" onClick={closeMenu}>
              Events
            </a>

            <a href="#team" onClick={closeMenu}>
              Our Team
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>


            {/* ONLY ONE BOOK BUTTON */}

            <a
              href="#contact"
              className="nav-book-button"
              onClick={closeMenu}
            >
              Book Your Event
            </a>

          </nav>


          {/* HAMBURGER */}

          <button
            className={`hamburger ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
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

      <section className="hero" id="home">

        <div className="hero-background">

          <img
            src={ab}
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
              Explore 
            </a>

            <a
              href="#contact"
              className="secondary-button"
            >
              Book Your Event
            </a>

          </div>

        </div>


        <a href="#about" className="scroll-down">

          <span>Scroll to explore</span>

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

          <div className="section-heading centered">

            <span className="section-label">
              Hello!
            </span>

            <h2>
                WELCOME TO SAN.
          
            </h2>

            <p>
              SAN Restro & Party Venue brings together
              great food, comfortable spaces and memorable
              celebrations under one roof.
            </p>

          </div>


          <div className="intro-grid">

            <div className="intro-image">

              <img
                src={ac}
                alt="SAN Restaurant"
                loading="lazy"
              />

            </div>


            <div className="intro-content">

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

              <a href="#events" className="text-link">
                Explore Our Events <span>→</span>
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
            src={ah}
            alt="SAN Restaurant"
            loading="lazy"
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
                <h4>Freshly Prepared Food</h4>
                <p>
                  Prepared with care and quality ingredients.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>02</span>
              <div>
                <h4>Comfortable Space</h4>
                <p>
                  A welcoming environment for every occasion.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>03</span>
              <div>
                <h4>Excellent Service</h4>
                <p>
                  Professional service from beginning to end.
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
            src={img5}
            alt="SAN Event Venue"
            loading="lazy"
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
                <h4>Custom Event Setup</h4>
                <p>
                  Flexible arrangements according to your event.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>02</span>
              <div>
                <h4>Decoration Support</h4>
                <p>
                  Create the atmosphere you want for your occasion.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span>03</span>
              <div>
                <h4>Event Support</h4>
                <p>
                  Our team helps your event run smoothly.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          EVENTS AND GALLERY
      ================================================= */}

      <section
        className="section events-section"
        id="events"
      >

        <div className="container">

          <div className="section-heading centered">

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

            {[
              "Weddings",
              "Birthdays",
              "Engagements",
              "Office Conferences",
              "Parties",
              "Special Gatherings"
            ].map((event, index) => (

              <div className="event-type" key={event}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{event}</h3>

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            IMAGE GALLERY
        ================================================= */}

        <div
          className="event-slider-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* LEFT ARROW */}

          <button
            type="button"
            className="gallery-arrow gallery-arrow-left"
            onClick={scrollLeft}
            aria-label="Previous gallery images"
          >
            &#10094;
          </button>


          {/* SLIDER */}

          <div
            className="event-slider"
            style={{
              animationDirection: sliderDirection
            }}
          >

            {/* FIRST SET */}

            {eventImages.map((image, index) => (

              <button
                type="button"
                className="event-slide"
                key={`first-${index}`}
                onClick={() =>
                  setSelectedImageIndex(index)
                }
                aria-label={`View event image ${index + 1}`}
              >

                <img
                  src={image}
                  alt={`SAN Event ${index + 1}`}
                  loading="lazy"
                />

              </button>

            ))}


            {/* DUPLICATE SET FOR INFINITE LOOP */}

            {eventImages.map((image, index) => (

              <button
                type="button"
                className="event-slide"
                key={`second-${index}`}
                onClick={() =>
                  setSelectedImageIndex(index)
                }
                aria-hidden="true"
                tabIndex={-1}
              >

                <img
                  src={image}
                  alt=""
                  loading="lazy"
                />

              </button>

            ))}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className="gallery-arrow gallery-arrow-right"
            onClick={scrollRight}
            aria-label="Next gallery images"
          >
            &#10095;
          </button>

        </div>


        {/* =================================================
            FULLSCREEN IMAGE VIEWER
        ================================================= */}

        {selectedImageIndex !== null && (

          <div
            className="image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Event image viewer"
            onClick={() =>
              setSelectedImageIndex(null)
            }
          >

            <button
              className="lightbox-close"
              type="button"
              onClick={() =>
                setSelectedImageIndex(null)
              }
              aria-label="Close image viewer"
            >
              ×
            </button>


            <button
              className="lightbox-nav lightbox-prev"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
            >
              &#10094;
            </button>


            <img
              className="lightbox-image"
              src={eventImages[selectedImageIndex]}
              alt={`SAN Event ${selectedImageIndex + 1}`}
              onClick={(event) =>
                event.stopPropagation()
              }
            />


            <button
              className="lightbox-nav lightbox-next"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
            >
              &#10095;
            </button>


            <span className="lightbox-counter">
              {selectedImageIndex + 1} / {eventImages.length}
            </span>

          </div>

        )}


        {/* =================================================
            VIDEO GALLERY
        ================================================= */}

        <div className="event-video-section container">

          <div className="section-heading centered">

            <span className="section-label">
              MOMENTS AT SAN
            </span>

            <h2>
              Watch Our Events
              <br />
              Come to Life.
            </h2>

            <p>
              Explore celebrations and memorable moments
              at SAN Restro & Party Venue.
            </p>

          </div>


          <div className="event-video-grid">

            {eventVideos.map((video, index) => (

              <div
                className="event-video-card"
                key={`video-${index}`}
              >

                <video
                  src={video}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`SAN event video ${index + 1}`}
                />

                <div className="video-caption">
                  SAN Event {index + 1}
                </div>

              </div>

            ))}

          </div>

        </div>


        {/* EVENT CTA */}

        <div className="container">

          <div className="events-bottom">

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

          <div className="section-heading centered">

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

            {[
              ["01", "Event Setup", "Flexible arrangements and setup options according to your event."],
              ["02", "Decoration", "Create the right atmosphere with event decoration support."],
              ["03", "Catering", "Delicious food options for your guests and celebrations."],
              ["04", "Parking", "Convenient parking facilities for your guests."],
              ["05", "Audio Visual", "Audio and visual support for meetings, programs and celebrations."],
              ["06", "Event Support", "Our team is available to help your event run smoothly."]
            ].map(([number, title, description]) => (

              <div
                className="service-card"
                key={number}
              >

                <div className="service-icon">
                  {number}
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

              </div>

            ))}

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

          <div className="section-heading centered">

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

            <div className="team-card">

              <div className="team-image">

                <img
                  src={president}
                  alt="Madhav P. Chalise"
                  loading="lazy"
                />

              </div>

              <div className="team-info">

                <span>PRESIDENT</span>

                <h3>Madhav P. Chalise</h3>

              </div>

            </div>


            <div className="team-card">

              <div className="team-image">

                <img
                  src={manager}
                  alt="Ishwor Chalise"
                  loading="lazy"
                />

              </div>

              <div className="team-info">

                <span>MANAGER</span>

                <h3>Ishwor Chalise</h3>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          CALL TO ACTION
      ================================================= */}

      <section className="cta-section">

        <div className="container">

          <div className="cta-content">

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


            <div className="contact-info">

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

                  <span>PHONE</span>

                  <strong>
                    9843052051 & 9703090244
                  </strong>

                </a>


                <a href="mailto:sanrestroandpartyvenue@gmail.com">

                  <span>EMAIL</span>

                  <strong>
                    sanrestroandpartyvenue@gmail.com
                  </strong>

                </a>


                <div>

                  <span>LOCATION</span>

                  <strong>
                    Bauddha, Nayabasti,
                    <br />
                    Kathmandu, Nepal
                  </strong>

                </div>

              </div>


              <div className="social-links">

                <a
                  href="https://www.instagram.com/san_restro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
<a
  href="https://www.facebook.com/profile.php?id=61571432912023"
  target="_blank"
  rel="noopener noreferrer"
>
  Facebook
</a>
                <a
                  href="https://www.tiktok.com/@sanrestroandpartyvenue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TikTok
                </a>

              </div>

            </div>


            <div className="map-container">

              <iframe
                title="SAN Restro Location"
                src="https://www.google.com/maps?q=SAN+Restro+And+Party+Venue+Bauddha+Kathmandu&output=embed"
                width="100%"
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

              <img
                src={logo}
                alt="SAN Restro"
              />

              <p>
                SAN Restro & Party Venue <br />
                Where good food
                meets great moments.
              </p>

            </div>


            <div className="footer-links">

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#events">Events</a>
              <a href="#team">Our Team</a>
              <a href="#contact">Contact</a>

            </div>

          </div>


          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} SAN Restro & Party Venue.
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
