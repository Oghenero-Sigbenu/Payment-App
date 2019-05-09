import React, { Component } from "react";
// import { Spinner } from "reactstrap";

// import banner from "../banner.png";
// import "../style.css";


class Home extends Component {
   
    render() {
        return (
            <>
                <section className="banner">
                    <div className="banner-text">
                        <h2>Payment APP</h2>
                        <p>View All Payment Made and Add Proof Of Payment</p>
                        <button>Explore All</button>
                    </div>
                    {/* <img src={banner} className="banner-img" alt="foody banner" /> */}
                </section>
                
                    
            </>
        )
    }
}



export default Home;