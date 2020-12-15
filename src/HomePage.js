import React, { useEffect } from 'react';
import './HomePage.css';

function HomePage() {
    useEffect(() => {
        const carWiseScript = document.createElement('script');

        carWiseScript.src =
            'https://www.carwise.com/auto-body-shops/resources/shop-plugins/js/plugin.js';
        carWiseScript.async = true;

        document.body.appendChild(carWiseScript);

        return () => {
            document.body.removeChild(carWiseScript);
        };
    });

    return (
        <div>
            <div className="Home-greeting">
                <h1 className="Home-header">
                    Serving Cochise County for over 10 Years!
                </h1>
                <p className="Home-body"></p>
            </div>
            <div className="Feature-row-one">
                <div className="Location-info">
                    <div className="Location-name">
                        <h1>Benson AutoBody & Glass</h1>
                    </div>

                    <div className="Location-address">
                        <span className="Address-text">
                            1201 AZ-80 Benson, AZ 85602
                        </span>
                    </div>
                    <div className="contact-hours-style">
                        <div className="Location-contact">
                            <span className="Phone-text">Contact Us At</span>
                            <span className="Phone-number">(520) 586-3535</span>
                        </div>
                        <div className="Location-hours">
                            <span className="Hours-of-operation">
                                Hours of Operation
                            </span>

                            <span className="Week-days">Monday - Friday</span>
                            <span className="Hours-of-operation">
                                7:30 am to 5:00 pm
                            </span>

                            <span className="Holiday-disclaimer">
                                *Holiday hours may differ
                            </span>
                        </div>
                    </div>
                </div>
                <div className="Map">
                    <iframe
                        title="google maps"
                        width="600"
                        height="400"
                        frameborder="0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAnPWzkI24YaibPRrMyouR0Fa6UEKC-rHw&q=place_id:ChIJQz43T98C14YRZO5TITrMjaE"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div>
                <h1 className="Home-header">Places for Reviews.</h1>
            </div>

            <div
                class="shop-review-box"
                id="sf-472039"
                reviews-enabled="1"
                widget-size="m"
            >
                <p>
                    <a
                        rel="nofollow"
                        href="https://www.carwise.com/auto-body-shops/benson-autobody-inc-benson-az-85602/472039"
                        target="_blank"
                        title="Check out Benson Autobody, Inc. on carwise.com"
                    >
                        Benson Autobody, Inc.
                    </a>
                    - Find our
                    <a rel="nofollow" href="https://www.carwise.com">
                        Auto Body Shop
                    </a>
                    on carwise.com
                </p>
            </div>
        </div>
    );
}

export default HomePage;
