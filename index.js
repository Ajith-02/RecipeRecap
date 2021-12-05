const express = require("express");

const app = express();

const PORT = 9000;

const recipes = [
    {
        picture: "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&quality=65&strip=all&ssl=1",
        name: "Paneer butter masala"
    },
    {
        picture: "https://vismaifood.com/storage/app/uploads/public/e12/7b7/127/thumb__1200_0_0_0_auto.jpg",
        name: "Biryani"
    },
    {
        picture: "https://www.honeywhatscooking.com/wp-content/uploads/2020/10/Baked-Gobi-Manchurian43.jpg",
        name: "Gobi manchurian"
    },
    {
        picture: "https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/malabar_parotta.jpg",
        name: "Parotta"
    },
    {
        picture: "https://www.cookingclassy.com/wp-content/uploads/2018/08/tandoori-chicken-11-500x500.jpg",
        name: "Chicken tandoori"
    }
];

app.get("/", (request, response) => {
    response.send("Hello world 🦁");
});

app.get("/recipes", (request, response) => {
    response.send(recipes);
});


app.listen(PORT, () => console.log("App is started", PORT));

//console.log("Hello, world");