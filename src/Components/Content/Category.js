import Option from "./Option";

const mealOptions = [
    {
        name: "Omelete",
        description: "Omelete de queijo com presunto",
        price: "R$21,50",
        image: "assets/omelete.jpg",
    },
    {
        name: "Angu",
        description: "Angu de milho verde e amarelo",
        price: "R$29,90",
        image: "assets/angu.jpeg",
    },
    {
        name: "Strogonoff",
        description: "Strogonoff de filet mignon",
        price: "R$34,40",
        image: "assets/strogonoff.jpg",
    },
    {
        name: "Pernil",
        description: "Pernil a pururuca com ervas",
        price: "R$54,13",
        image: "assets/pernil.jpeg",
    },
];

const beverageOptions = [
    {
        name: "Pepsi",
        description: "Lata de 300ml de Pepsi Black",
        price: "R$5,88",
        image: "assets/pepsi.jpg",
    },
    {
        name: "Caipirinha",
        description: "Três opções de sabores",
        price: "R$14,49",
        image: "assets/caipirinha.jpg",
    },
    {
        name: "Suco de Laranja",
        description: "Suco espremido na hora",
        price: "R$11,77",
        image: "assets/suco-laranja.jpg",
    },
    {
        name: "Mojito",
        description: "Refrescante como o verão",
        price: "R$16,90",
        image: "assets/mojito.jpg",
    },
];

const dessertOptions = [
    {
        name: "Rabanada",
        description: "Rabanada com recheio de avelã",
        price: "R$15,80",
        image: "assets/rabanada.jpg",
    },
    {
        name: "Torta de Maçã",
        description: "Torta de maçã assada na hora",
        price: "R$39,90",
        image: "assets/torta-maca.jpg",
    },
    {
        name: "Petit Gateau",
        description: "Petit Gateau com sorvete de creme",
        price: "R$22,45",
        image: "assets/petit-gateau.jpg",
    },
    {
        name: "Red Velvet",
        description: "Fatia de bolo Red Velvet",
        price: "R$12,75",
        image: "assets/red-velvet.jpg",
    },
];

const Category = props => {
    const { title, type } = props;

    const options =
        type === "meal"
            ? mealOptions
            : props.type === "beverage"
            ? beverageOptions
            : dessertOptions;

    return (
        <section class="menu">
            <h1 class="menu__title">{title}</h1>
            <ul class="menu__options">
                {options.map((option, index) => (
                    <Option
                        key={index}
                        name={option.name}
                        description={option.description}
                        price={option.price}
                        image={option.image}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Category;
