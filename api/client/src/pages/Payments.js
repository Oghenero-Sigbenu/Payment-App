import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import PaymentCards from "../components/PaymentCards/PaymentCards"

class Payments extends Component {
    render(){
        return(
            <>
                <PaymentCards />
            </>
        )
    }
}

export default Payments;