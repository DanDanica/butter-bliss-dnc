import React from "react";
import "./menu.css";
import Footer from "../components/footer";
const menuItems = [
  {
    id: 1,
    name: "Croissant",
    description: "Flaky and buttery pastry",
    price: "2.50",
    image:
      "https://www.theflavorbender.com/wp-content/uploads/2020/05/French-Croissants-SM-2363.jpg",
  },
  {
    id: 2,
    name: "Baguette",
    description: "Crusty French bread",
    price: "3.00",
    image: "https://static.toiimg.com/photo/76545839.cms",
  },
  {
    id: 3,
    name: "Chocolate Chip Cookie",
    description: "Soft and chewy cookie",
    price: "1.50",
    image:
      "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg",
  },
  {
    id: 4,
    name: "Blueberry Muffin",
    description: "Moist and fluffy muffin with fresh blueberries",
    price: "2.00",
    image:
      "https://thebusybaker.ca/wp-content/uploads/2020/07/blueberry-muffins-fb-ig-7-scaled.jpg",
  },
  {
    id: 5,
    name: "Cinnamon Roll",
    description: "Sweet and sticky pastry with cinnamon filling",
    price: "2.50",
    image:
      "https://preppykitchen.com/wp-content/uploads/2020/04/Cinnamon-rolls-Recipe-new.jpg",
  },
  {
    id: 6,
    name: "Red Velvet Cupcake",
    description: "Rich and decadent cupcake with cream cheese frosting",
    price: "3.00",
    image:
      "https://www.livewellbakeoften.com/wp-content/uploads/2021/06/Red-Velvet-Cupcakes-3-New-copy.jpg",
  },
  {
    id: 7,
    name: "Sourdough Bread",
    description: "A tangy, chewy bread made with natural yeast.",
    price: "4.00",
    image:
      "https://littlespoonfarm.com/wp-content/uploads/2020/01/Sourdough-Bread-Recipe-for-Beginners.jpg",
  },
  {
    id: 8,
    name: "Apple Pie",
    description: "A classic dessert made with apples and a flaky crust.",
    price: "15.00",
    image:
      "https://images.kitchenstories.io/communityImages/5c0ba9bbcfa3d04e6ce6fb31c533797b_28789370-87da-4b3b-beec-6982c8cb8b89.jpg",
  },
  {
    id: 9,
    name: "Lemon Tart",
    description: "Lemon Tart",
    price: "3.50",
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2021-03-how-to-classic-lemon-tart%2F2021_howto_lemontart_lead2_253",
  },
];

const Menu = () => {
  return (
    <div className="menu-page">
      <h1 className="menu-header">Our Menu</h1>
      <div className="menu-container">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h2 className="menu-item-name">{item.name}</h2>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Menu;
