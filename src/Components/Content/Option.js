import React, { useState } from "react";

const Option = props => {
    const { image, name, description, price } = props;
    const [selected, setSelected] = useState("menu__option");

    return (
        <li
            class={selected}
            onClick={() => setSelected("menu__option menu__option--selected")}
        >
            <img class="menu__image" src={image} />
            <p class="menu__name">{name}</p>
            <p class="menu__description">{description}</p>
            <p class="menu__price">{price}</p>
        </li>
    );
};

export default Option;
