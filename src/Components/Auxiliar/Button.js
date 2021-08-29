const Button = props => {
    const { text, style } = props;
    return <button className={style} /*onClick={}*/>{text}</button>;
};

export default Button;
