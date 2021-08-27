import Button from "../Auxiliar/Button";
import Item from "../Content/Item";

const Order = () => {
    return (
        <div class="order hidden">
            <Item />
            <section class="order__box">
                <p class="order__title">Confirme seu pedido</p>
                <div class="order__buttons">
                    <Button />
                    <Button />
                </div>
            </section>
        </div>
    );
};
