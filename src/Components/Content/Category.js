import Option from "./Option";

const mealOptions = [
    {
        name: "Omelete",
        description: "Omelete de queijo com presunto",
        price: "R$21,50",
        image: "assets/omelete.jpg",
        alt: "Omelete",
    },
    {
        name: "Angu",
        description: "Angu de milho verde e amarelo",
        price: "R$29,90",
        image: "assets/angu.jpeg",
        alt: "Angu",
    },
    {
        name: "Strogonoff",
        description: "Strogonoff de filet mignon",
        price: "R$34,40",
        image: "assets/strogonoff.jpg",
        alt: "Strogonoff",
    },
    {
        name: "Pernil",
        description: "Pernil a pururuca com ervas",
        price: "R$54,13",
        image: "assets/pernil.jpeg",
        alt: "Pernil",
    },
];

const beverageOptions = [
    {
        name: "Pepsi",
        description: "Lata de 300ml de Pepsi Black",
        price: "R$5,88",
        image: "assets/pepsi.jpg",
        alt: "pepsi",
    },
    {
        name: "Caipirinha",
        description: "Três opções de sabores",
        price: "R$14,49",
        image: "assets/caipirinha.jpg",
        alt: "Caipirinha",
    },
    {
        name: "Suco de Laranja",
        description: "Suco espremido na hora",
        price: "R$11,77",
        image: "assets/suco-laranja.jpg",
        alt: "Suco de Laranja",
    },
    {
        name: "Mojito",
        description: "Refrescante como o verão",
        price: "R$16,90",
        image: "assets/mojito.jpg",
        alt: "Mojito",
    },
];

const dessertOptions = [
    {
        name: "Rabanada",
        description: "Rabanada com recheio de avelã",
        price: "R$15,80",
        image: "assets/rabanada.jpg",
        alt: "Rabanada",
    },
    {
        name: "Torta de Maçã",
        description: "Torta de maçã assada na hora",
        price: "R$39,90",
        image: "assets/torta-maca.jpg",
        alt: "Torta de Maçã",
    },
    {
        name: "Petit Gateau",
        description: "Petit Gateau com sorvete de creme",
        price: "R$22,45",
        image: "assets/petit-gateau.jpg",
        alt: "Petit Gateau",
    },
    {
        name: "Red Velvet",
        description: "Fatia de bolo Red Velvet",
        price: "R$12,75",
        image: "assets/red-velvet.jpg",
        alt: "Red Velvet",
    },
];

const Category = ({ title, type }) => {
    const options =
        type === "meal"
            ? mealOptions
            : type === "beverage"
            ? beverageOptions
            : dessertOptions;

    return (
        <section className="menu">
            <h1 className="menu__title">{title}</h1>
            <ul className="menu__options">
                {options.map((option, index) => (
                    <Option
                        key={index}
                        name={option.name}
                        description={option.description}
                        price={option.price}
                        image={option.image}
                        alt={option.alt}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Category;
