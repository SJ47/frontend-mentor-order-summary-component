import React from "react";
import musicIcon from "../assets/images/icon-music.svg";

const AnnualPlan = () => {
    return (
        <div className="annual-plan-container">
            <img src={musicIcon} alt="" />
            <div className="annual-plan-price-container">
                <p>Annual Plan</p>
                <p>$59.99/year</p>
            </div>
            <a href="#">Change</a>
        </div>
    );
};

export default AnnualPlan;
