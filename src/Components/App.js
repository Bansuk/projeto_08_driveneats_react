import Header from "./Structure/Header";
import Body from "./Structure/Body";
import Footer from "./Structure/Footer";
import React, { useState } from "react";

const App = () => {
    const [order, setOrder] = useState([]);
    const addOption = option => {
        setOrder([...order, option]);
        // console.log(order.some(option => option.name));
        // console.log(option.name);
        // if (order.some(option => option.name)) {
        //     console.log(order.findIndex(option => option.name));
        // } else {
        // }
    };
    const [isOrderReady, setIsOrderReady] = useState(false);
    const alterOrderStatus = orderStatus => {
        setIsOrderReady(orderStatus);
    };
    const checkOrder = () => {
        if (
            order.some(option => option.type === "meal") &&
            order.some(option => option.type === "beverage") &&
            order.some(option => option.type === "dessert")
        ) {
            alterOrderStatus(true);
        }
    };

    return (
        <>
            <Header />
            <Body addOption={addOption} checkOrder={checkOrder} />
            <Footer isOrderReady={isOrderReady} />
        </>
    );
};

export default App;
