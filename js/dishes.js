/* exported dishes */
"use strict";

const dishes = [
    // Супы: 2 рыбных, 2 мясных, 2 вегетарианских
    { keyword: "gazpacho", name: "Гаспачо", price: 195, category: "soup", count: "350 г", image: "images/menu/soups/gazpacho.jpg", kind: "veg" },
    { keyword: "mushroom_soup", name: "Грибной суп-пюре", price: 185, category: "soup", count: "330 г", image: "images/menu/soups/mushroom_soup.jpg", kind: "veg" },
    { keyword: "norwegian_soup", name: "Норвежский суп", price: 270, category: "soup", count: "330 г", image: "images/menu/soups/norwegian_soup.jpg", kind: "fish" },
    { keyword: "tom_yum", name: "Том ям с креветками", price: 365, category: "soup", count: "350 г", image: "images/menu/soups/tomyum.jpg", kind: "fish" },
    { keyword: "chicken_soup", name: "Куриный суп с лапшой", price: 195, category: "soup", count: "330 г", image: "images/menu/soups/chicken.jpg", kind: "meat" },
    { keyword: "ramen", name: "Рамен со свининой", price: 375, category: "soup", count: "425 г", image: "images/menu/soups/ramen.jpg", kind: "meat" },

    // Главные блюда: 2 рыбных, 2 мясных, 2 вегетарианских
    { keyword: "fried_potatoes", name: "Жареная картошка с грибами", price: 150, category: "main-course", count: "250 г", image: "images/menu/main_course/friedpotatoeswithmushrooms1.jpg", kind: "veg" },
    { keyword: "pizza", name: "Пицца Маргарита", price: 450, category: "main-course", count: "470 г", image: "images/menu/main_course/pizza.jpg", kind: "veg" },
    { keyword: "lasagna", name: "Лазанья", price: 385, category: "main-course", count: "310 г", image: "images/menu/main_course/lasagna.jpg", kind: "meat" },
    { keyword: "chicken_cutlets", name: "Котлеты из курицы с картофельным пюре", price: 225, category: "main-course", count: "280 г", image: "images/menu/main_course/chickencutletsandmashedpotatoes.jpg", kind: "meat" },
    { keyword: "fish_rice", name: "Рыбная котлета с рисом и спаржей", price: 320, category: "main-course", count: "270 г", image: "images/menu/main_course/fishrice.jpg", kind: "fish" },
    { keyword: "shrimp_pasta", name: "Паста с креветками", price: 340, category: "main-course", count: "280 г", image: "images/menu/main_course/shrimppasta.jpg", kind: "fish" },

    // Салаты и стартеры: 1 рыбный, 1 мясной, 4 вегетарианских
    { keyword: "tuna_salad", name: "Салат с тунцом", price: 480, category: "salad", count: "250 г", image: "images/menu/salads_starters/tunasalad.jpg", kind: "fish" },
    { keyword: "caesar", name: "Цезарь с цыплёнком", price: 370, category: "salad", count: "220 г", image: "images/menu/salads_starters/caesar.jpg", kind: "meat" },
    { keyword: "korean_salad", name: "Корейский салат с овощами и яйцом", price: 330, category: "salad", count: "250 г", image: "images/menu/salads_starters/saladwithegg.jpg", kind: "veg" },
    { keyword: "caprese", name: "Капрезе с моцареллой", price: 350, category: "salad", count: "235 г", image: "images/menu/salads_starters/caprese.jpg", kind: "veg" },
    { keyword: "french_fries", name: "Картофель фри с соусом цезарь", price: 280, category: "salad", count: "235 г", image: "images/menu/salads_starters/frenchfries1.jpg", kind: "veg" },
    { keyword: "french_fries_ketchup", name: "Картофель фри с кетчупом", price: 260, category: "salad", count: "235 г", image: "images/menu/salads_starters/frenchfries2.jpg", kind: "veg" },

    // Напитки: 3 холодных, 3 горячих
    { keyword: "orange_juice", name: "Апельсиновый сок", price: 120, category: "drink", count: "300 мл", image: "images/menu/beverages/orangejuice.jpg", kind: "cold" },
    { keyword: "apple_juice", name: "Яблочный сок", price: 90, category: "drink", count: "300 мл", image: "images/menu/beverages/applejuice.jpg", kind: "cold" },
    { keyword: "carrot_juice", name: "Морковный сок", price: 110, category: "drink", count: "300 мл", image: "images/menu/beverages/carrotjuice.jpg", kind: "cold" },
    { keyword: "cappuccino", name: "Капучино", price: 180, category: "drink", count: "300 мл", image: "images/menu/beverages/cappuccino.jpg", kind: "hot" },
    { keyword: "green_tea", name: "Зелёный чай", price: 100, category: "drink", count: "300 мл", image: "images/menu/beverages/greentea.jpg", kind: "hot" },
    { keyword: "black_tea", name: "Чёрный чай", price: 90, category: "drink", count: "300 мл", image: "images/menu/beverages/tea.jpg", kind: "hot" },

    // Десерты: 3 маленькие порции, 2 средние, 1 большая
    { keyword: "cheesecake", name: "Чизкейк", price: 240, category: "dessert", count: "125 г", image: "images/menu/desserts/checheesecake.jpg", kind: "small" },
    { keyword: "chocolate_cheesecake", name: "Шоколадный чизкейк", price: 260, category: "dessert", count: "125 г", image: "images/menu/desserts/chocolatecheesecake.jpg", kind: "small" },
    { keyword: "chocolate_cake", name: "Шоколадный торт", price: 270, category: "dessert", count: "140 г", image: "images/menu/desserts/chocolatecake.jpg", kind: "small" },
    { keyword: "baklava", name: "Пахлава", price: 220, category: "dessert", count: "300 г", image: "images/menu/desserts/baklava.jpg", kind: "medium" },
    { keyword: "donuts_3", name: "Пончики (3 штуки)", price: 410, category: "dessert", count: "350 г", image: "images/menu/desserts/donuts.jpg", kind: "medium" },
    { keyword: "donuts_6", name: "Пончики (6 штук)", price: 650, category: "dessert", count: "700 г", image: "images/menu/desserts/donuts2.jpg", kind: "large" }
];
