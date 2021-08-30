import Category from "../Content/Category";

const categories = [
    {
        title: "Primeiro, seu prato",
        type: "meal",
    },
    {
        title: "Agora, sua bebida",
        type: "beverage",
    },
    {
        title: "Por fim, sua sobremesa",
        type: "dessert",
    },
];

const Body = ({ addOption, checkOrder }) => {
    return (
        <main>
            {categories.map((category, index) => (
                <Category
                    key={index}
                    title={category.title}
                    type={category.type}
                    addOption={addOption}
                    checkOrder={checkOrder}
                />
            ))}
        </main>
    );
};

export default Body;
