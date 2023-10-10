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

  /* Menu mobile */
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

  nav ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px 0 30px;
    height: 100%;
  }

  nav ul li a:focus,
  nav ul li a:hover {
    color: #fff;
    background-color: #6b9b82;
  }

  nav ul li a:focus img,
  nav ul li a:hover img {
    filter: brightness(0) invert(1);
  }

  nav ul li a:focus {
    font-weight: bold;
  }

  nav ul li a:focus img {
    transform: scale(1.1);
  }

  /* Styles for hover and focus interactions */
  .information-section ul li a:focus,
  .information-section ul li a:hover {
    font-weight: bold;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Mobile Styles */\n\n/* General styles */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n  color: #707070;\n  font-size: x-small;\n}\n\n.vertical-separator,\n.vertical-separator-small,\nnav {\n  display: none;\n}\n\nh2,\nh1 {\n  font-size: 20px;\n  font-family: 'DM Serif Display', serif;\n  letter-spacing: 1px;\n}\n\nh3 {\n  font-weight: bold;\n  color: #6b9b82;\n  letter-spacing: 1px;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 20px;\n  height: 90px;\n  width: 100%;\n  position: fixed;\n  z-index: 2;\n}\n\n.logo-image {\n  height: 70px;\n}\n\nheader button {\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n}\n\nheader button img {\n  height: 20px;\n}\n\n/* main section */\n.container-desktop {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url('assets/resources/images/home_banner.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-top: 80px;\n  height: 40vh;\n  width: 100%;\n  text-align: center;\n}\n\nh1 {\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  animation: write 4s steps(40) 1s forwards;\n}\n\n@keyframes write {\n  from {\n    width: 0;\n  }\n\n  to {\n    width: 100%;\n  }\n}\n\n.search-section {\n  width: 80%;\n  margin-top: 2em;\n}\n\n.action-buttons {\n  display: flex;\n}\n\n.search-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  height: 40px;\n  background-color: #fff;\n  color: #707070;\n  font-weight: bold;\n  border-top: rgba(100, 100, 111, 0.2) 1px solid;\n  border-left: rgba(100, 100, 111, 0.2) 1px solid;\n  border-right: rgba(100, 100, 111, 0.2) 1px solid;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  cursor: pointer;\n}\n\n.active-search {\n  background-color: #6b9b82;\n  color: #fff;\n  border: none;\n}\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  padding: 1em;\n  border: rgba(100, 100, 111, 0.2) 1px solid;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  width: 80vw;\n}\n\n.criteria-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n\n.criteria {\n  display: flex;\n  border: 1.5px solid #6b9b82;\n  font-weight: 200;\n  appearance: none;\n  background-image: url('./assets/resources/images/arrow-down-green.png');\n  background-repeat: no-repeat;\n  background-position: calc(100% - 10px) center;\n  height: 40px;\n  width: 50vw;\n  padding-left: 15px;\n  cursor: pointer;\n}\n\n.criteria:hover,\n.criteria:focus {\n  border: none;\n  background-color: #6b9b82;\n  color: #fff;\n  background-image: url('./assets/resources/images/arrow-down-white.png');\n}\n\n.search-submit-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 180px;\n  height: 45px;\n  border-radius: 25px;\n  font-weight: bold;\n  margin-top: 2em;\n  border: none;\n  color: #fff;\n  background-color: #6b9b82;\n  cursor: pointer;\n}\n\n.services-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3em;\n  margin-top: 3em;\n  background-color: rgb(240, 240, 240);\n  width: 100%;\n}\n\n.services-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  gap: 50px;\n  margin-top: 4em;\n}\n\n.service {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 400px;\n}\n\n.service-image-round-shape {\n  display: flex;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  border: 2px solid #6b9b82;\n  padding: 1.5em;\n}\n\n.service-image {\n  height: 30px;\n  width: 30px;\n}\n\n.services-section:hover .service-image {\n  animation: rotate 2s linear;\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.service-description {\n  margin-top: 10px;\n  letter-spacing: 1px;\n  font-weight: 200;\n  line-height: 2;\n  width: 80%;\n}\n\n.houses-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 4em 2em 8em 2em;\n}\n\n.section-description {\n  display: flex;\n  align-items: center;\n  text-align: center;\n  padding: 0.3em 0 3em 0;\n  font-weight: 200;\n}\n\n.estates-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 3em;\n}\n\n.estate {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  max-width: 400px;\n  max-height: 460px;\n}\n\n.estate:hover {\n  transform: scale(1.01);\n}\n\n.estate-image {\n  height: 230px;\n  width: 100%;\n}\n\n.details {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 1.8em 1.5em 1.8em 1.5em;\n  min-height: 230px;\n  width: 100%;\n}\n\n.location {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.location-icon {\n  height: 20px;\n  width: 20px;\n}\n\n.location p {\n  font-size: small;\n  color: #6b9b82;\n  font-weight: bold;\n}\n\n.horizontal-separator-estate {\n  width: 100%;\n  margin: 0.7em 0 1.4em 0;\n  border: none;\n  height: 0.5px;\n  background-color: #707070;\n}\n\n.estate-details {\n  display: flex;\n  justify-content: space-between;\n}\n\n.detail-line {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n}\n\n.detail-number {\n  font-size: medium;\n  font-weight: bold;\n}\n\n.detail-img {\n  height: 28px;\n  width: 28px;\n}\n\n.detail-img-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 7px;\n}\n\n.detail-title {\n  font-weight: 200;\n}\n\n.area-detail {\n  display: flex;\n}\n\n.detail-unit {\n  font-size: 10px;\n}\n\n.estate-price-status {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 1.5em;\n}\n\n.estate-price {\n  font-size: 34px;\n  font-family: 'DM Serif Display', serif;\n}\n\n.option-button,\n.estate-status {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #6b9b82;\n  color: #fff;\n  border-radius: 20px;\n  padding: 0.5em 1.5em 0.5em 1.5em;\n  font-size: 9px;\n  height: 20px;\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n\n.option-buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 2.5em;\n  gap: 2em;\n}\n\n.option-button {\n  border: none;\n  font-size: 12px;\n  height: 40px;\n  max-width: 210px;\n}\n\n/* Our Team Page */\n.team-background {\n  background-image: url('./assets/resources/images/team-background.jpg');\n}\n\n/* Footer */\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(./assets/resources/images/footer-background.jpeg);\n  background-size: cover;\n  background-position: center;\n  padding: 3em 0 3em 0;\n}\n\n.social-media-list {\n  display: flex;\n  column-gap: 10px;\n}\n\n.social-media-list img {\n  height: 20px;\n  width: 20px;\n  cursor: pointer;\n}\n\nfooter hr {\n  width: 2em;\n  margin: 1em 0 1em 0;\n  border: 0.8px solid #fff;\n}\n\n.copyright-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 5px;\n}\n\n.copyright-section p {\n  color: #fff;\n}\n\nfooter ul {\n  display: none;\n}\n\n/* Menu mobile */\nnav.active {\n  display: block;\n  top: 90px;\n  left: 0;\n  width: 100%;\n  height: 90%;\n  background-color: rgb(240, 240, 240);\n  position: fixed;\n}\n\nnav.active ul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  row-gap: 35px;\n}\n\nnav.active a {\n  color: #6b9b82;\n  font-size: medium;\n}\n\nnav.active a:hover {\n  color: #707070;\n}\n\nnav.active a:focus {\n  color: #707070;\n  font-weight: bold;\n}\n\nnav.active a img {\n  display: none;\n}\n\n/* Styles for hover and focus interactions */\n.social-media-list img:focus,\n.social-media-list img:hover,\n.logo:focus,\n.logo:hover,\nheader button:focus,\nheader button:hover {\n  transform: scale(1.1);\n}\n\n.option-button:focus,\n.option-button:hover,\n.search-submit-button:focus,\n.search-submit-button:hover {\n  background-color: #fff;\n  color: #6b9b82;\n  border: #6b9b82 1px solid;\n}\n\n.option-button:focus,\n.search-submit-button:focus {\n  border: #6b9b82 2px solid;\n}\n\n/* Styles for screens from 768px onwards */\n@media (min-width: 768px) {\n  /* common styles */\n  .horizontal-separator-footer,\n  header button {\n    display: none;\n  }\n\n  h2,\n  h1 {\n    font-size: 50px;\n  }\n\n  h3 {\n    font-size: 20px;\n  }\n\n  /* Header */\n  header {\n    justify-content: space-evenly;\n    height: 80px;\n    padding: 0 20px 0 20px;\n  }\n\n  .logo {\n    padding: 5px;\n  }\n\n  /* main section */\n  .container-desktop {\n    position: relative;\n  }\n\n  .estates-list {\n    flex-direction: row;\n    flex-wrap: wrap;\n    width: 80%;\n  }\n\n  .criteria-container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .img-section {\n    position: relative;\n    height: 90vh;\n  }\n\n  .search-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 300px;\n    margin-top: -15em;\n    z-index: 1;\n  }\n\n  .search-submit-button {\n    height: 55px;\n    font-size: small;\n  }\n\n  .search-button {\n    font-size: small;\n    height: 60px;\n  }\n\n  .action-buttons {\n    gap: 10px;\n    width: 300px;\n  }\n\n  .form-section {\n    padding: 3em 5em 3em 5em;\n  }\n\n  .criteria {\n    width: 15vw;\n    height: 63px;\n  }\n\n  .services-section {\n    padding-top: 20em;\n    padding-bottom: 5em;\n    margin-top: -15em;\n  }\n\n  .services-list {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  .service-image-round-shape {\n    border: 2.5px solid #6b9b82;\n    padding: 2em;\n  }\n\n  .service-image {\n    height: 45px;\n    width: 45px;\n  }\n\n  .section-description {\n    font-size: small;\n  }\n\n  .option-buttons {\n    flex-direction: row;\n    margin-top: 4em;\n    gap: 4.5em;\n  }\n\n  .option-button {\n    min-width: 250px;\n    height: 55px;\n    font-size: small;\n  }\n\n  /* Footer */\n  footer {\n    padding: 5em 0 5em 0;\n  }\n\n  .information-section {\n    display: flex;\n    column-gap: 50px;\n  }\n\n  footer ul {\n    display: flex;\n    flex-direction: column;\n  }\n\n  footer ul li a,\n  footer ul li {\n    color: #fff;\n    font-weight: 200;\n    padding: 5px;\n  }\n\n  .vertical-separator,\n  .vertical-separator-small {\n    display: flex;\n    width: 1.5px;\n    height: 150px;\n    background-color: white;\n  }\n\n  .information {\n    padding: 8px;\n  }\n\n  .social-media-list {\n    align-items: center;\n  }\n\n  .social-media-list img {\n    height: 30px;\n    width: 30px;\n  }\n\n  .copyright-section {\n    flex-direction: row;\n    column-gap: 20px;\n    margin-top: 60px;\n  }\n\n  .copyright-section p {\n    font-size: small;\n  }\n\n  .vertical-separator-small {\n    height: 16px;\n  }\n\n  /* Menu mobile */\n  nav,\n  nav ul {\n    display: flex;\n    align-items: center;\n    column-gap: 1px;\n    height: 100%;\n  }\n\n  nav ul li {\n    height: 100%;\n    width: 120px;\n  }\n\n  nav ul li a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 30px 0 30px;\n    height: 100%;\n  }\n\n  nav ul li a:focus,\n  nav ul li a:hover {\n    color: #fff;\n    background-color: #6b9b82;\n  }\n\n  nav ul li a:focus img,\n  nav ul li a:hover img {\n    filter: brightness(0) invert(1);\n  }\n\n  nav ul li a:focus {\n    font-weight: bold;\n  }\n\n  nav ul li a:focus img {\n    transform: scale(1.1);\n  }\n\n  /* Styles for hover and focus interactions */\n  .information-section ul li a:focus,\n  .information-section ul li a:hover {\n    font-weight: bold;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSkFBMkQ7QUFDdkcsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0Qyx1S0FBZ0U7QUFDNUcsNENBQTRDLDZLQUFtRTtBQUMvRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUss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QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNicUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJhc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9ob21lX2Jhbm5lci5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9hcnJvdy1kb3duLWdyZWVuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvYXJyb3ctZG93bi13aGl0ZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL3RlYW0tYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Zvb3Rlci1iYWNrZ3JvdW5kLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBNb2JpbGUgU3R5bGVzICovXG5cbi8qIEdlbmVyYWwgc3R5bGVzICovXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnZlcnRpY2FsLXNlcGFyYXRvcixcbi52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwsXG5uYXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5oMixcbmgxIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogJ0RNIFNlcmlmIERpc3BsYXknLCBzZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2YjliODI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogSGVhZGVyICovXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaGVhZGVyIGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi8qIG1haW4gc2VjdGlvbiAqL1xuLmNvbnRhaW5lci1kZXNrdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBhbmltYXRpb246IHdyaXRlIDRzIHN0ZXBzKDQwKSAxcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyB3cml0ZSB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXRvcDogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZlLXNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMXB4IHNvbGlkO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xuICB3aWR0aDogODB2dztcbn1cblxuLmNyaXRlcmlhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41ZW07XG59XG5cbi5jcml0ZXJpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzZiOWI4MjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxMHB4KSBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDUwdnc7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3JpdGVyaWE6aG92ZXIsXG4uY3JpdGVyaWE6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VydmljZXMtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzZW07XG4gIG1hcmdpbi10b3A6IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlcnZpY2VzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDRlbTtcbn1cblxuLnNlcnZpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuXG4uc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzZiOWI4MjtcbiAgcGFkZGluZzogMS41ZW07XG59XG5cbi5zZXJ2aWNlLWltYWdlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLnNlcnZpY2VzLXNlY3Rpb246aG92ZXIgLnNlcnZpY2UtaW1hZ2Uge1xuICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLnNlcnZpY2UtZGVzY3JpcHRpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmhvdXNlcy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRlbSAyZW0gOGVtIDJlbTtcbn1cblxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuM2VtIDAgM2VtIDA7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5lc3RhdGVzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzZW07XG59XG5cbi5lc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA0NjBweDtcbn1cblxuLmVzdGF0ZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi5lc3RhdGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMS44ZW0gMS41ZW0gMS44ZW0gMS41ZW07XG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuXG4ubG9jYXRpb24taWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5sb2NhdGlvbiBwIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgY29sb3I6ICM2YjliODI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaG9yaXpvbnRhbC1zZXBhcmF0b3ItZXN0YXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC43ZW0gMCAxLjRlbSAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMC41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG59XG5cbi5lc3RhdGUtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRldGFpbC1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG4uZGV0YWlsLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRldGFpbC1pbWcge1xuICBoZWlnaHQ6IDI4cHg7XG4gIHdpZHRoOiAyOHB4O1xufVxuXG4uZGV0YWlsLWltZy1udW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA3cHg7XG59XG5cbi5kZXRhaWwtdGl0bGUge1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uYXJlYS1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGV0YWlsLXVuaXQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5lc3RhdGUtcHJpY2Utc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbn1cblxuLmVzdGF0ZS1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC1mYW1pbHk6ICdETSBTZXJpZiBEaXNwbGF5Jywgc2VyaWY7XG59XG5cbi5vcHRpb24tYnV0dG9uLFxuLmVzdGF0ZS1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAuNWVtIDEuNWVtIDAuNWVtIDEuNWVtO1xuICBmb250LXNpemU6IDlweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm9wdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIuNWVtO1xuICBnYXA6IDJlbTtcbn1cblxuLm9wdGlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXgtd2lkdGg6IDIxMHB4O1xufVxuXG4vKiBPdXIgVGVhbSBQYWdlICovXG4udGVhbS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xufVxuXG4vKiBGb290ZXIgKi9cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZzogM2VtIDAgM2VtIDA7XG59XG5cbi5zb2NpYWwtbWVkaWEtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59XG5cbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvb3RlciBociB7XG4gIHdpZHRoOiAyZW07XG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XG4gIGJvcmRlcjogMC44cHggc29saWQgI2ZmZjtcbn1cblxuLmNvcHlyaWdodC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogNXB4O1xufVxuXG4uY29weXJpZ2h0LXNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5mb290ZXIgdWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBNZW51IG1vYmlsZSAqL1xubmF2LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDkwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbm5hdi5hY3RpdmUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICByb3ctZ2FwOiAzNXB4O1xufVxuXG5uYXYuYWN0aXZlIGEge1xuICBjb2xvcjogIzZiOWI4MjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbm5hdi5hY3RpdmUgYTpob3ZlciB7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5uYXYuYWN0aXZlIGE6Zm9jdXMge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm5hdi5hY3RpdmUgYSBpbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTdHlsZXMgZm9yIGhvdmVyIGFuZCBmb2N1cyBpbnRlcmFjdGlvbnMgKi9cbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWc6Zm9jdXMsXG4uc29jaWFsLW1lZGlhLWxpc3QgaW1nOmhvdmVyLFxuLmxvZ286Zm9jdXMsXG4ubG9nbzpob3ZlcixcbmhlYWRlciBidXR0b246Zm9jdXMsXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ub3B0aW9uLWJ1dHRvbjpmb2N1cyxcbi5vcHRpb24tYnV0dG9uOmhvdmVyLFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmZvY3VzLFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICM2YjliODI7XG4gIGJvcmRlcjogIzZiOWI4MiAxcHggc29saWQ7XG59XG5cbi5vcHRpb24tYnV0dG9uOmZvY3VzLFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyOiAjNmI5YjgyIDJweCBzb2xpZDtcbn1cblxuLyogU3R5bGVzIGZvciBzY3JlZW5zIGZyb20gNzY4cHggb253YXJkcyAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC8qIGNvbW1vbiBzdHlsZXMgKi9cbiAgLmhvcml6b250YWwtc2VwYXJhdG9yLWZvb3RlcixcbiAgaGVhZGVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGgyLFxuICBoMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG5cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC8qIEhlYWRlciAqL1xuICBoZWFkZXIge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGhlaWdodDogODBweDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xuICB9XG5cbiAgLmxvZ28ge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC8qIG1haW4gc2VjdGlvbiAqL1xuICAuY29udGFpbmVyLWRlc2t0b3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5lc3RhdGVzLWxpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuY3JpdGVyaWEtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5pbWctc2VjdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogOTB2aDtcbiAgfVxuXG4gIC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgbWFyZ2luLXRvcDogLTE1ZW07XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cblxuICAuc2VhcmNoLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAuYWN0aW9uLWJ1dHRvbnMge1xuICAgIGdhcDogMTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gIH1cblxuICAuZm9ybS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAzZW0gNWVtIDNlbSA1ZW07XG4gIH1cblxuICAuY3JpdGVyaWEge1xuICAgIHdpZHRoOiAxNXZ3O1xuICAgIGhlaWdodDogNjNweDtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogMjBlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNWVtO1xuICAgIG1hcmdpbi10b3A6IC0xNWVtO1xuICB9XG5cbiAgLnNlcnZpY2VzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCAjNmI5YjgyO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgfVxuXG4gIC5zZXJ2aWNlLWltYWdlIHtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gIH1cblxuICAuc2VjdGlvbi1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgfVxuXG4gIC5vcHRpb24tYnV0dG9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG4gICAgZ2FwOiA0LjVlbTtcbiAgfVxuXG4gIC5vcHRpb24tYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG5cbiAgLyogRm9vdGVyICovXG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogNWVtIDAgNWVtIDA7XG4gIH1cblxuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xuICB9XG5cbiAgZm9vdGVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBmb290ZXIgdWwgbGkgYSxcbiAgZm9vdGVyIHVsIGxpIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3IsXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEuNXB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuaW5mb3JtYXRpb24ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuXG4gIC5jb3B5cmlnaHQtc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cblxuICAuY29weXJpZ2h0LXNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuXG4gIC8qIE1lbnUgbW9iaWxlICovXG4gIG5hdixcbiAgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIG5hdiB1bCBsaSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxuXG4gIG5hdiB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBuYXYgdWwgbGkgYTpmb2N1cyxcbiAgbmF2IHVsIGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIH1cblxuICBuYXYgdWwgbGkgYTpmb2N1cyBpbWcsXG4gIG5hdiB1bCBsaSBhOmhvdmVyIGltZyB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgfVxuXG4gIG5hdiB1bCBsaSBhOmZvY3VzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIG5hdiB1bCBsaSBhOmZvY3VzIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG5cbiAgLyogU3R5bGVzIGZvciBob3ZlciBhbmQgZm9jdXMgaW50ZXJhY3Rpb25zICovXG4gIC5pbmZvcm1hdGlvbi1zZWN0aW9uIHVsIGxpIGE6Zm9jdXMsXG4gIC5pbmZvcm1hdGlvbi1zZWN0aW9uIHVsIGxpIGE6aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJu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bUJBQW1CO0lBQ25CLGVBQWU7SUFDZixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztFQUVBOztJQUVFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQSw0Q0FBNEM7RUFDNUM7O0lBRUUsaUJBQWlCO0VBQ25CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTW9iaWxlIFN0eWxlcyAqL1xcblxcbi8qIEdlbmVyYWwgc3R5bGVzICovXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnTXVrdGEnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICM3MDcwNzA7XFxuICBmb250LXNpemU6IHgtc21hbGw7XFxufVxcblxcbi52ZXJ0aWNhbC1zZXBhcmF0b3IsXFxuLnZlcnRpY2FsLXNlcGFyYXRvci1zbWFsbCxcXG5uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaDIsXFxuaDEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdETSBTZXJpZiBEaXNwbGF5Jywgc2VyaWY7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjNmI5YjgyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAyO1xcbn1cXG5cXG4ubG9nby1pbWFnZSB7XFxuICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbmhlYWRlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiBtYWluIHNlY3Rpb24gKi9cXG4uY29udGFpbmVyLWRlc2t0b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5pbWctc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdhc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9ob21lX2Jhbm5lci5qcGVnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGFuaW1hdGlvbjogd3JpdGUgNHMgc3RlcHMoNDApIDFzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHdyaXRlIHtcXG4gIGZyb20ge1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtc2VjdGlvbiB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cXG4uYWN0aW9uLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzcwNzA3MDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXRvcDogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcXG4gIGJvcmRlci1sZWZ0OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLXJpZ2h0OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMXB4IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFjdGl2ZS1zZWFyY2gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZm9ybS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3JkZXI6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xcbiAgd2lkdGg6IDgwdnc7XFxufVxcblxcbi5jcml0ZXJpYS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uY3JpdGVyaWEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMS41cHggc29saWQgIzZiOWI4MjtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Fycm93LWRvd24tZ3JlZW4ucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMTBweCkgY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDUwdnc7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jcml0ZXJpYTpob3ZlcixcXG4uY3JpdGVyaWE6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Fycm93LWRvd24td2hpdGUucG5nJyk7XFxufVxcblxcbi5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDE4MHB4O1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VydmljZXMtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNlbTtcXG4gIG1hcmdpbi10b3A6IDNlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VydmljZXMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWFyZ2luLXRvcDogNGVtO1xcbn1cXG5cXG4uc2VydmljZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2YjliODI7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG59XFxuXFxuLnNlcnZpY2UtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5zZXJ2aWNlcy1zZWN0aW9uOmhvdmVyIC5zZXJ2aWNlLWltYWdlIHtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhcjtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4uc2VydmljZS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICBsaW5lLWhlaWdodDogMjtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5ob3VzZXMtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDRlbSAyZW0gOGVtIDJlbTtcXG59XFxuXFxuLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjNlbSAwIDNlbSAwO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLmVzdGF0ZXMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM2VtO1xcbn1cXG5cXG4uZXN0YXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwIDdweCAyOXB4IDA7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgbWF4LWhlaWdodDogNDYwcHg7XFxufVxcblxcbi5lc3RhdGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLmVzdGF0ZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDIzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjhlbSAxLjVlbSAxLjhlbSAxLjVlbTtcXG4gIG1pbi1oZWlnaHQ6IDIzMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5sb2NhdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTVweDtcXG59XFxuXFxuLmxvY2F0aW9uLWljb24ge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5sb2NhdGlvbiBwIHtcXG4gIGZvbnQtc2l6ZTogc21hbGw7XFxuICBjb2xvcjogIzZiOWI4MjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaG9yaXpvbnRhbC1zZXBhcmF0b3ItZXN0YXRlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwLjdlbSAwIDEuNGVtIDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDAuNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcXG59XFxuXFxuLmVzdGF0ZS1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5kZXRhaWwtbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uZGV0YWlsLW51bWJlciB7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGV0YWlsLWltZyB7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICB3aWR0aDogMjhweDtcXG59XFxuXFxuLmRldGFpbC1pbWctbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDdweDtcXG59XFxuXFxuLmRldGFpbC10aXRsZSB7XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4uYXJlYS1kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRldGFpbC11bml0IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLmVzdGF0ZS1wcmljZS1zdGF0dXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxLjVlbTtcXG59XFxuXFxuLmVzdGF0ZS1wcmljZSB7XFxuICBmb250LXNpemU6IDM0cHg7XFxuICBmb250LWZhbWlseTogJ0RNIFNlcmlmIERpc3BsYXknLCBzZXJpZjtcXG59XFxuXFxuLm9wdGlvbi1idXR0b24sXFxuLmVzdGF0ZS1zdGF0dXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAwLjVlbSAxLjVlbSAwLjVlbSAxLjVlbTtcXG4gIGZvbnQtc2l6ZTogOXB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ub3B0aW9uLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIuNWVtO1xcbiAgZ2FwOiAyZW07XFxufVxcblxcbi5vcHRpb24tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIG1heC13aWR0aDogMjEwcHg7XFxufVxcblxcbi8qIE91ciBUZWFtIFBhZ2UgKi9cXG4udGVhbS1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9hc3NldHMvcmVzb3VyY2VzL2ltYWdlcy90ZWFtLWJhY2tncm91bmQuanBnJyk7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Zvb3Rlci1iYWNrZ3JvdW5kLmpwZWcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNlbSAwIDNlbSAwO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciBociB7XFxuICB3aWR0aDogMmVtO1xcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMDtcXG4gIGJvcmRlcjogMC44cHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmNvcHlyaWdodC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuLmNvcHlyaWdodC1zZWN0aW9uIHAge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmZvb3RlciB1bCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBNZW51IG1vYmlsZSAqL1xcbm5hdi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDkwcHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxubmF2LmFjdGl2ZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJvdy1nYXA6IDM1cHg7XFxufVxcblxcbm5hdi5hY3RpdmUgYSB7XFxuICBjb2xvcjogIzZiOWI4MjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG5uYXYuYWN0aXZlIGE6aG92ZXIge1xcbiAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbm5hdi5hY3RpdmUgYTpmb2N1cyB7XFxuICBjb2xvcjogIzcwNzA3MDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5uYXYuYWN0aXZlIGEgaW1nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgaG92ZXIgYW5kIGZvY3VzIGludGVyYWN0aW9ucyAqL1xcbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWc6Zm9jdXMsXFxuLnNvY2lhbC1tZWRpYS1saXN0IGltZzpob3ZlcixcXG4ubG9nbzpmb2N1cyxcXG4ubG9nbzpob3ZlcixcXG5oZWFkZXIgYnV0dG9uOmZvY3VzLFxcbmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ub3B0aW9uLWJ1dHRvbjpmb2N1cyxcXG4ub3B0aW9uLWJ1dHRvbjpob3ZlcixcXG4uc2VhcmNoLXN1Ym1pdC1idXR0b246Zm9jdXMsXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzZiOWI4MjtcXG4gIGJvcmRlcjogIzZiOWI4MiAxcHggc29saWQ7XFxufVxcblxcbi5vcHRpb24tYnV0dG9uOmZvY3VzLFxcbi5zZWFyY2gtc3VibWl0LWJ1dHRvbjpmb2N1cyB7XFxuICBib3JkZXI6ICM2YjliODIgMnB4IHNvbGlkO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHNjcmVlbnMgZnJvbSA3NjhweCBvbndhcmRzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAvKiBjb21tb24gc3R5bGVzICovXFxuICAuaG9yaXpvbnRhbC1zZXBhcmF0b3ItZm9vdGVyLFxcbiAgaGVhZGVyIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBoMixcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgfVxcblxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICB9XFxuXFxuICAvKiBIZWFkZXIgKi9cXG4gIGhlYWRlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG5cXG4gIC8qIG1haW4gc2VjdGlvbiAqL1xcbiAgLmNvbnRhaW5lci1kZXNrdG9wIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLmVzdGF0ZXMtbGlzdCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5jcml0ZXJpYS1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuaW1nLXNlY3Rpb24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMTVlbTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XFxuICAgIGhlaWdodDogNTVweDtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiBzbWFsbDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgfVxcblxcbiAgLmFjdGlvbi1idXR0b25zIHtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuXFxuICAuZm9ybS1zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogM2VtIDVlbSAzZW0gNWVtO1xcbiAgfVxcblxcbiAgLmNyaXRlcmlhIHtcXG4gICAgd2lkdGg6IDE1dnc7XFxuICAgIGhlaWdodDogNjNweDtcXG4gIH1cXG5cXG4gIC5zZXJ2aWNlcy1zZWN0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDIwZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA1ZW07XFxuICAgIG1hcmdpbi10b3A6IC0xNWVtO1xcbiAgfVxcblxcbiAgLnNlcnZpY2VzLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuXFxuICAuc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XFxuICAgIGJvcmRlcjogMi41cHggc29saWQgIzZiOWI4MjtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgfVxcblxcbiAgLnNlcnZpY2UtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIHdpZHRoOiA0NXB4O1xcbiAgfVxcblxcbiAgLnNlY3Rpb24tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLm9wdGlvbi1idXR0b25zIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcbiAgICBnYXA6IDQuNWVtO1xcbiAgfVxcblxcbiAgLm9wdGlvbi1idXR0b24ge1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAvKiBGb290ZXIgKi9cXG4gIGZvb3RlciB7XFxuICAgIHBhZGRpbmc6IDVlbSAwIDVlbSAwO1xcbiAgfVxcblxcbiAgLmluZm9ybWF0aW9uLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xcbiAgfVxcblxcbiAgZm9vdGVyIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIGZvb3RlciB1bCBsaSBhLFxcbiAgZm9vdGVyIHVsIGxpIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gIH1cXG5cXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3IsXFxuICAudmVydGljYWwtc2VwYXJhdG9yLXNtYWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEuNXB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5pbmZvcm1hdGlvbiB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gIH1cXG5cXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuc29jaWFsLW1lZGlhLWxpc3QgaW1nIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gIH1cXG5cXG4gIC5jb3B5cmlnaHQtc2VjdGlvbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGNvbHVtbi1nYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxuICB9XFxuXFxuICAuY29weXJpZ2h0LXNlY3Rpb24gcCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAudmVydGljYWwtc2VwYXJhdG9yLXNtYWxsIHtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgfVxcblxcbiAgLyogTWVudSBtb2JpbGUgKi9cXG4gIG5hdixcXG4gIG5hdiB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDFweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICB9XFxuXFxuICBuYXYgdWwgbGkgYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDMwcHggMCAzMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICBuYXYgdWwgbGkgYTpmb2N1cyxcXG4gIG5hdiB1bCBsaSBhOmhvdmVyIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XFxuICB9XFxuXFxuICBuYXYgdWwgbGkgYTpmb2N1cyBpbWcsXFxuICBuYXYgdWwgbGkgYTpob3ZlciBpbWcge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpIGE6Zm9jdXMge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIG5hdiB1bCBsaSBhOmZvY3VzIGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG5cXG4gIC8qIFN0eWxlcyBmb3IgaG92ZXIgYW5kIGZvY3VzIGludGVyYWN0aW9ucyAqL1xcbiAgLmluZm9ybWF0aW9uLXNlY3Rpb24gdWwgbGkgYTpmb2N1cyxcXG4gIC5pbmZvcm1hdGlvbi1zZWN0aW9uIHVsIGxpIGE6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gTWVudSBtb2JpbGVcbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIgYnV0dG9uJyk7XG5jb25zdCBtZW51SW1nID0gbWVudUJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpO1xuXG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAobWVudUltZy5zcmMuaW5jbHVkZXMoJ21lbnUucG5nJykpIHtcbiAgICBtZW51SW1nLnNyYyA9ICcuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Nsb3NlLnBuZyc7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIG1lbnVJbWcuc3JjID0gJy4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvbWVudS5wbmcnO1xuICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxuICBtZW51QnV0dG9uLmJsdXIoKTsgLy8gUmVtb3ZlIGZvY3VzIGZyb20gYnV0dG9uXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=