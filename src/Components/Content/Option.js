import React, { useState } from "react";
import QuantityButton from "./QuantityButton";

const Option = ({
    image,
    name,
    description,
    price,
    alt,
    type,
    addOption,
    checkOrder,
}) => {
    const [selected, setSelected] = useState("");
    const [quantity, setQuantity] = useState(0);
    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
        if (quantity - 1 === 0) {
            setSelected("");
        }
    };
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        addOption({ name, quantity, price, type });
        checkOrder();
    };

    return (
        <li
            className={`menu__option ${selected}`}
            onClick={() => {
                if (quantity === 0) {
                    setSelected("menu__option--selected");
                    increaseQuantity();
                }
            }}
        >
            <img className="menu__image" src={image} alt={alt} />
            <p className="menu__name">{name}</p>
            <p className="menu__description">{description}</p>
            <div className="menu__bottom">
                <p className="menu__price">{price}</p>
                <QuantityButton
                    quantity={quantity}
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity}
                />
            </div>
        </li>
    );
};

export default Option;
