/* global dishes */
"use strict";

// Текст, который выводится в форме, если блюдо категории не выбрано
const EMPTY_TEXT = {
    "soup": "Блюдо не выбрано",
    "main-course": "Блюдо не выбрано",
    "salad": "Блюдо не выбрано",
    "drink": "Напиток не выбран",
    "dessert": "Десерт не выбран"
};

// Выбранные блюда: категория -> объект блюда
const selectedDishes = {};

function createDishCard(dish) {
    const card = document.createElement("div");
    card.className = "dish";
    card.dataset.dish = dish.keyword;
    card.dataset.kind = dish.kind;

    const image = document.createElement("img");
    image.className = "dish__image";
    image.src = dish.image;
    image.alt = dish.name;

    const price = document.createElement("p");
    price.className = "dish__price";
    price.textContent = `${dish.price}₽`;

    const name = document.createElement("p");
    name.className = "dish__name";
    name.textContent = dish.name;

    const count = document.createElement("p");
    count.className = "dish__count";
    count.textContent = dish.count;

    const button = document.createElement("button");
    button.className = "dish__button";
    button.type = "button";
    button.textContent = "Добавить";

    card.append(image, price, name, count, button);
    return card;
}

function renderDishes() {
    const sorted = [...dishes].sort((a, b) => a.name.localeCompare(b.name, "ru"));

    sorted.forEach((dish) => {
        const container = document.querySelector(
            `.menu-section[data-category="${dish.category}"] .dishes`
        );
        if (container) {
            container.append(createDishCard(dish));
        }
    });
}

function updateOrderSummary() {
    const categories = Object.keys(EMPTY_TEXT);
    const hasSelection = categories.some((category) => selectedDishes[category]);
    let total = 0;

    document.querySelector(".order-summary__empty").hidden = hasSelection;

    categories.forEach((category) => {
        const item = document.querySelector(`.order-summary__item[data-category="${category}"]`);
        const value = item.querySelector(".order-summary__value");
        const input = document.querySelector(`.order-summary__input[data-category="${category}"]`);
        const dish = selectedDishes[category];

        item.hidden = !hasSelection;
        if (dish) {
            value.textContent = `${dish.name} ${dish.price}₽`;
            input.value = dish.keyword;
            total += dish.price;
        } else {
            value.textContent = EMPTY_TEXT[category];
            input.value = "";
        }
    });

    const totalBlock = document.querySelector(".order-summary__total");
    totalBlock.hidden = !hasSelection;
    totalBlock.querySelector(".order-summary__value").textContent = `${total}₽`;
}

function selectDish(keyword) {
    const dish = dishes.find((item) => item.keyword === keyword);
    if (!dish) {
        return;
    }

    selectedDishes[dish.category] = dish;

    const section = document.querySelector(`.menu-section[data-category="${dish.category}"]`);
    section.querySelectorAll(".dish").forEach((card) => {
        card.classList.toggle("dish_selected", card.dataset.dish === keyword);
    });

    updateOrderSummary();
}

function applyFilter(button) {
    const section = button.closest(".menu-section");
    const isActive = button.classList.contains("active");

    section.querySelectorAll(".filters__button").forEach((item) => {
        item.classList.remove("active");
    });
    if (!isActive) {
        button.classList.add("active");
    }

    const kind = isActive ? null : button.dataset.kind;
    section.querySelectorAll(".dish").forEach((card) => {
        card.hidden = kind !== null && card.dataset.kind !== kind;
    });
}

function resetSelection() {
    Object.keys(selectedDishes).forEach((category) => {
        delete selectedDishes[category];
    });
    document.querySelectorAll(".dish_selected").forEach((card) => {
        card.classList.remove("dish_selected");
    });
    updateOrderSummary();
}

document.addEventListener("DOMContentLoaded", () => {
    renderDishes();
    updateOrderSummary();

    document.querySelector(".main").addEventListener("click", (event) => {
        const filterButton = event.target.closest(".filters__button");
        if (filterButton) {
            applyFilter(filterButton);
            return;
        }

        const card = event.target.closest(".dish");
        if (card) {
            selectDish(card.dataset.dish);
        }
    });

    document.querySelector(".order-form").addEventListener("reset", resetSelection);
});
