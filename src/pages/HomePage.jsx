import mockup from "../assets/img/mockup.jpg";
import medicine from "../assets/img/medicine.jpg";
import gal from "../assets/img/gal.png";
// import Navbar from "../components/Navbar"
import "../assets/css/style.css";


import { Link } from "react-router-dom";

import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const menu = document.getElementById("menu");
      const links = document.querySelectorAll(".nav_link");

      if (window.scrollY === 0 || window.pageYOffset < 1) {
        menu.style.background = "transparent";
        menu.classList.remove("shadowed");
        links.forEach(element => {
          element.style.color = "white";
        });
      } else {
        menu.style.background = "white";
        menu.classList.add("shadowed");
        links.forEach(element => {
          element.style.color = "black";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>

    <main>
        <div className="showcase-text">
            <h1 className="txt-white">Access The Right Health Facility, Anytime Anywhere</h1>

            <Link to="login/" className="btn-primary">Take Tour</Link>
        </div>
    </main>

    <section>
        <div className="border-primary"></div>
        <h2 className="txt-primary">What Afya Connect Does for you</h2>
        <p>Tired of endless back and forths looking for a good hospital ? Explore our features meant to give you the best quality.</p>

        <div className="grid-container grid-4">
            <div className="card">
                <i className="fas fa-map-marker"></i>
                <p>Maps you to the nearest health facility</p>
            </div>

            <div className="card">
                <i className="fas fa-upload"></i>
                <p> Lets doctors upload test results for reference</p>
            </div>

            <div className="card">
                <i className="fas fa-paperclip"></i>
                <p>Ability to take user feedback and recommend based on that</p>
            </div>

            <div className="card">
                <i className="fas fa-clock"></i>
                <p>Timely access to medical services and facilities  </p>
            </div>
        </div>

        <Link to="/register" className="btn-primary">Try it now</Link>


    </section>

    <section>

        <div className="grid-container grid-2">
            <img src={mockup} alt=""/>
            <div className="text">
                <h1>Getting you the best possible, as fast as possible</h1>
                <p>
                    We help connect you to the best health facilities in your vicinity on the click of a button.
                </p>
                <Link to="/register" className="btn-primary">Try it now</Link>

            </div>
        </div>
    </section>

    <section>

        <div className="grid-container grid-2">
            <div className="text">
                <h1>Guaranteed quality through feedback</h1>
                <p>
                    Enjoy the ability to give feedback on the services you receive and get recommendations based on that.
                </p>
                <Link to="/register" className="btn-primary">Try it now</Link>

            </div>
            <img src={medicine} alt=""/>

        </div>
    </section>

    <section>

        <div className="grid-container grid-2">
            <img src={gal} alt=""/>

            <div className="text">
                <h1>With you, Anywhere and Everywhere</h1>
                <p>
                    Get recommendations based on your real time location and access the best health facilities in your vicinity.
                </p>
                <Link to="/register" className="btn-primary">Try it now</Link>

            </div>

        </div>
    </section>

    <section className="wrapped">
        <div className="overlay flex-column">
            <h1 className="txt-white">The Service you are looking for is in that signup youre avoiding !</h1>
            <Link to="/register" className="btn-white txt-primary btn-rounded">Sign up now</Link>
        </div>
    </section>

    </>
  )
}

export default HomePage
