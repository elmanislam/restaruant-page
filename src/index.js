/*
 * ----------	---	---------------------------------------------------------
 * File: index.js
 * Project: restaurant-page
 * File Created: Tuesday, 23rd December 2025 9:22:21 pm
 * Author: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Last Modified: Friday, 26th December 2025 8:35:21 pm
 * Modified By: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Copyright (c) 2025 Ilma Co.
 * ----------	---	---------------------------------------------------------
 */
import "./styles/styles.css";
import { loadContent } from "./components/content";
import { createElement } from "./components/element/element";
import { navOptions } from "./data";
console.log("Loaded entry point: ", __filename);

function createNavBar() {
  const nav = document.querySelector("#nav");
  const homeButton = createElement({
    tag: "button",
    id: "home-button",
    text: "Home",
  });

  const menuButton = createElement({
    tag: "button",
    id: "menu-button",
    text: "Menu",
  });

  const contactButton = createElement({
    tag: "button",
    id: "contact-button",
    text: "Contact",
  });

  homeButton.addEventListener("click", () => {
    loadContent(navOptions.home);
  });
  menuButton.addEventListener("click", () => {
    loadContent(navOptions.menu);
  });
  contactButton.addEventListener("click", () => {
    loadContent(navOptions.contact);
  });

  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
}

function main() {
  createNavBar();
  loadContent();
}

main();
