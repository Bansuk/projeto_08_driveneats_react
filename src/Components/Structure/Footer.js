import Button from "../Auxiliar/Button";

const disabledButton = {
    text: "Selecione os 3 itens para fechar o pedido",
    style: "footer__button",
};

const enabledButton = {
    text: "Fechar pedido",
    style: "footer__button footer__button--enabled",
};

const Footer = () => {
    return (
        <footer className="footer">
            <Button text={disabledButton.text} style={disabledButton.style} />
        </footer>
    );
};

export default Footer;
