const Option = props => {
    const { image, name, description, price } = props;

    return (
        <li class="menu__option" onclick="">
            <img class="menu__image" src={image} />
            <p class="menu__name">{name}</p>
            <p class="menu__description">{description}</p>
            <p class="menu__price">{price}</p>
        </li>
    );
};

export default Option;
