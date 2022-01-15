/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/listMenuItems/listMenuItems.js":
/*!***************************************************!*\
  !*** ./Components/listMenuItems/listMenuItems.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(text) {
    _classCallCheck(this, Button);

    this.text = text;
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return "<li class=\"menu-title\">".concat(this.text, "</li>");
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./Components/menuItem/menuItem.js":
/*!*****************************************!*\
  !*** ./Components/menuItem/menuItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MenuItem = /*#__PURE__*/function () {
  function MenuItem(_ref) {
    var id = _ref.id,
        title = _ref.title,
        category = _ref.category,
        price = _ref.price,
        old_price = _ref.old_price,
        img = _ref.img,
        description = _ref.description;

    _classCallCheck(this, MenuItem);

    this.id = id;
    this.title = title;
    this.category = category;
    this.old_price = old_price;
    this.price = price;
    this.img = img;
    this.description = description;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      return "\n            <div class=\"item\">\n                <img class=\"img-item\" src=\"".concat(this.img, "\" alt=\"").concat(this.title, "\">\n                <h3 class=\"item-header\">").concat(this.title, "</h3>\n                <p class=\"item-desc\">").concat(this.description, "</p>\n                <div class=\"cost_count\">\n                    <div class=\"wrap-cost\">\n                        <p class=\"oldCost\">$").concat(this.old_price, "</p>\n                        <p class=\"newCost\">$").concat(this.price, "</p>\n                    </div>\n                    <div class=\"count\">\n                        <p class=\"minus\">-</p>\n                        <p>1</p>\n                        <p class=\"plus\">+</p>\n                    </div>\n                </div>\n                <div class=\"wrap-addBtn\">\n                    <button id=\"btn\" class=\"addBtn\">Add to card</button>\n                    <div id=\"addFavorite\" class=\"wrap-icon favorites\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                             class=\"bi bi-bookmark\" viewBox=\"0 0 16 16\">\n                            <path d=\"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z\"/>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n            ");
    }
  }]);

  return MenuItem;
}();



/***/ }),

/***/ "./Components/pop-up-basket/pop-up-basket.js":
/*!***************************************************!*\
  !*** ./Components/pop-up-basket/pop-up-basket.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BasketItem)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var BasketItem = /*#__PURE__*/function () {
  function BasketItem(_ref) {
    var id = _ref.id,
        title = _ref.title,
        category = _ref.category,
        price = _ref.price,
        img = _ref.img,
        description = _ref.description;

    _classCallCheck(this, BasketItem);

    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.img = img;
    this.description = description;
  }

  _createClass(BasketItem, [{
    key: "render",
    value: function render() {
      return "\n            <div class=\"pop_up_item\">\n                <div class=\"wrap\">\n                    <img class=\"img-item\" src=\"".concat(this.img, "\" alt=\"").concat(this.title, "\">\n                    <div class=\"pp_text\">\n                        <h3 class=\"item-header\">").concat(this.title, "</h3>\n                        <p class=\"item-desc\">").concat(this.description, "</p>\n                        <p class=\"cost\">").concat(this.price, "</p>\n                    </div>\n                </div>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" fill=\"currentColor\" class=\"bi bi-x-lg\" viewBox=\"0 0 16 16\">\n                    <path fill-rule=\"evenodd\" d=\"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z\"/>\n                    <path fill-rule=\"evenodd\" d=\"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z\"/>\n                </svg>\n            </div>\n            ");
    }
  }]);

  return BasketItem;
}();



/***/ }),

/***/ "./Components/pop-up-favorites/pop-up-favorites.js":
/*!*********************************************************!*\
  !*** ./Components/pop-up-favorites/pop-up-favorites.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FavoriteItem)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FavoriteItem = /*#__PURE__*/function () {
  function FavoriteItem(_ref) {
    var id = _ref.id,
        title = _ref.title,
        category = _ref.category,
        price = _ref.price,
        img = _ref.img,
        description = _ref.description;

    _classCallCheck(this, FavoriteItem);

    this.id = id;
    this.title = title;
    this.category = category;
    this.price = price;
    this.img = img;
    this.description = description;
  }

  _createClass(FavoriteItem, [{
    key: "render",
    value: function render() {
      return "\n            <div class=\"pop_up_item\">\n                <div class=\"wrap\">\n                    <img class=\"img-item\" src=\"".concat(this.img, "\" alt=\"").concat(this.title, "\">\n                    <div class=\"pp_text\">\n                        <h3 class=\"item-header\">").concat(this.title, "</h3>\n                        <p class=\"item-desc\">").concat(this.description, "</p>\n                        <p class=\"cost\">").concat(this.price, "</p>\n                    </div>\n                </div>\n                <div class=\"wrap-addBtn\">\n                    <button class=\"addBtn\">Add to card</button>\n                    <div class=\"wrap-icon favorites\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\"\n                             class=\"bi bi-bookmark\" viewBox=\"0 0 16 16\">\n                            <path d=\"M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z\"/>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n            ");
    }
  }]);

  return FavoriteItem;
}();



/***/ }),

/***/ "./Helpers/ArrayExt.js":
/*!*****************************!*\
  !*** ./Helpers/ArrayExt.js ***!
  \*****************************/
/***/ (() => {

Array.prototype.distinct = function () {
  return Array.from(new Set(this));
};

/***/ }),

/***/ "./data/basketData.js":
/*!****************************!*\
  !*** ./data/basketData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basket": () => (/* binding */ basket)
/* harmony export */ });
/* harmony import */ var _Components_pop_up_basket_pop_up_basket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/pop-up-basket/pop-up-basket */ "./Components/pop-up-basket/pop-up-basket.js");
var basket = [new _Components_pop_up_basket_pop_up_basket__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_pop_up_basket_pop_up_basket__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_pop_up_basket_pop_up_basket__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  price: 2.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
})];


/***/ }),

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/menuItem/menuItem */ "./Components/menuItem/menuItem.js");

var menu = [new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  old_price: 3.55,
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  old_price: 5.55,
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  old_price: 2.55,
  price: 1.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 4,
  title: "Salad",
  category: "Salad",
  old_price: 4.55,
  price: 3.55,
  img: "./images/unsplash_xeTv9N2FjXA.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 5,
  title: "Desert",
  category: "Desert",
  old_price: 3.55,
  price: 3.55,
  img: "./images/image 7.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_menuItem_menuItem__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 6,
  title: "Drink",
  category: "Drink",
  old_price: 3.55,
  price: 3.55,
  img: "./images/i.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
})];

/***/ }),

/***/ "./data/favoritesData.js":
/*!*******************************!*\
  !*** ./data/favoritesData.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "favorite": () => (/* binding */ favorite)
/* harmony export */ });
/* harmony import */ var _Components_pop_up_favorites_pop_up_favorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/pop-up-favorites/pop-up-favorites */ "./Components/pop-up-favorites/pop-up-favorites.js");
var favorite = [new _Components_pop_up_favorites_pop_up_favorites__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 1,
  title: "Huge cheeseburger",
  category: "Burger",
  price: 2.55,
  img: "./images/unsplash_48F-Uvx9wvw.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_pop_up_favorites_pop_up_favorites__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 2,
  title: "Pizza",
  category: "Pizza",
  price: 3.55,
  img: "./images/image 2.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
}), new _Components_pop_up_favorites_pop_up_favorites__WEBPACK_IMPORTED_MODULE_0__["default"]({
  id: 3,
  title: "Sandwich",
  category: "Sandwich",
  price: 2.55,
  img: "./images/image 3.png",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
})];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Components_pop_up_favorites_pop_up_favorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/pop-up-favorites/pop-up-favorites */ "./Components/pop-up-favorites/pop-up-favorites.js");
/* harmony import */ var _Components_listMenuItems_listMenuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/listMenuItems/listMenuItems */ "./Components/listMenuItems/listMenuItems.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/data */ "./data/data.js");
/* harmony import */ var _Helpers_ArrayExt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Helpers/ArrayExt */ "./Helpers/ArrayExt.js");
/* harmony import */ var _Helpers_ArrayExt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Helpers_ArrayExt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_basketData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/basketData */ "./data/basketData.js");
/* harmony import */ var _data_favoritesData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/favoritesData */ "./data/favoritesData.js");

var btnSearch = document.querySelectorAll('.loop');
var inputSearch = document.querySelectorAll('.inputSearch');
var closeBtn = document.querySelectorAll('.close_btn');

function forEachFunc(arrayElements, string, string2) {
  arrayElements.forEach(function (item) {
    item.classList.add(string);
    item.classList.remove(string2);
  });
}

function showInput() {
  forEachFunc(inputSearch, 'show', 'hide');
  setTimeout(function () {
    closeBtn.forEach(function (btn) {
      btn.classList.remove('hide');
    });
  }, 500);
  forEachFunc(inputSearch, 'show', 'hide');
  forEachFunc(btnSearch, 'show-input', 'hide');
}

btnSearch.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (inputSearch[0] || inputSearch[1].classList.contains('hide')) {
      inputSearch.forEach(function (input) {
        input.value = '';
      });
      showInput();
    }
  });
});

var hideInput = function hideInput() {
  forEachFunc(inputSearch, 'hide', 'show');
  forEachFunc(btnSearch, 'show', 'show-input');
  forEachFunc(closeBtn, 'hide', 'show');
};

closeBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    hideInput();
  });
});
var langPopUp = document.querySelectorAll('.change_lang_box');
var arrow = document.querySelectorAll('.arrow');

function hideAnimation() {
  forEachFunc(langPopUp, 'pop-up-langHide', 'show');
  setTimeout(function () {
    forEachFunc(langPopUp, 'hide', 'show');
  }, 300);
}

arrow.forEach(function (arr) {
  arr.addEventListener('click', function () {
    if (arr.classList.contains('rotateArrow')) {
      forEachFunc(arrow, 'rotateArrowElse', 'rotateArrow');
    } else if (arr.classList.contains('rotateArrowElse')) {
      forEachFunc(arrow, 'rotateArrow', 'rotateArrowElse');
    }

    if (langPopUp[0] && langPopUp[1].classList.contains('pop-up-langHide')) {
      forEachFunc(langPopUp, 'pop-up-langShow', 'pop-up-langHide');
      langPopUp.forEach(function (item) {
        item.classList.remove('hide');
      });
    } else hideAnimation();
  });
});



var menuContainer = document.querySelector('.menu_container');
var buttonsText = _data_data__WEBPACK_IMPORTED_MODULE_2__.menu.map(function (category) {
  return category.category;
}).distinct();
var buttonsComponents = buttonsText.map(function (buttonsContent) {
  return new _Components_listMenuItems_listMenuItems__WEBPACK_IMPORTED_MODULE_1__["default"](buttonsContent);
});
var buttonsContainer = menuContainer.querySelector(".menu-title-parent");
var renderData = buttonsComponents.reduce(function (renderData, btn) {
  return renderData += btn.render();
}, '');
buttonsContainer.innerHTML = buttonsComponents.reduce(function (renderData, btn) {
  return renderData += btn.render();
}, '');
var menuFilter = "Burger";

function renderMenu(menuItems) {
  var MenuContainer = document.querySelector('.menu-items');
  MenuContainer.innerHTML = menuItems.reduce(function (renderData, MenuItem) {
    return renderData += MenuItem.render();
  }, '');
  var cards = MenuContainer.querySelectorAll('.item');
  cards.forEach(function (card) {
    card.classList.add('fadeMenu');
  });
}

var slideSlots = document.querySelectorAll('.slide-slot');
var buttonsFilter = document.querySelectorAll('.menu-title');

function main() {
  buttonsFilter[0].classList.add('main');
}

main();
buttonsFilter.forEach(function (btn) {
  btn.addEventListener('click', function (event) {
    menuFilter = event.target.innerText;
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === menuFilter;
    }));

    if (event.target.classList.contains('menu-title')) {
      buttonsFilter.forEach(function (item, i) {
        if (event.target === item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
  return obj.category === menuFilter;
}));

function hideTabContent() {
  buttonsFilter.forEach(function (btn) {
    btn.classList.remove('main');
  });
  slideSlots.forEach(function (slot) {
    slot.classList.remove('main-slot');
  });
}

function showTabContent() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  buttonsFilter[i].classList.add('main');
  slideSlots[i].classList.add('main-slot');
}

var rightLeftSlider = menuContainer.querySelectorAll('.slide-btn');

function sliderFunc(i) {
  hideTabContent();
  showTabContent(i);
}

var menuCategoryNames = ['Burger', 'Pizza', 'Sandwich', 'Salad', 'Desert', 'Drink'];

function sliderIfForLeftSlide(array) {
  if (menuFilter === array[0]) {
    menuFilter = array[5];
    sliderFunc(5);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[5];
    }));
  } else if (menuFilter === array[1]) {
    menuFilter = array[0];
    sliderFunc(0);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[0];
    }));
  } else if (menuFilter === array[2]) {
    menuFilter = array[1];
    sliderFunc(1);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[1];
    }));
  } else if (menuFilter === array[3]) {
    menuFilter = array[2];
    sliderFunc(2);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[2];
    }));
  } else if (menuFilter === array[4]) {
    menuFilter = array[3];
    sliderFunc(3);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[3];
    }));
  } else if (menuFilter === array[5]) {
    menuFilter = array[4];
    sliderFunc(4);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[4];
    }));
  }
}

function sliderIfForRightSlide(array) {
  if (menuFilter === array[0]) {
    menuFilter = array[1];
    sliderFunc(1);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[1];
    }));
  } else if (menuFilter === array[1]) {
    menuFilter = array[2];
    sliderFunc(2);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[2];
    }));
  } else if (menuFilter === array[2]) {
    menuFilter = array[3];
    sliderFunc(3);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[3];
    }));
  } else if (menuFilter === array[3]) {
    menuFilter = array[4];
    sliderFunc(4);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[4];
    }));
  } else if (menuFilter === array[4]) {
    menuFilter = array[5];
    sliderFunc(5);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[5];
    }));
  } else if (menuFilter === array[5]) {
    menuFilter = array[0];
    sliderFunc(0);
    renderMenu(_data_data__WEBPACK_IMPORTED_MODULE_2__.menu.filter(function (obj) {
      return obj.category === array[0];
    }));
  }
}

rightLeftSlider[0].addEventListener('click', function () {
  sliderIfForLeftSlide(menuCategoryNames);
});
rightLeftSlider[1].addEventListener('click', function () {
  sliderIfForRightSlide(menuCategoryNames);
});
var popupBasket = document.querySelector('.basket'); // const closePopUpBtn = document.querySelectorAll('.close_pop_btn')

var closePopUpBtn = document.querySelectorAll('.close_pop-up');
var popupTrigger = document.querySelectorAll('.basket_icon');
var favoritesPopup = document.querySelector('#saved');
var favoritesTrigger = document.querySelectorAll('.favorites_icon');

function hidePopup(popup) {
  popup.classList.add('hide');
  popup.classList.remove('show');
  document.body.style.overflow = 'scroll';
}

function showPopup(popup) {
  popup.classList.add('show');
  popup.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

favoritesTrigger.forEach(function (btn) {
  btn.addEventListener('click', function () {
    showPopup(favoritesPopup);
  });
});
popupTrigger.forEach(function (btn) {
  btn.addEventListener('click', function () {
    showPopup(popupBasket);
  });
});
closePopUpBtn.forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (!popupBasket.classList.contains('hide')) {
      hidePopup(popupBasket);
    } else if (!favoritesPopup.classList.contains('hide')) {
      hidePopup(favoritesPopup);
    }
  });
});
popupBasket.addEventListener('click', function (e) {
  if (e.target.classList.contains('basket')) {
    hidePopup(popupBasket);
  }
});
favoritesPopup.addEventListener('click', function (e) {
  if (e.target.classList.contains('favorites')) {
    hidePopup(favoritesPopup);
  }
});
document.body.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    hidePopup(popupBasket);
    hidePopup(favoritesPopup);
  }
});

var basketItemContainer = popupBasket.querySelector('.pop_up_content');
basketItemContainer.innerHTML = _data_basketData__WEBPACK_IMPORTED_MODULE_4__.basket.reduce(function (renderData, BasketItem) {
  return renderData += BasketItem.render();
}, '');

var favoritesContainer = favoritesPopup.querySelector('.saved');
favoritesContainer.innerHTML = _data_favoritesData__WEBPACK_IMPORTED_MODULE_5__.favorite.reduce(function (renderData, savedItem) {
  return renderData += savedItem.render();
}, '');
})();

/******/ })()
;
//# sourceMappingURL=project.js.map