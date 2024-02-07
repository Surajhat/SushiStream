import React from "react";
import vg from "../assets/asta.webp"

function Home() {
    return (
        <React.Fragment>
            <div className = "home">
                <main>
                    <h1>SushiStream</h1>
                    <p>Place for all AnimeBingers!</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <p>
                    
                Our library of anime shows is constantly growing, with new titles added regularly. Whether you're a long-time fan or just starting out, you're sure to find something you'll love on SushiStream. In addition to our extensive library of anime shows, SushiStream offers a variety of features that make it the perfect place to watch anime. Our user-friendly interface makes it easy to find and watch your favorite shows, and our chat features allow you to connect with other fans and discuss your favorite moments.

                </p>

            </div>
        </React.Fragment>
    )
}

export default Home;