interface IBlog {
    title: string;
    banner: HTMLImageElement["src"]
}

const categories: IBlog[] = [
    {
        title: "Fundamental of javascript",
        banner: require("../assets/images/blogs/4.png")
    },{
        title: "Grid CSS make your life easier",
        banner: require("../assets/images/blogs/2.png")
    },{
        title: "Make animated light mode and dark mode toggle with CSS",
        banner: require("../assets/images/blogs/1.png")
    },{
        title: "Make tic tac toe games with react JS",
        banner: require("../assets/images/blogs/3.png")
    },
    {
        title: "Fundamental of javascript",
        banner: require("../assets/images/blogs/4.png")
    },{
        title: "Grid CSS make your life easier",
        banner: require("../assets/images/blogs/2.png")
    },{
        title: "Make animated light mode and dark mode toggle with CSS",
        banner: require("../assets/images/blogs/1.png")
    },{
        title: "Make tic tac toe games with react JS",
        banner: require("../assets/images/blogs/3.png")
    },
]

export default categories;