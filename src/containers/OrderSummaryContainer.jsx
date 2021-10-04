import React from "react";
import AnnualPlan from "../components/AnnualPlan";
import CancelOrderButton from "../components/CancelOrderButton";
import Header from "../components/Header";
import PaymentButton from "../components/PaymentButton";
import SummaryContent from "../components/SummaryContent";

const OrderSummaryContainer = () => {
    return (
        <div className="container">
            <Header />
            <SummaryContent />
            <AnnualPlan />
            <PaymentButton />
            <CancelOrderButton />
        </div>
    );
};

export default OrderSummaryContainer;
