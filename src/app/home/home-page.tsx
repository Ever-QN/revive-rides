import React from "react";
import { Link } from "react-router-dom";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <section>

        <div className="home-title">
            <h1>S&D Auto body</h1>
            <h1>on the road to serve you</h1>
        </div>

        
        <div className="bg-image">
        </div>

        
        <div className="book-button">
            <Link to="/booking">
                <button>Let&apos;s book</button>
            </Link>
        </div>

    </section>
  );
};

export default HomePage;