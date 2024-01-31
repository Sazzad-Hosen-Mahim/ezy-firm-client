import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="header-background"></div>
        <div className="header-content">
          <h1
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="text-black heading font-bold"
          >
            "Harvesting Solutions, Cultivating Success!"
          </h1>
          <p
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="paragraph text-justify"
          >
            Welcome to our Farming Assistant, where innovation meets
            cultivation! Explore our marketplace for the latest agricultural
            technologies, connect with skilled professionals offering a range of
            farming services, and discover resources to optimize your harvest.
            Whether you're a seasoned farmer or just starting, we're here to
            empower your journey in agriculture. Cultivate success with us and
            let's grow together for a sustainable and thriving future.
          </p>
          <Link to="/login">
            <button className="btn btn-info text-lg px-10">Get Started</button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
