interface ICategory {
    title: string;
    icon: HTMLImageElement["src"]
}

const categories: ICategory[] = [
    {
        title: "Html",
        icon: require("../assets/images/categories/html.png")
    },
    {
        title: "Css",
        icon: require("../assets/images/categories/css.png")
    },
    {
        title: "Javascript",
        icon: require("../assets/images/categories/javascript.png")
    },
    {
        title: "Tailwind",
        icon: require("../assets/images/categories/tailwind.png")
    },
    {
        title: "VueJs",
        icon: require("../assets/images/categories/vuejs.png")
    },
    {
        title: "React JS",
        icon: require("../assets/images/categories/reactjs.png")
    },
]

export default categories;