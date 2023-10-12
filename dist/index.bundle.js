"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/resources/images/home_banner.jpeg */ "./src/assets/resources/images/home_banner.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/resources/images/arrow-down-green.png */ "./src/assets/resources/images/arrow-down-green.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/resources/images/arrow-down-white.png */ "./src/assets/resources/images/arrow-down-white.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/resources/images/team-background.jpg */ "./src/assets/resources/images/team-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/resources/images/footer-background.jpeg */ "./src/assets/resources/images/footer-background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Mobile Styles */

/* General styles */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Mukta', sans-serif;
  color: #707070;
  font-size: x-small;
}

.vertical-separator,
.vertical-separator-small,
nav {
  display: none;
}

h2,
h1 {
  font-size: 20px;
  font-family: 'DM Serif Display', serif;
  letter-spacing: 1px;
}

h3 {
  font-weight: bold;
  color: #6b9b82;
  letter-spacing: 1px;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  height: 90px;
  width: 100%;
  position: fixed;
  z-index: 2;
}

.logo-image {
  height: 70px;
}

header button {
  background-color: #fff;
  border: none;
  cursor: pointer;
}

header button img {
  height: 20px;
}

/* main section */
.container-desktop {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.img-section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 80px;
  height: 40vh;
  width: 100%;
  text-align: center;
}

h1 {
  color: #fff;
  overflow: hidden;
  white-space: nowrap;
  animation: write 4s steps(40) 1s forwards;
}

@keyframes write {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

.search-section {
  width: 80%;
  margin-top: 2em;
}

.action-buttons {
  display: flex;
}

.search-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  background-color: #fff;
  color: #707070;
  font-weight: bold;
  border-top: rgba(100, 100, 111, 0.2) 1px solid;
  border-left: rgba(100, 100, 111, 0.2) 1px solid;
  border-right: rgba(100, 100, 111, 0.2) 1px solid;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  cursor: pointer;
}

.active-search {
  background-color: #6b9b82;
  color: #fff;
  border: none;
}

.form-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1em;
  border: rgba(100, 100, 111, 0.2) 1px solid;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  width: 80vw;
}

.criteria-container {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.criteria {
  display: flex;
  border: 1.5px solid #6b9b82;
  font-weight: 200;
  appearance: none;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  height: 40px;
  width: 50vw;
  padding-left: 15px;
  cursor: pointer;
}

.criteria:hover,
.criteria:focus {
  border: none;
  background-color: #6b9b82;
  color: #fff;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.search-submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 45px;
  border-radius: 25px;
  font-weight: bold;
  margin-top: 2em;
  border: none;
  color: #fff;
  background-color: #6b9b82;
  cursor: pointer;
}

.services-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
  margin-top: 3em;
  background-color: rgb(240, 240, 240);
  width: 100%;
}

.services-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 50px;
  margin-top: 4em;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
}

.service-image-round-shape {
  display: flex;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 2px solid #6b9b82;
  padding: 1.5em;
}

.service-image {
  height: 30px;
  width: 30px;
}

.services-section:hover .service-image {
  animation: rotate 2s linear;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

.service-description {
  margin-top: 10px;
  letter-spacing: 1px;
  font-weight: 200;
  line-height: 2;
  width: 80%;
}

.houses-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em 8em 2em;
}

.section-description {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.3em 0 3em 0;
  font-weight: 200;
}

.estates-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
}

.estate {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
  max-width: 400px;
  max-height: 460px;
}

.estate:hover {
  transform: scale(1.01);
}

.estate-image {
  height: 230px;
  width: 100%;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.8em 1.5em 1.8em 1.5em;
  min-height: 230px;
  width: 100%;
}

.location {
  display: flex;
  align-items: center;
  gap: 15px;
}

.location-icon {
  height: 20px;
  width: 20px;
}

.location p {
  font-size: small;
  color: #6b9b82;
  font-weight: bold;
}

.horizontal-separator-estate {
  width: 100%;
  margin: 0.7em 0 1.4em 0;
  border: none;
  height: 0.5px;
  background-color: #707070;
}

.estate-details {
  display: flex;
  justify-content: space-between;
}

.detail-line {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.detail-number {
  font-size: medium;
  font-weight: bold;
}

.detail-img {
  height: 28px;
  width: 28px;
}

.detail-img-number {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
}

.detail-title {
  font-weight: 200;
}

.area-detail {
  display: flex;
}

.detail-unit {
  font-size: 10px;
}

.estate-price-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
}

.estate-price {
  font-size: 34px;
  font-family: 'DM Serif Display', serif;
}

.option-button,
.estate-status {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b9b82;
  color: #fff;
  border-radius: 20px;
  padding: 0.5em 1.5em 0.5em 1.5em;
  font-size: 9px;
  height: 20px;
  letter-spacing: 1px;
  font-weight: bold;
}

.option-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.5em;
  gap: 2em;
}

.option-button {
  border: none;
  font-size: 12px;
  height: 40px;
  max-width: 210px;
}

/* Our Team Page */
.team-background {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

/* Footer */
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
  background-size: cover;
  background-position: center;
  padding: 3em 0 3em 0;
}

.social-media-list {
  display: flex;
  column-gap: 10px;
}

.social-media-list img {
  height: 20px;
  width: 20px;
  cursor: pointer;
}

footer hr {
  width: 2em;
  margin: 1em 0 1em 0;
  border: 0.8px solid #fff;
}

.copyright-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
}

.copyright-section p {
  color: #fff;
}

footer ul {
  display: none;
}

/* Menu mobile */
nav.active {
  display: block;
  top: 90px;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgb(240, 240, 240);
  position: fixed;
}

nav.active ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  row-gap: 35px;
}

nav.active a {
  color: #6b9b82;
  font-size: medium;
}

nav.active a:hover {
  color: #707070;
}

nav.active a:focus {
  color: #707070;
  font-weight: bold;
}

nav.active a img {
  display: none;
}

/* Styles for hover and focus interactions */
.social-media-list img:focus,
.social-media-list img:hover,
.logo:focus,
.logo:hover,
header button:focus,
header button:hover {
  transform: scale(1.1);
}

.option-button:focus,
.option-button:hover,
.search-submit-button:focus,
.search-submit-button:hover {
  background-color: #fff;
  color: #6b9b82;
  border: #6b9b82 1px solid;
}

.option-button:focus,
.search-submit-button:focus {
  border: #6b9b82 2px solid;
}

/* Styles for screens from 768px onwards */
@media (min-width: 768px) {
  /* common styles */
  .horizontal-separator-footer,
  header button {
    display: none;
  }

  h2,
  h1 {
    font-size: 50px;
  }

  h3 {
    font-size: 20px;
  }

  /* Header */
  header {
    justify-content: space-evenly;
    height: 80px;
    padding: 0 20px 0 20px;
  }

  .logo {
    padding: 5px;
  }

  /* main section */
  .container-desktop {
    position: relative;
  }

  .estates-list {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
  }

  .criteria-container {
    flex-direction: row;
    justify-content: space-between;
  }

  .img-section {
    position: relative;
    height: 90vh;
  }

  .search-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    margin-top: -15em;
    z-index: 1;
  }

  .search-submit-button {
    height: 55px;
    font-size: small;
  }

  .search-button {
    font-size: small;
    height: 60px;
  }

  .action-buttons {
    gap: 10px;
    width: 300px;
  }

  .form-section {
    padding: 3em 5em 3em 5em;
  }

  .criteria {
    width: 15vw;
    height: 63px;
  }

  .services-section {
    padding-top: 20em;
    padding-bottom: 5em;
    margin-top: -15em;
  }

  .services-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .service-image-round-shape {
    border: 2.5px solid #6b9b82;
    padding: 2em;
  }

  .service-image {
    height: 45px;
    width: 45px;
  }

  .section-description {
    font-size: small;
  }

  .option-buttons {
    flex-direction: row;
    margin-top: 4em;
    gap: 4.5em;
  }

  .option-button {
    min-width: 250px;
    height: 55px;
    font-size: small;
  }

  /* Footer */
  footer {
    padding: 5em 0 5em 0;
  }

  .information-section {
    display: flex;
    column-gap: 50px;
  }

  footer ul {
    display: flex;
    flex-direction: column;
  }

  footer ul li a,
  footer ul li {
    color: #fff;
    font-weight: 200;
    padding: 5px;
  }

  .vertical-separator,
  .vertical-separator-small {
    display: flex;
    width: 1.5px;
    height: 150px;
    background-color: white;
  }

  .information {
    padding: 8px;
  }

  .social-media-list {
    align-items: center;
  }

  .social-media-list img {
    height: 30px;
    width: 30px;
  }

  .copyright-section {
    flex-direction: row;
    column-gap: 20px;
    margin-top: 60px;
  }

  .copyright-section p {
    font-size: small;
  }

  .vertical-separator-small {
    height: 16px;
  }

  /* Menu */
  nav,
  nav ul {
    display: flex;
    align-items: center;
    column-gap: 1px;
    height: 100%;
  }

  nav ul li {
    height: 100%;
    width: 120px;
  }

  nav ul li p,
  nav ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px 0 30px;
    height: 100%;
  }

  nav ul li p:focus,
  nav ul li p:hover,
  nav ul li a:focus,
  nav ul li a:hover {
    color: #fff;
    background-color: #6b9b82;
  }

  nav ul li p:focus img,
  nav ul li p:hover img {
    filter: brightness(0) invert(1);
  }

  nav ul li p:focus img {
    transform: scale(1.1);
  }

  .submenu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    padding: 1.5em 2em 1.5em 2em;
    gap: 1em;
    width: 200%;
    height: max-content;
  }

  .submenu li {
    width: max-content;
  }

  .submenu li a {
    justify-content: left;
    padding: 0;
  }

  .submenu li a:focus,
  .submenu li a:hover {
    color: #6b9b82;
    background-color: #fff;
  }

  .vertical-separator-submenu {
    width: 100%;
    border: none;
    height: 0.5px;
    background-color: #707070;
  }

  /* Styles for hover and focus interactions */
  .information-section ul li a:focus,
  .information-section ul li a:hover {
    font-weight: bold;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Mobile Styles */\n\n/* General styles */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n  color: #707070;\n  font-size: x-small;\n}\n\n.vertical-separator,\n.vertical-separator-small,\nnav {\n  display: none;\n}\n\nh2,\nh1 {\n  font-size: 20px;\n  font-family: 'DM Serif Display', serif;\n  letter-spacing: 1px;\n}\n\nh3 {\n  font-weight: bold;\n  color: #6b9b82;\n  letter-spacing: 1px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 20px;\n  height: 90px;\n  width: 100%;\n  position: fixed;\n  z-index: 2;\n}\n\n.logo-image {\n  height: 70px;\n}\n\nheader button {\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n}\n\nheader button img {\n  height: 20px;\n}\n\n/* main section */\n.container-desktop {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url('assets/resources/images/home_banner.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-top: 80px;\n  height: 40vh;\n  width: 100%;\n  text-align: center;\n}\n\nh1 {\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  animation: write 4s steps(40) 1s forwards;\n}\n\n@keyframes write {\n  from {\n    width: 0;\n  }\n\n  to {\n    width: 100%;\n  }\n}\n\n.search-section {\n  width: 80%;\n  margin-top: 2em;\n}\n\n.action-buttons {\n  display: flex;\n}\n\n.search-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  height: 40px;\n  background-color: #fff;\n  color: #707070;\n  font-weight: bold;\n  border-top: rgba(100, 100, 111, 0.2) 1px solid;\n  border-left: rgba(100, 100, 111, 0.2) 1px solid;\n  border-right: rgba(100, 100, 111, 0.2) 1px solid;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  cursor: pointer;\n}\n\n.active-search {\n  background-color: #6b9b82;\n  color: #fff;\n  border: none;\n}\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  padding: 1em;\n  border: rgba(100, 100, 111, 0.2) 1px solid;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  width: 80vw;\n}\n\n.criteria-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n\n.criteria {\n  display: flex;\n  border: 1.5px solid #6b9b82;\n  font-weight: 200;\n  appearance: none;\n  background-image: url('./assets/resources/images/arrow-down-green.png');\n  background-repeat: no-repeat;\n  background-position: calc(100% - 10px) center;\n  height: 40px;\n  width: 50vw;\n  padding-left: 15px;\n  cursor: pointer;\n}\n\n.criteria:hover,\n.criteria:focus {\n  border: none;\n  background-color: #6b9b82;\n  color: #fff;\n  background-image: url('./assets/resources/images/arrow-down-white.png');\n}\n\n.search-submit-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 180px;\n  height: 45px;\n  border-radius: 25px;\n  font-weight: bold;\n  margin-top: 2em;\n  border: none;\n  color: #fff;\n  background-color: #6b9b82;\n  cursor: pointer;\n}\n\n.services-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3em;\n  margin-top: 3em;\n  background-color: rgb(240, 240, 240);\n  width: 100%;\n}\n\n.services-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  gap: 50px;\n  margin-top: 4em;\n}\n\n.service {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 400px;\n}\n\n.service-image-round-shape {\n  display: flex;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  border: 2px solid #6b9b82;\n  padding: 1.5em;\n}\n\n.service-image {\n  height: 30px;\n  width: 30px;\n}\n\n.services-section:hover .service-image {\n  animation: rotate 2s linear;\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.service-description {\n  margin-top: 10px;\n  letter-spacing: 1px;\n  font-weight: 200;\n  line-height: 2;\n  width: 80%;\n}\n\n.houses-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4em 2em 8em 2em;\n}\n\n.section-description {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  padding: 0.3em 0 3em 0;\n  font-weight: 200;\n}\n\n.estates-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3em;\n}\n\n.estate {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  max-width: 400px;\n  max-height: 460px;\n}\n\n.estate:hover {\n  transform: scale(1.01);\n}\n\n.estate-image {\n  height: 230px;\n  width: 100%;\n}\n\n.details {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1.8em 1.5em 1.8em 1.5em;\n  min-height: 230px;\n  width: 100%;\n}\n\n.location {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.location-icon {\n  height: 20px;\n  width: 20px;\n}\n\n.location p {\n  font-size: small;\n  color: #6b9b82;\n  font-weight: bold;\n}\n\n.horizontal-separator-estate {\n  width: 100%;\n  margin: 0.7em 0 1.4em 0;\n  border: none;\n  height: 0.5px;\n  background-color: #707070;\n}\n\n.estate-details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.detail-line {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.detail-number {\n  font-size: medium;\n  font-weight: bold;\n}\n\n.detail-img {\n  height: 28px;\n  width: 28px;\n}\n\n.detail-img-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 7px;\n}\n\n.detail-title {\n  font-weight: 200;\n}\n\n.area-detail {\n  display: flex;\n}\n\n.detail-unit {\n  font-size: 10px;\n}\n\n.estate-price-status {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.5em;\n}\n\n.estate-price {\n  font-size: 34px;\n  font-family: 'DM Serif Display', serif;\n}\n\n.option-button,\n.estate-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #6b9b82;\n  color: #fff;\n  border-radius: 20px;\n  padding: 0.5em 1.5em 0.5em 1.5em;\n  font-size: 9px;\n  height: 20px;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n\n.option-buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 2.5em;\n  gap: 2em;\n}\n\n.option-button {\n  border: none;\n  font-size: 12px;\n  height: 40px;\n  max-width: 210px;\n}\n\n/* Our Team Page */\n.team-background {\n  background-image: url('./assets/resources/images/team-background.jpg');\n}\n\n/* Footer */\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(./assets/resources/images/footer-background.jpeg);\n  background-size: cover;\n  background-position: center;\n  padding: 3em 0 3em 0;\n}\n\n.social-media-list {\n  display: flex;\n  column-gap: 10px;\n}\n\n.social-media-list img {\n  height: 20px;\n  width: 20px;\n  cursor: pointer;\n}\n\nfooter hr {\n  width: 2em;\n  margin: 1em 0 1em 0;\n  border: 0.8px solid #fff;\n}\n\n.copyright-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 5px;\n}\n\n.copyright-section p {\n  color: #fff;\n}\n\nfooter ul {\n  display: none;\n}\n\n/* Menu mobile */\nnav.active {\n  display: block;\n  top: 90px;\n  left: 0;\n  width: 100%;\n  height: 90%;\n  background-color: rgb(240, 240, 240);\n  position: fixed;\n}\n\nnav.active ul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  row-gap: 35px;\n}\n\nnav.active a {\n  color: #6b9b82;\n  font-size: medium;\n}\n\nnav.active a:hover {\n  color: #707070;\n}\n\nnav.active a:focus {\n  color: #707070;\n  font-weight: bold;\n}\n\nnav.active a img {\n  display: none;\n}\n\n/* Styles for hover and focus interactions */\n.social-media-list img:focus,\n.social-media-list img:hover,\n.logo:focus,\n.logo:hover,\nheader button:focus,\nheader button:hover {\n  transform: scale(1.1);\n}\n\n.option-button:focus,\n.option-button:hover,\n.search-submit-button:focus,\n.search-submit-button:hover {\n  background-color: #fff;\n  color: #6b9b82;\n  border: #6b9b82 1px solid;\n}\n\n.option-button:focus,\n.search-submit-button:focus {\n  border: #6b9b82 2px solid;\n}\n\n/* Styles for screens from 768px onwards */\n@media (min-width: 768px) {\n  /* common styles */\n  .horizontal-separator-footer,\n  header button {\n    display: none;\n  }\n\n  h2,\n  h1 {\n    font-size: 50px;\n  }\n\n  h3 {\n    font-size: 20px;\n  }\n\n  /* Header */\n  header {\n    justify-content: space-evenly;\n    height: 80px;\n    padding: 0 20px 0 20px;\n  }\n\n  .logo {\n    padding: 5px;\n  }\n\n  /* main section */\n  .container-desktop {\n    position: relative;\n  }\n\n  .estates-list {\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 80%;\n  }\n\n  .criteria-container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .img-section {\n    position: relative;\n    height: 90vh;\n  }\n\n  .search-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 300px;\n    margin-top: -15em;\n    z-index: 1;\n  }\n\n  .search-submit-button {\n    height: 55px;\n    font-size: small;\n  }\n\n  .search-button {\n    font-size: small;\n    height: 60px;\n  }\n\n  .action-buttons {\n    gap: 10px;\n    width: 300px;\n  }\n\n  .form-section {\n    padding: 3em 5em 3em 5em;\n  }\n\n  .criteria {\n    width: 15vw;\n    height: 63px;\n  }\n\n  .services-section {\n    padding-top: 20em;\n    padding-bottom: 5em;\n    margin-top: -15em;\n  }\n\n  .services-list {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  .service-image-round-shape {\n    border: 2.5px solid #6b9b82;\n    padding: 2em;\n  }\n\n  .service-image {\n    height: 45px;\n    width: 45px;\n  }\n\n  .section-description {\n    font-size: small;\n  }\n\n  .option-buttons {\n    flex-direction: row;\n    margin-top: 4em;\n    gap: 4.5em;\n  }\n\n  .option-button {\n    min-width: 250px;\n    height: 55px;\n    font-size: small;\n  }\n\n  /* Footer */\n  footer {\n    padding: 5em 0 5em 0;\n  }\n\n  .information-section {\n    display: flex;\n    column-gap: 50px;\n  }\n\n  footer ul {\n    display: flex;\n    flex-direction: column;\n  }\n\n  footer ul li a,\n  footer ul li {\n    color: #fff;\n    font-weight: 200;\n    padding: 5px;\n  }\n\n  .vertical-separator,\n  .vertical-separator-small {\n    display: flex;\n    width: 1.5px;\n    height: 150px;\n    background-color: white;\n  }\n\n  .information {\n    padding: 8px;\n  }\n\n  .social-media-list {\n    align-items: center;\n  }\n\n  .social-media-list img {\n    height: 30px;\n    width: 30px;\n  }\n\n  .copyright-section {\n    flex-direction: row;\n    column-gap: 20px;\n    margin-top: 60px;\n  }\n\n  .copyright-section p {\n    font-size: small;\n  }\n\n  .vertical-separator-small {\n    height: 16px;\n  }\n\n  /* Menu */\n  nav,\n  nav ul {\n    display: flex;\n    align-items: center;\n    column-gap: 1px;\n    height: 100%;\n  }\n\n  nav ul li {\n    height: 100%;\n    width: 120px;\n  }\n\n  nav ul li p,\n  nav ul li a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 30px 0 30px;\n    height: 100%;\n  }\n\n  nav ul li p:focus,\n  nav ul li p:hover,\n  nav ul li a:focus,\n  nav ul li a:hover {\n    color: #fff;\n    background-color: #6b9b82;\n  }\n\n  nav ul li p:focus img,\n  nav ul li p:hover img {\n    filter: brightness(0) invert(1);\n  }\n\n  nav ul li p:focus img {\n    transform: scale(1.1);\n  }\n\n  .submenu {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    background-color: #fff;\n    padding: 1.5em 2em 1.5em 2em;\n    gap: 1em;\n    width: 200%;\n    height: max-content;\n  }\n\n  .submenu li {\n    width: max-content;\n  }\n\n  .submenu li a {\n    justify-content: left;\n    padding: 0;\n  }\n\n  .submenu li a:focus,\n  .submenu li a:hover {\n    color: #6b9b82;\n    background-color: #fff;\n  }\n\n  .vertical-separator-submenu {\n    width: 100%;\n    border: none;\n    height: 0.5px;\n    background-color: #707070;\n  }\n\n  /* Styles for hover and focus interactions */\n  .information-section ul li a:focus,\n  .information-section ul li a:hover {\n    font-weight: bold;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// Menu mobile
const menuButton = document.querySelector('header button');
const menuImg = menuButton.querySelector('img');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  if (menuImg.src.includes('menu.png')) {
    menuImg.src = './assets/resources/images/close.png';
    nav.classList.add('active');
  } else {
    menuImg.src = './assets/resources/images/menu.png';
    nav.classList.remove('active');
  }
  menuButton.blur(); // Remove focus from button
});

// Navigation bar submenu
const dropdownBuy = document.querySelector('.dropdown-buy');
const dropdownRent = document.querySelector('.dropdown-rent');
const submenuBuy = document.querySelector('.submenu-buy');
const submenuRent = document.querySelector('.submenu-rent');

dropdownBuy.addEventListener('click', () => {
  if (submenuBuy.style.display === 'none') {
    submenuBuy.style.display = 'block';
  } else {
    submenuBuy.style.display = 'none';
  }
});

dropdownRent.addEventListener('click', () => {
  if (submenuRent.style.display === 'none') {
    submenuRent.style.display = 'block';
  } else {
    submenuRent.style.display = 'none';
  }
});

/***/ }),

/***/ "./src/assets/resources/images/arrow-down-green.png":
/*!**********************************************************!*\
  !*** ./src/assets/resources/images/arrow-down-green.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bdd7d8322355fdb210b.png";

/***/ }),

/***/ "./src/assets/resources/images/arrow-down-white.png":
/*!**********************************************************!*\
  !*** ./src/assets/resources/images/arrow-down-white.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51107ae3373eae2d2c53.png";

/***/ }),

/***/ "./src/assets/resources/images/footer-background.jpeg":
/*!************************************************************!*\
  !*** ./src/assets/resources/images/footer-background.jpeg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca08b8b5f304f51595a4.jpeg";

/***/ }),

/***/ "./src/assets/resources/images/home_banner.jpeg":
/*!******************************************************!*\
  !*** ./src/assets/resources/images/home_banner.jpeg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "275f664cb32b31ac1a6a.jpeg";

/***/ }),

/***/ "./src/assets/resources/images/team-background.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/resources/images/team-background.jpg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "677ecf314516dae83d2b.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSkFBMkQ7QUFDdkcsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0Qyx1S0FBZ0U7QUFDNUcsNENBQTRDLDZLQUFtRTtBQUMvRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxV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QXFCO0FBQ3JCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9ob21lX2Jhbm5lci5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9hcnJvdy1kb3duLWdyZWVuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvYXJyb3ctZG93bi13aGl0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL3RlYW0tYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Zvb3Rlci1iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBNb2JpbGUgU3R5bGVzICovXG5cbi8qIEdlbmVyYWwgc3R5bGVzICovXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnZlcnRpY2FsLXNlcGFyYXRvcixcbi52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwsXG5uYXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMixcbmgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ0RNIFNlcmlmIERpc3BsYXknLCBzZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2YjliODI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogSGVhZGVyICovXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaGVhZGVyIGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi8qIG1haW4gc2VjdGlvbiAqL1xuLmNvbnRhaW5lci1kZXNrdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBhbmltYXRpb246IHdyaXRlIDRzIHN0ZXBzKDQwKSAxcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyB3cml0ZSB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXRvcDogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZlLXNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMXB4IHNvbGlkO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xuICB3aWR0aDogODB2dztcbn1cblxuLmNyaXRlcmlhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41ZW07XG59XG5cbi5jcml0ZXJpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzZiOWI4MjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxMHB4KSBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDUwdnc7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3JpdGVyaWE6aG92ZXIsXG4uY3JpdGVyaWE6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VydmljZXMtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlcnZpY2VzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDRlbTtcbn1cblxuLnNlcnZpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzZiOWI4MjtcbiAgcGFkZGluZzogMS41ZW07XG59XG5cbi5zZXJ2aWNlLWltYWdlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLnNlcnZpY2VzLXNlY3Rpb246aG92ZXIgLnNlcnZpY2UtaW1hZ2Uge1xuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLnNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmhvdXNlcy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRlbSAyZW0gOGVtIDJlbTtcbn1cblxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuM2VtIDAgM2VtIDA7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5lc3RhdGVzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzZW07XG59XG5cbi5lc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA0NjBweDtcbn1cblxuLmVzdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi5lc3RhdGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMS44ZW0gMS41ZW0gMS44ZW0gMS41ZW07XG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ubG9jYXRpb24taWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5sb2NhdGlvbiBwIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICM2YjliODI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaG9yaXpvbnRhbC1zZXBhcmF0b3ItZXN0YXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC43ZW0gMCAxLjRlbSAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMC41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG59XG5cbi5lc3RhdGUtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRldGFpbC1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4uZGV0YWlsLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRldGFpbC1pbWcge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4uZGV0YWlsLWltZy1udW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG59XG5cbi5kZXRhaWwtdGl0bGUge1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uYXJlYS1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGV0YWlsLXVuaXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5lc3RhdGUtcHJpY2Utc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbn1cblxuLmVzdGF0ZS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC1mYW1pbHk6ICdETSBTZXJpZiBEaXNwbGF5Jywgc2VyaWY7XG59XG5cbi5vcHRpb24tYnV0dG9uLFxuLmVzdGF0ZS1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAuNWVtIDEuNWVtIDAuNWVtIDEuNWVtO1xuICBmb250LXNpemU6IDlweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9wdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIuNWVtO1xuICBnYXA6IDJlbTtcbn1cblxuLm9wdGlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDIxMHB4O1xufVxuXG4vKiBPdXIgVGVhbSBQYWdlICovXG4udGVhbS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4vKiBGb290ZXIgKi9cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZzogM2VtIDAgM2VtIDA7XG59XG5cbi5zb2NpYWwtbWVkaWEtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59XG5cbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvb3RlciBociB7XG4gIHdpZHRoOiAyZW07XG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XG4gIGJvcmRlcjogMC44cHggc29saWQgI2ZmZjtcbn1cblxuLmNvcHlyaWdodC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogNXB4O1xufVxuXG4uY29weXJpZ2h0LXNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5mb290ZXIgdWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBNZW51IG1vYmlsZSAqL1xubmF2LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDkwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbm5hdi5hY3RpdmUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICByb3ctZ2FwOiAzNXB4O1xufVxuXG5uYXYuYWN0aXZlIGEge1xuICBjb2xvcjogIzZiOWI4MjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbm5hdi5hY3RpdmUgYTpob3ZlciB7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5uYXYuYWN0aXZlIGE6Zm9jdXMge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm5hdi5hY3RpdmUgYSBpbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTdHlsZXMgZm9yIGhvdmVyIGFuZCBmb2N1cyBpbnRlcmFjdGlvbnMgKi9cbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWc6Zm9jdXMsXG4uc29jaWFsLW1lZGlhLWxpc3QgaW1nOmhvdmVyLFxuLmxvZ286Zm9jdXMsXG4ubG9nbzpob3ZlcixcbmhlYWRlciBidXR0b246Zm9jdXMsXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ub3B0aW9uLWJ1dHRvbjpmb2N1cyxcbi5vcHRpb24tYnV0dG9uOmhvdmVyLFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmZvY3VzLFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM2YjliODI7XG4gIGJvcmRlcjogIzZiOWI4MiAxcHggc29saWQ7XG59XG5cbi5vcHRpb24tYnV0dG9uOmZvY3VzLFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyOiAjNmI5YjgyIDJweCBzb2xpZDtcbn1cblxuLyogU3R5bGVzIGZvciBzY3JlZW5zIGZyb20gNzY4cHggb253YXJkcyAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC8qIGNvbW1vbiBzdHlsZXMgKi9cbiAgLmhvcml6b250YWwtc2VwYXJhdG9yLWZvb3RlcixcbiAgaGVhZGVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGgyLFxuICBoMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC8qIEhlYWRlciAqL1xuICBoZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC8qIG1haW4gc2VjdGlvbiAqL1xuICAuY29udGFpbmVyLWRlc2t0b3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5lc3RhdGVzLWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuY3JpdGVyaWEtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbWctc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogOTB2aDtcbiAgfVxuXG4gIC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTE1ZW07XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cblxuICAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cblxuICAuZm9ybS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAzZW0gNWVtIDNlbSA1ZW07XG4gIH1cblxuICAuY3JpdGVyaWEge1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIGhlaWdodDogNjNweDtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMjBlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNWVtO1xuICAgIG1hcmdpbi10b3A6IC0xNWVtO1xuICB9XG5cbiAgLnNlcnZpY2VzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCAjNmI5YjgyO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgfVxuXG4gIC5zZXJ2aWNlLWltYWdlIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gIH1cblxuICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgfVxuXG4gIC5vcHRpb24tYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG4gICAgZ2FwOiA0LjVlbTtcbiAgfVxuXG4gIC5vcHRpb24tYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG5cbiAgLyogRm9vdGVyICovXG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogNWVtIDAgNWVtIDA7XG4gIH1cblxuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xuICB9XG5cbiAgZm9vdGVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBmb290ZXIgdWwgbGkgYSxcbiAgZm9vdGVyIHVsIGxpIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3IsXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEuNXB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuaW5mb3JtYXRpb24ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuXG4gIC5jb3B5cmlnaHQtc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cblxuICAuY29weXJpZ2h0LXNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuXG4gIC8qIE1lbnUgKi9cbiAgbmF2LFxuICBuYXYgdWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2x1bW4tZ2FwOiAxcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgbmF2IHVsIGxpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG5cbiAgbmF2IHVsIGxpIHAsXG4gIG5hdiB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBuYXYgdWwgbGkgcDpmb2N1cyxcbiAgbmF2IHVsIGxpIHA6aG92ZXIsXG4gIG5hdiB1bCBsaSBhOmZvY3VzLFxuICBuYXYgdWwgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcbiAgfVxuXG4gIG5hdiB1bCBsaSBwOmZvY3VzIGltZyxcbiAgbmF2IHVsIGxpIHA6aG92ZXIgaW1nIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xuICB9XG5cbiAgbmF2IHVsIGxpIHA6Zm9jdXMgaW1nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cblxuICAuc3VibWVudSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMS41ZW0gMmVtIDEuNWVtIDJlbTtcbiAgICBnYXA6IDFlbTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICB9XG5cbiAgLnN1Ym1lbnUgbGkge1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgfVxuXG4gIC5zdWJtZW51IGxpIGEge1xuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnN1Ym1lbnUgbGkgYTpmb2N1cyxcbiAgLnN1Ym1lbnUgbGkgYTpob3ZlciB7XG4gICAgY29sb3I6ICM2YjliODI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc3VibWVudSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMC41cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgfVxuXG4gIC8qIFN0eWxlcyBmb3IgaG92ZXIgYW5kIGZvY3VzIGludGVyYWN0aW9ucyAqL1xuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB1bCBsaSBhOmZvY3VzLFxuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjs7QUFFbEIsbUJBQW1CO0FBQ25CO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2Ysc0NBQXNDO0VBQ3RDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlEQUFpRTtFQUNqRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixnQkFBZ0I7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QUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQSxTQUFTO0VBQ1Q7O0lBRUUsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBOzs7O0lBSUUsV0FBVztJQUNYLHlCQUF5QjtFQUMzQjs7RUFFQTs7SUFFRSwrQkFBK0I7RUFDakM7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFFBQVE7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxjQUFjO0lBQ2Qsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBLDRDQUE0QztFQUM1Qzs7SUFFRSxpQkFBaUI7RUFDbkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBNb2JpbGUgU3R5bGVzICovXFxuXFxuLyogR2VuZXJhbCBzdHlsZXMgKi9cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzcwNzA3MDtcXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcXG59XFxuXFxuLnZlcnRpY2FsLXNlcGFyYXRvcixcXG4udmVydGljYWwtc2VwYXJhdG9yLXNtYWxsLFxcbm5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5oMixcXG5oMSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LWZhbWlseTogJ0RNIFNlcmlmIERpc3BsYXknLCBzZXJpZjtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM2YjliODI7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5sb2dvLWltYWdlIHtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIG1haW4gc2VjdGlvbiAqL1xcbi5jb250YWluZXItZGVza3RvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmltZy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2hvbWVfYmFubmVyLmpwZWcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYW5pbWF0aW9uOiB3cml0ZSA0cyBzdGVwcyg0MCkgMXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgd3JpdGUge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1zZWN0aW9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcblxcbi5hY3Rpb24tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItdG9wOiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XFxuICBib3JkZXItcmlnaHQ6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlLXNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JtLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlcjogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwIDdweCAyOXB4IDA7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuLmNyaXRlcmlhLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5jcml0ZXJpYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNmI5YjgyO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvYXJyb3ctZG93bi1ncmVlbi5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxMHB4KSBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNTB2dztcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyaXRlcmlhOmhvdmVyLFxcbi5jcml0ZXJpYTpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvYXJyb3ctZG93bi13aGl0ZS5wbmcnKTtcXG59XFxuXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZXJ2aWNlcy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogM2VtO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZXJ2aWNlcy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDUwcHg7XFxuICBtYXJnaW4tdG9wOiA0ZW07XFxufVxcblxcbi5zZXJ2aWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxufVxcblxcbi5zZXJ2aWNlLWltYWdlLXJvdW5kLXNoYXBlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzZiOWI4MjtcXG4gIHBhZGRpbmc6IDEuNWVtO1xcbn1cXG5cXG4uc2VydmljZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnNlcnZpY2VzLXNlY3Rpb246aG92ZXIgLnNlcnZpY2UtaW1hZ2Uge1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5zZXJ2aWNlLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuLmhvdXNlcy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNGVtIDJlbSA4ZW0gMmVtO1xcbn1cXG5cXG4uc2VjdGlvbi1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM2VtIDAgM2VtIDA7XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uZXN0YXRlcy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzZW07XFxufVxcblxcbi5lc3RhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiA0NjBweDtcXG59XFxuXFxuLmVzdGF0ZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xcbn1cXG5cXG4uZXN0YXRlLWltYWdlIHtcXG4gIGhlaWdodDogMjMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuOGVtIDEuNWVtIDEuOGVtIDEuNWVtO1xcbiAgbWluLWhlaWdodDogMjMwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxvY2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4ubG9jYXRpb24taWNvbiB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmxvY2F0aW9uIHAge1xcbiAgZm9udC1zaXplOiBzbWFsbDtcXG4gIGNvbG9yOiAjNmI5YjgyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ob3Jpem9udGFsLXNlcGFyYXRvci1lc3RhdGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAuN2VtIDAgMS40ZW0gMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMC41cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xcbn1cXG5cXG4uZXN0YXRlLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmRldGFpbC1saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5kZXRhaWwtbnVtYmVyIHtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXRhaWwtaW1nIHtcXG4gIGhlaWdodDogMjhweDtcXG4gIHdpZHRoOiAyOHB4O1xcbn1cXG5cXG4uZGV0YWlsLWltZy1udW1iZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogN3B4O1xcbn1cXG5cXG4uZGV0YWlsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxufVxcblxcbi5hcmVhLWRldGFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZGV0YWlsLXVuaXQge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4uZXN0YXRlLXByaWNlLXN0YXR1cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xcbn1cXG5cXG4uZXN0YXRlLXByaWNlIHtcXG4gIGZvbnQtc2l6ZTogMzRweDtcXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2VyaWYgRGlzcGxheScsIHNlcmlmO1xcbn1cXG5cXG4ub3B0aW9uLWJ1dHRvbixcXG4uZXN0YXRlLXN0YXR1cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDAuNWVtIDEuNWVtIDAuNWVtIDEuNWVtO1xcbiAgZm9udC1zaXplOiA5cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5vcHRpb24tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMi41ZW07XFxuICBnYXA6IDJlbTtcXG59XFxuXFxuLm9wdGlvbi1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LXdpZHRoOiAyMTBweDtcXG59XFxuXFxuLyogT3VyIFRlYW0gUGFnZSAqL1xcbi50ZWFtLWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL3RlYW0tYmFja2dyb3VuZC5qcGcnKTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvZm9vdGVyLWJhY2tncm91bmQuanBlZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcGFkZGluZzogM2VtIDAgM2VtIDA7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogMTBweDtcXG59XFxuXFxuLnNvY2lhbC1tZWRpYS1saXN0IGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9vdGVyIGhyIHtcXG4gIHdpZHRoOiAyZW07XFxuICBtYXJnaW46IDFlbSAwIDFlbSAwO1xcbiAgYm9yZGVyOiAwLjhweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uY29weXJpZ2h0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4uY29weXJpZ2h0LXNlY3Rpb24gcCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuZm9vdGVyIHVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIE1lbnUgbW9iaWxlICovXFxubmF2LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogOTBweDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG5cXG5uYXYuYWN0aXZlIHVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcm93LWdhcDogMzVweDtcXG59XFxuXFxubmF2LmFjdGl2ZSBhIHtcXG4gIGNvbG9yOiAjNmI5YjgyO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxufVxcblxcbm5hdi5hY3RpdmUgYTpob3ZlciB7XFxuICBjb2xvcjogIzcwNzA3MDtcXG59XFxuXFxubmF2LmFjdGl2ZSBhOmZvY3VzIHtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbm5hdi5hY3RpdmUgYSBpbWcge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogU3R5bGVzIGZvciBob3ZlciBhbmQgZm9jdXMgaW50ZXJhY3Rpb25zICovXFxuLnNvY2lhbC1tZWRpYS1saXN0IGltZzpmb2N1cyxcXG4uc29jaWFsLW1lZGlhLWxpc3QgaW1nOmhvdmVyLFxcbi5sb2dvOmZvY3VzLFxcbi5sb2dvOmhvdmVyLFxcbmhlYWRlciBidXR0b246Zm9jdXMsXFxuaGVhZGVyIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5vcHRpb24tYnV0dG9uOmZvY3VzLFxcbi5vcHRpb24tYnV0dG9uOmhvdmVyLFxcbi5zZWFyY2gtc3VibWl0LWJ1dHRvbjpmb2N1cyxcXG4uc2VhcmNoLXN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNmI5YjgyO1xcbiAgYm9yZGVyOiAjNmI5YjgyIDFweCBzb2xpZDtcXG59XFxuXFxuLm9wdGlvbi1idXR0b246Zm9jdXMsXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlcjogIzZiOWI4MiAycHggc29saWQ7XFxufVxcblxcbi8qIFN0eWxlcyBmb3Igc2NyZWVucyBmcm9tIDc2OHB4IG9ud2FyZHMgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC8qIGNvbW1vbiBzdHlsZXMgKi9cXG4gIC5ob3Jpem9udGFsLXNlcGFyYXRvci1mb290ZXIsXFxuICBoZWFkZXIgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIGgyLFxcbiAgaDEge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICB9XFxuXFxuICBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gIH1cXG5cXG4gIC8qIEhlYWRlciAqL1xcbiAgaGVhZGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcblxcbiAgLyogbWFpbiBzZWN0aW9uICovXFxuICAuY29udGFpbmVyLWRlc2t0b3Age1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAuZXN0YXRlcy1saXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmNyaXRlcmlhLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5pbWctc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIG1hcmdpbi10b3A6IC0xNWVtO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiA1NXB4O1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICB9XFxuXFxuICAuYWN0aW9uLWJ1dHRvbnMge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG5cXG4gIC5mb3JtLXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiAzZW0gNWVtIDNlbSA1ZW07XFxuICB9XFxuXFxuICAuY3JpdGVyaWEge1xcbiAgICB3aWR0aDogMTV2dztcXG4gICAgaGVpZ2h0OiA2M3B4O1xcbiAgfVxcblxcbiAgLnNlcnZpY2VzLXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMjBlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcXG4gICAgbWFyZ2luLXRvcDogLTE1ZW07XFxuICB9XFxuXFxuICAuc2VydmljZXMtbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gIC5zZXJ2aWNlLWltYWdlLXJvdW5kLXNoYXBlIHtcXG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCAjNmI5YjgyO1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICB9XFxuXFxuICAuc2VydmljZS1pbWFnZSB7XFxuICAgIGhlaWdodDogNDVweDtcXG4gICAgd2lkdGg6IDQ1cHg7XFxuICB9XFxuXFxuICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAub3B0aW9uLWJ1dHRvbnMge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIGdhcDogNC41ZW07XFxuICB9XFxuXFxuICAub3B0aW9uLWJ1dHRvbiB7XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG5cXG4gIC8qIEZvb3RlciAqL1xcbiAgZm9vdGVyIHtcXG4gICAgcGFkZGluZzogNWVtIDAgNWVtIDA7XFxuICB9XFxuXFxuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDUwcHg7XFxuICB9XFxuXFxuICBmb290ZXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgZm9vdGVyIHVsIGxpIGEsXFxuICBmb290ZXIgdWwgbGkge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcblxcbiAgLnZlcnRpY2FsLXNlcGFyYXRvcixcXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMS41cHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmluZm9ybWF0aW9uIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgfVxcblxcbiAgLnNvY2lhbC1tZWRpYS1saXN0IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgfVxcblxcbiAgLmNvcHlyaWdodC1zZWN0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgY29sdW1uLWdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG4gIH1cXG5cXG4gIC5jb3B5cmlnaHQtc2VjdGlvbiBwIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG5cXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICB9XFxuXFxuICAvKiBNZW51ICovXFxuICBuYXYsXFxuICBuYXYgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIG5hdiB1bCBsaSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpIHAsXFxuICBuYXYgdWwgbGkgYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICBuYXYgdWwgbGkgcDpmb2N1cyxcXG4gIG5hdiB1bCBsaSBwOmhvdmVyLFxcbiAgbmF2IHVsIGxpIGE6Zm9jdXMsXFxuICBuYXYgdWwgbGkgYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpIHA6Zm9jdXMgaW1nLFxcbiAgbmF2IHVsIGxpIHA6aG92ZXIgaW1nIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcXG4gIH1cXG5cXG4gIG5hdiB1bCBsaSBwOmZvY3VzIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG5cXG4gIC5zdWJtZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDEuNWVtIDJlbSAxLjVlbSAyZW07XFxuICAgIGdhcDogMWVtO1xcbiAgICB3aWR0aDogMjAwJTtcXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIH1cXG5cXG4gIC5zdWJtZW51IGxpIHtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgfVxcblxcbiAgLnN1Ym1lbnUgbGkgYSB7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5zdWJtZW51IGxpIGE6Zm9jdXMsXFxuICAuc3VibWVudSBsaSBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICM2YjliODI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB9XFxuXFxuICAudmVydGljYWwtc2VwYXJhdG9yLXN1Ym1lbnUge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDAuNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xcbiAgfVxcblxcbiAgLyogU3R5bGVzIGZvciBob3ZlciBhbmQgZm9jdXMgaW50ZXJhY3Rpb25zICovXFxuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB1bCBsaSBhOmZvY3VzLFxcbiAgLmluZm9ybWF0aW9uLXNlY3Rpb24gdWwgbGkgYTpob3ZlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBNZW51IG1vYmlsZVxuY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlciBidXR0b24nKTtcbmNvbnN0IG1lbnVJbWcgPSBtZW51QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2Jyk7XG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChtZW51SW1nLnNyYy5pbmNsdWRlcygnbWVudS5wbmcnKSkge1xuICAgIG1lbnVJbWcuc3JjID0gJy4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvY2xvc2UucG5nJztcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0gZWxzZSB7XG4gICAgbWVudUltZy5zcmMgPSAnLi9hc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9tZW51LnBuZyc7XG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG4gIG1lbnVCdXR0b24uYmx1cigpOyAvLyBSZW1vdmUgZm9jdXMgZnJvbSBidXR0b25cbn0pO1xuXG4vLyBOYXZpZ2F0aW9uIGJhciBzdWJtZW51XG5jb25zdCBkcm9wZG93bkJ1eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1idXknKTtcbmNvbnN0IGRyb3Bkb3duUmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1yZW50Jyk7XG5jb25zdCBzdWJtZW51QnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1lbnUtYnV5Jyk7XG5jb25zdCBzdWJtZW51UmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtZW51LXJlbnQnKTtcblxuZHJvcGRvd25CdXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChzdWJtZW51QnV5LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgIHN1Ym1lbnVCdXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgc3VibWVudUJ1eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTtcblxuZHJvcGRvd25SZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoc3VibWVudVJlbnQuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgc3VibWVudVJlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0gZWxzZSB7XG4gICAgc3VibWVudVJlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9