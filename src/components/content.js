/*
 * ----------	---	---------------------------------------------------------
 * File: content.js
 * Project: restaurant-page
 * File Created: Thursday, 25th December 2025 5:22:36 pm
 * Author: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Last Modified: Friday, 26th December 2025 8:42:07 pm
 * Modified By: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Copyright (c) 2025 Ilma Co.
 * ----------	---	---------------------------------------------------------
 */

import { createElement } from "./element/element";
import { textBoxItems, navOptions } from "../data";
export function loadContent(page = navOptions.home) {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  if (page === navOptions.home) {
    loadHomeContent(contentDiv);
  } else if (page === navOptions.menu) {
    loadMenuContent(contentDiv);
  } else if (page === navOptions.contact) {
    loadContactContent(contentDiv);
  }
}

function loadHomeContent(contentDiv) {
  const introBox = createElement(textBoxItems.intro);
  contentDiv.appendChild(introBox);

  const hoursBox = createElement(textBoxItems.hours);
  contentDiv.appendChild(hoursBox);
  console.log(introBox);
  console.log(hoursBox);
}

function loadMenuContent(contentDiv) {
  const introBox = createElement(textBoxItems.intro);
  contentDiv.appendChild(introBox);

  const hoursBox = createElement(textBoxItems.hours);
  contentDiv.appendChild(hoursBox);
  console.log(introBox);
  console.log(hoursBox);
}

function loadContactContent(contentDiv) {
  const contactBox = createElement(textBoxItems.contact);
  contentDiv.appendChild(contactBox);
  console.log(contactBox);
}
