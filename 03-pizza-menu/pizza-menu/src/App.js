import React from "react";
import "./index.css";
import DevCard from "./DevCard";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
    // <DevCard />
  );
}

function Header() {
  // CSS Inline style
  // const inlineCSS = { color: "red" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const isPizzasNotEmpty = pizzaData.length > 0;
  // const isPizzasNotEmpty = false;

  return (
    <menu className="menu">
      <h2>Our menu</h2>
      {/* {isPizzasNotEmpty && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza {...pizza} />
          ))}
        </ul>
      )} */}
      {isPizzasNotEmpty ? (
        <>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            qui accusantium sequi pariatur magni.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later 😁</p>
      )}
    </menu>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>{`We're happy to welcome you between ${openHour}:00 and ${closeHour}:00.`}</p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>{`We're open until ${closeHour}:00. Come visit us or oder online.`}</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza({ name, ingredients, photoName, price, soldOut }) {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photoName} alt={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "Sold out" : price}</span>
      </div>
    </li>
  );
}

export default App;
