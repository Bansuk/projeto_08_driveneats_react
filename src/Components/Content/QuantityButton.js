const QuantityButton = props => {
    const { quantity, decreaseQuantity, increaseQuantity } = props;

    if (quantity === 0) {
        return <></>;
    }

    return (
        <div className="menu__buttons">
            <span className="menu__minus" onClick={decreaseQuantity}>
                -
            </span>
            <span>{quantity}</span>
            <span className="menu__plus" onClick={increaseQuantity}>
                +
            </span>
        </div>
    );
};

export default QuantityButton;
