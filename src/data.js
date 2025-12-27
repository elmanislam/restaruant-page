/*
 * ----------	---	---------------------------------------------------------
 * File: data.js
 * Project: restaurant-page
 * File Created: Thursday, 25th December 2025 11:01:34 pm
 * Author: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Last Modified: Friday, 26th December 2025 8:39:58 pm
 * Modified By: Elman Islam (elmanislam123@gmail.com)
 * -----
 * Copyright (c) 2025 Ilma Co.
 * ----------	---	---------------------------------------------------------
 */

export const textBoxItems = {
  intro: {
    tag: "div",
    id: "intro",
    classList: ["text-box"],
    text: "Welcome to the Krusty Krab, the finest fast-food establishment under the sea, and home to the delicious krabby patty.",
  },
  hours: {
    tag: "div",
    id: "hours",
    classList: ["text-box"],
    heading: "HOURS",
    textArr: [
      "Monday - Friday: 9am - 9pm",
      "Saturday: 9am - 8pm",
      "Sunday: closed",
    ],
  },
  contact: {
    tag: "div",
    id: "contact",
    classList: ["text-box"],
    heading: "CONTACT US",
    textArr: [
      "831 Bottomfeeder Ln.",
      "Bikini Bottom, Atlantic Ocean",
      "555-501-1999",
      "krustykrab@seamail.coral",
    ],
  },
};

export const navOptions = {
  home: "home",
  menu: "menu",
  contact: "contact",
};
