import Button from "../Auxiliar/Button";

const disabledButton = {
    text: "Selecione os 3 itens para fechar o pedido",
    style: "footer__button",
};

const enabledButton = {
    text: "Fechar pedido",
    style: "footer__button footer__button--enabled",
};

const Footer = ({ isOrderReady }) => {
    return (
        <footer className="footer">
            <Button
                text={isOrderReady ? enabledButton.text : disabledButton.text}
                style={
                    isOrderReady ? enabledButton.style : disabledButton.style
                }
                /*onClick={isOrderReady ? console.log("a") : ""}*/
            />
        </footer>
    );
};

export default Footer;
