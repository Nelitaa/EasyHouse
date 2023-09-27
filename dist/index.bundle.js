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
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/resources/images/footer-background.jpeg */ "./src/assets/resources/images/footer-background.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
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

.search-submit-button:focus,
.search-submit-button:hover {
  background-color: #fff;
  color: #6b9b82;
  border: #6b9b82 1px solid;
}

.search-submit-button:focus {
  border: #6b9b82 2px solid;
}

.services-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5em;
  margin-top: 3em;
  background-color: rgb(240, 240, 240);
}

.services-list {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 50px;
  margin-top: 3em;
}

.service {
  display: flex;
  flex-direction: column;
  align-items: center;
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

/* Footer */
footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
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

/* Styles for screens from 768px onwards */
@media (min-width: 768px) {
  /* common styles */
  hr,
  header button {
    display: none;
  }

  h2,
  h1 {
    font-size: 50px;
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
    flex-direction: row;
    width: 80%;
  }

  .service-image-round-shape {
    border: 3px solid #6b9b82;
    padding: 2em;
  }

  .service-image {
    height: 50px;
    width: 50px;
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

  /* main section */


  .service_title {
    font-size: 20px;
    font-weight: bold;
    color: #719e86;
    margin-bottom: 20px;
  }

  .service_description {
    font-size: 15px;
    text-align: center;
  }

  .houses_section {
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 2em;
  }

  .state_title {
    margin-top: 0;
    margin-bottom: 0 !important;
  }

  .section_description {
    font-size: 15px;
    font-family: serif;
  }

  .estates_list {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .estate {
    width: 30%;
    height: 400px;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    align-items: center;
    margin-bottom: 3em;
  }

  .estate_image {
    width: 100%;
    height: 60%;
  }

  .details {
    display: flex;
    flex-direction: column;
    padding: 0.5em;
    justify-content: center;
    align-items: center;
    width: 90%;
  }

  .location {
    display: flex;
    border-bottom: 2px solid #719e86;
    padding-top: 1em;
    padding-bottom: 1em;
    width: 100%;
    gap: 20px;
  }

  .location_icon {
    color: #719e86;
  }

  .estate_location {
    font-size: 15px;
    color: #6b9b82;
    font-weight: bold;
  }

  .estate_details {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .detail_line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .detail_number {
    font-size: 15px;
    color: #6b9b82;
    font-weight: bold;
  }

  .detail_img_number {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .detail_title {
    font-size: 12px;
  }

  .detail_unit {
    font-weight: bolder;
    font-size: 7px;
  }

  .area_detail {
    display: flex;
    justify-content: flex-start;
    gap: 2px;
  }

  .detail_value {
    font-size: 15px;
    color: #6b9b82;
    font-weight: bold;
  }

  .estate_price_status {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 1em;
  }

  .estate_price {
    font-size: 25px;
    font-weight: bold;
  }

  .estate_status {
    background-color: #6b9b82;
    border-radius: 20px;
    display: flex;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 1em;
    padding-right: 1em;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .option_buttons {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 3em;
    gap: 3em;
  }

  .option_button {
    background-color: #6b9b82;
    color: white;
    border-radius: 20px;
    font-size: 15px;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 2em;
    padding-right: 2em;
  }

  .option_button:hover {
    background-color: white !important;
    color: #6b9b82 !important;
    box-shadow: #6b9b82 0 7px 29px 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;;AAElB,mBAAmB;AACnB;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,gCAAgC;EAChC,cAAc;EACd,kBAAkB;AACpB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;;EAEE,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yDAAiE;EACjE,sBAAsB;EACtB,4BAA4B;EAC5B,2BAA2B;EAC3B,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,yCAAyC;AAC3C;;AAEA;EACE;IACE,QAAQ;EACV;;EAEA;IACE,WAAW;EACb;AACF;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,8CAA8C;EAC9C,+CAA+C;EAC/C,gDAAgD;EAChD,iDAAiD;EACjD,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,YAAY;EACZ,0CAA0C;EAC1C,iDAAiD;EACjD,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;EAChB,gBAAgB;EAChB,yDAAuE;EACvE,4BAA4B;EAC5B,6CAA6C;EAC7C,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,yDAAuE;AACzE;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,eAAe;AACjB;;AAEA;;EAEE,sBAAsB;EACtB,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA,WAAW;AACX;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,yDAAuE;EACvE,sBAAsB;EACtB,2BAA2B;EAC3B,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA,gBAAgB;AAChB;EACE,cAAc;EACd,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;EACX,oCAAoC;EACpC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA,4CAA4C;AAC5C;;;;;;EAME,qBAAqB;AACvB;;AAEA,0CAA0C;AAC1C;EACE,kBAAkB;EAClB;;IAEE,aAAa;EACf;;EAEA;;IAEE,eAAe;EACjB;;EAEA,WAAW;EACX;IACE,6BAA6B;IAC7B,YAAY;IACZ,sBAAsB;EACxB;;EAEA;IACE,YAAY;EACd;;EAEA,iBAAiB;EACjB;IACE,kBAAkB;EACpB;;EAEA;IACE,mBAAmB;IACnB,8BAA8B;EAChC;;EAEA;IACE,kBAAkB;IAClB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,iBAAiB;IACjB,UAAU;EACZ;;EAEA;IACE,YAAY;IACZ,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;IAChB,YAAY;EACd;;EAEA;IACE,SAAS;IACT,YAAY;EACd;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;;EAEA,WAAW;EACX;IACE,oBAAoB;EACtB;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;;IAEE,WAAW;IACX,gBAAgB;IAChB,YAAY;EACd;;EAEA;;IAEE,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,YAAY;EACd;;EAEA,gBAAgB;EAChB;;IAEE,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,YAAY;EACd;;EAEA;IACE,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,YAAY;EACd;;EAEA;;IAEE,WAAW;IACX,yBAAyB;EAC3B;;EAEA;;IAEE,+BAA+B;EACjC;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,qBAAqB;EACvB;;EAEA,4CAA4C;EAC5C;;IAEE,iBAAiB;EACnB;;EAEA,iBAAiB;;;EAGjB;IACE,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,2BAA2B;EAC7B;;EAEA;IACE,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,eAAe;EACjB;;EAEA;IACE,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,iDAAiD;IACjD,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,WAAW;EACb;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,cAAc;IACd,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,gCAAgC;IAChC,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;IACX,SAAS;EACX;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,eAAe;IACf,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;EACX;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,2BAA2B;IAC3B,QAAQ;EACV;;EAEA;IACE,eAAe;IACf,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,iBAAiB;EACnB;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,kBAAkB;IAClB,QAAQ;EACV;;EAEA;IACE,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,eAAe;IACf,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,kCAAkC;IAClC,yBAAyB;IACzB,gCAAgC;EAClC;AACF","sourcesContent":["/* Mobile Styles */\n\n/* General styles */\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: 'Mukta', sans-serif;\n  color: #707070;\n  font-size: x-small;\n}\n\n.vertical-separator,\n.vertical-separator-small,\nnav {\n  display: none;\n}\n\nh2,\nh1 {\n  font-size: 20px;\n  font-family: 'DM Serif Display', serif;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/* Header */\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 20px;\n  height: 90px;\n  width: 100%;\n  position: fixed;\n  z-index: 2;\n}\n\n.logo-image {\n  height: 70px;\n}\n\nheader button {\n  background-color: #fff;\n  border: none;\n  cursor: pointer;\n}\n\nheader button img {\n  height: 20px;\n}\n\n/* main section */\n.container-desktop {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.img-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url('assets/resources/images/home_banner.jpeg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-top: 80px;\n  height: 40vh;\n  width: 100%;\n  text-align: center;\n}\n\nh1 {\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  animation: write 4s steps(40) 1s forwards;\n}\n\n@keyframes write {\n  from {\n    width: 0;\n  }\n\n  to {\n    width: 100%;\n  }\n}\n\n.search-section {\n  width: 80%;\n  margin-top: 2em;\n}\n\n.action-buttons {\n  display: flex;\n}\n\n.search-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 120px;\n  height: 40px;\n  background-color: #fff;\n  color: #707070;\n  font-weight: bold;\n  border-top: rgba(100, 100, 111, 0.2) 1px solid;\n  border-left: rgba(100, 100, 111, 0.2) 1px solid;\n  border-right: rgba(100, 100, 111, 0.2) 1px solid;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  cursor: pointer;\n}\n\n.active-search {\n  background-color: #6b9b82;\n  color: #fff;\n  border: none;\n}\n\n.form-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  padding: 1em;\n  border: rgba(100, 100, 111, 0.2) 1px solid;\n  box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n  width: 80vw;\n}\n\n.criteria-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5em;\n}\n\n.criteria {\n  display: flex;\n  border: 1.5px solid #6b9b82;\n  font-weight: 200;\n  appearance: none;\n  background-image: url('./assets/resources/images/arrow-down-green.png');\n  background-repeat: no-repeat;\n  background-position: calc(100% - 10px) center;\n  height: 40px;\n  width: 50vw;\n  padding-left: 15px;\n  cursor: pointer;\n}\n\n.criteria:hover,\n.criteria:focus {\n  border: none;\n  background-color: #6b9b82;\n  color: #fff;\n  background-image: url('./assets/resources/images/arrow-down-white.png');\n}\n\n.search-submit-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 180px;\n  height: 45px;\n  border-radius: 25px;\n  font-weight: bold;\n  margin-top: 2em;\n  border: none;\n  color: #fff;\n  background-color: #6b9b82;\n  cursor: pointer;\n}\n\n.search-submit-button:focus,\n.search-submit-button:hover {\n  background-color: #fff;\n  color: #6b9b82;\n  border: #6b9b82 1px solid;\n}\n\n.search-submit-button:focus {\n  border: #6b9b82 2px solid;\n}\n\n.services-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 5em;\n  margin-top: 3em;\n  background-color: rgb(240, 240, 240);\n}\n\n.services-list {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 50px;\n  margin-top: 3em;\n}\n\n.service {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.service-image-round-shape {\n  display: flex;\n  border-radius: 50%;\n  margin-bottom: 20px;\n  border: 2px solid #6b9b82;\n  padding: 1.5em;\n}\n\n.service-image {\n  height: 30px;\n  width: 30px;\n}\n\n/* Footer */\nfooter {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-image: url(./assets/resources/images/footer-background.jpeg);\n  background-size: cover;\n  background-position: center;\n  padding: 3em 0 3em 0;\n}\n\n.social-media-list {\n  display: flex;\n  column-gap: 10px;\n}\n\n.social-media-list img {\n  height: 20px;\n  width: 20px;\n  cursor: pointer;\n}\n\nfooter hr {\n  width: 2em;\n  margin: 1em 0 1em 0;\n  border: 0.8px solid #fff;\n}\n\n.copyright-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  row-gap: 5px;\n}\n\n.copyright-section p {\n  color: #fff;\n}\n\nfooter ul {\n  display: none;\n}\n\n/* Menu mobile */\nnav.active {\n  display: block;\n  top: 90px;\n  left: 0;\n  width: 100%;\n  height: 90%;\n  background-color: rgb(240, 240, 240);\n  position: fixed;\n}\n\nnav.active ul {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  row-gap: 35px;\n}\n\nnav.active a {\n  color: #6b9b82;\n  font-size: medium;\n}\n\nnav.active a:hover {\n  color: #707070;\n}\n\nnav.active a:focus {\n  color: #707070;\n  font-weight: bold;\n}\n\nnav.active a img {\n  display: none;\n}\n\n/* Styles for hover and focus interactions */\n.social-media-list img:focus,\n.social-media-list img:hover,\n.logo:focus,\n.logo:hover,\nheader button:focus,\nheader button:hover {\n  transform: scale(1.1);\n}\n\n/* Styles for screens from 768px onwards */\n@media (min-width: 768px) {\n  /* common styles */\n  hr,\n  header button {\n    display: none;\n  }\n\n  h2,\n  h1 {\n    font-size: 50px;\n  }\n\n  /* Header */\n  header {\n    justify-content: space-evenly;\n    height: 80px;\n    padding: 0 20px 0 20px;\n  }\n\n  .logo {\n    padding: 5px;\n  }\n\n  /* main section */\n  .container-desktop {\n    position: relative;\n  }\n\n  .criteria-container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n\n  .img-section {\n    position: relative;\n    height: 90vh;\n  }\n\n  .search-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 300px;\n    margin-top: -15em;\n    z-index: 1;\n  }\n\n  .search-submit-button {\n    height: 55px;\n    font-size: small;\n  }\n\n  .search-button {\n    font-size: small;\n    height: 60px;\n  }\n\n  .action-buttons {\n    gap: 10px;\n    width: 300px;\n  }\n\n  .form-section {\n    padding: 3em 5em 3em 5em;\n  }\n\n  .criteria {\n    width: 15vw;\n    height: 63px;\n  }\n\n  .services-section {\n    padding-top: 20em;\n    padding-bottom: 5em;\n    margin-top: -15em;\n  }\n\n  .services-list {\n    flex-direction: row;\n    width: 80%;\n  }\n\n  .service-image-round-shape {\n    border: 3px solid #6b9b82;\n    padding: 2em;\n  }\n\n  .service-image {\n    height: 50px;\n    width: 50px;\n  }\n\n  /* Footer */\n  footer {\n    padding: 5em 0 5em 0;\n  }\n\n  .information-section {\n    display: flex;\n    column-gap: 50px;\n  }\n\n  footer ul {\n    display: flex;\n    flex-direction: column;\n  }\n\n  footer ul li a,\n  footer ul li {\n    color: #fff;\n    font-weight: 200;\n    padding: 5px;\n  }\n\n  .vertical-separator,\n  .vertical-separator-small {\n    display: flex;\n    width: 1.5px;\n    height: 150px;\n    background-color: white;\n  }\n\n  .information {\n    padding: 8px;\n  }\n\n  .social-media-list {\n    align-items: center;\n  }\n\n  .social-media-list img {\n    height: 30px;\n    width: 30px;\n  }\n\n  .copyright-section {\n    flex-direction: row;\n    column-gap: 20px;\n    margin-top: 60px;\n  }\n\n  .copyright-section p {\n    font-size: small;\n  }\n\n  .vertical-separator-small {\n    height: 16px;\n  }\n\n  /* Menu mobile */\n  nav,\n  nav ul {\n    display: flex;\n    align-items: center;\n    column-gap: 1px;\n    height: 100%;\n  }\n\n  nav ul li {\n    height: 100%;\n    width: 120px;\n  }\n\n  nav ul li a {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0 30px 0 30px;\n    height: 100%;\n  }\n\n  nav ul li a:focus,\n  nav ul li a:hover {\n    color: #fff;\n    background-color: #6b9b82;\n  }\n\n  nav ul li a:focus img,\n  nav ul li a:hover img {\n    filter: brightness(0) invert(1);\n  }\n\n  nav ul li a:focus {\n    font-weight: bold;\n  }\n\n  nav ul li a:focus img {\n    transform: scale(1.1);\n  }\n\n  /* Styles for hover and focus interactions */\n  .information-section ul li a:focus,\n  .information-section ul li a:hover {\n    font-weight: bold;\n  }\n\n  /* main section */\n\n\n  .service_title {\n    font-size: 20px;\n    font-weight: bold;\n    color: #719e86;\n    margin-bottom: 20px;\n  }\n\n  .service_description {\n    font-size: 15px;\n    text-align: center;\n  }\n\n  .houses_section {\n    width: 90%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 2em;\n  }\n\n  .state_title {\n    margin-top: 0;\n    margin-bottom: 0 !important;\n  }\n\n  .section_description {\n    font-size: 15px;\n    font-family: serif;\n  }\n\n  .estates_list {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  }\n\n  .estate {\n    width: 30%;\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;\n    align-items: center;\n    margin-bottom: 3em;\n  }\n\n  .estate_image {\n    width: 100%;\n    height: 60%;\n  }\n\n  .details {\n    display: flex;\n    flex-direction: column;\n    padding: 0.5em;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n  }\n\n  .location {\n    display: flex;\n    border-bottom: 2px solid #719e86;\n    padding-top: 1em;\n    padding-bottom: 1em;\n    width: 100%;\n    gap: 20px;\n  }\n\n  .location_icon {\n    color: #719e86;\n  }\n\n  .estate_location {\n    font-size: 15px;\n    color: #6b9b82;\n    font-weight: bold;\n  }\n\n  .estate_details {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n  }\n\n  .detail_line {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .detail_number {\n    font-size: 15px;\n    color: #6b9b82;\n    font-weight: bold;\n  }\n\n  .detail_img_number {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n  }\n\n  .detail_title {\n    font-size: 12px;\n  }\n\n  .detail_unit {\n    font-weight: bolder;\n    font-size: 7px;\n  }\n\n  .area_detail {\n    display: flex;\n    justify-content: flex-start;\n    gap: 2px;\n  }\n\n  .detail_value {\n    font-size: 15px;\n    color: #6b9b82;\n    font-weight: bold;\n  }\n\n  .estate_price_status {\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    margin-top: 1em;\n  }\n\n  .estate_price {\n    font-size: 25px;\n    font-weight: bold;\n  }\n\n  .estate_status {\n    background-color: #6b9b82;\n    border-radius: 20px;\n    display: flex;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    padding-left: 1em;\n    padding-right: 1em;\n    justify-content: center;\n    align-items: center;\n    color: white;\n  }\n\n  .option_buttons {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    margin-bottom: 3em;\n    gap: 3em;\n  }\n\n  .option_button {\n    background-color: #6b9b82;\n    color: white;\n    border-radius: 20px;\n    font-size: 15px;\n    padding-top: 0.5em;\n    padding-bottom: 0.5em;\n    padding-left: 2em;\n    padding-right: 2em;\n  }\n\n  .option_button:hover {\n    background-color: white !important;\n    color: #6b9b82 !important;\n    box-shadow: #6b9b82 0 7px 29px 0;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QywrSkFBMkQ7QUFDdkcsNENBQTRDLHlLQUFpRTtBQUM3Ryw0Q0FBNEMseUtBQWlFO0FBQzdHLDRDQUE0Qyw2S0FBbUU7QUFDL0csOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sT0FBTyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sVUFBVSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxPQUFPLFlBQVksT0FBTyxjQUFjLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxh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QTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2JxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImFzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2hvbWVfYmFubmVyLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Fycm93LWRvd24tZ3JlZW4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9hcnJvdy1kb3duLXdoaXRlLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvZm9vdGVyLWJhY2tncm91bmQuanBlZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogTW9iaWxlIFN0eWxlcyAqL1xuXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6ICdNdWt0YScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi52ZXJ0aWNhbC1zZXBhcmF0b3IsXG4udmVydGljYWwtc2VwYXJhdG9yLXNtYWxsLFxubmF2IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaDIsXG5oMSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdETSBTZXJpZiBEaXNwbGF5Jywgc2VyaWY7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogSGVhZGVyICovXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbn1cblxuLmxvZ28taW1hZ2Uge1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbmhlYWRlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaGVhZGVyIGJ1dHRvbiBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi8qIG1haW4gc2VjdGlvbiAqL1xuLmNvbnRhaW5lci1kZXNrdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogODBweDtcbiAgaGVpZ2h0OiA0MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBhbmltYXRpb246IHdyaXRlIDRzIHN0ZXBzKDQwKSAxcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyB3cml0ZSB7XG4gIGZyb20ge1xuICAgIHdpZHRoOiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDJlbTtcbn1cblxuLmFjdGlvbi1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNlYXJjaC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXRvcDogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XG4gIGJvcmRlci1yaWdodDogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcbiAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aXZlLXNlYXJjaCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mb3JtLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMXB4IHNvbGlkO1xuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xuICB3aWR0aDogODB2dztcbn1cblxuLmNyaXRlcmlhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41ZW07XG59XG5cbi5jcml0ZXJpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzZiOWI4MjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxMHB4KSBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDUwdnc7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3JpdGVyaWE6aG92ZXIsXG4uY3JpdGVyaWE6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG59XG5cbi5zZWFyY2gtc3VibWl0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTgwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLXN1Ym1pdC1idXR0b246Zm9jdXMsXG4uc2VhcmNoLXN1Ym1pdC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzZiOWI4MjtcbiAgYm9yZGVyOiAjNmI5YjgyIDFweCBzb2xpZDtcbn1cblxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyOiAjNmI5YjgyIDJweCBzb2xpZDtcbn1cblxuLnNlcnZpY2VzLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNWVtO1xuICBtYXJnaW4tdG9wOiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbn1cblxuLnNlcnZpY2VzLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogNTBweDtcbiAgbWFyZ2luLXRvcDogM2VtO1xufVxuXG4uc2VydmljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZXJ2aWNlLWltYWdlLXJvdW5kLXNoYXBlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNmI5YjgyO1xuICBwYWRkaW5nOiAxLjVlbTtcbn1cblxuLnNlcnZpY2UtaW1hZ2Uge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4vKiBGb290ZXIgKi9cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZzogM2VtIDAgM2VtIDA7XG59XG5cbi5zb2NpYWwtbWVkaWEtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbHVtbi1nYXA6IDEwcHg7XG59XG5cbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvb3RlciBociB7XG4gIHdpZHRoOiAyZW07XG4gIG1hcmdpbjogMWVtIDAgMWVtIDA7XG4gIGJvcmRlcjogMC44cHggc29saWQgI2ZmZjtcbn1cblxuLmNvcHlyaWdodC1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcm93LWdhcDogNXB4O1xufVxuXG4uY29weXJpZ2h0LXNlY3Rpb24gcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5mb290ZXIgdWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBNZW51IG1vYmlsZSAqL1xubmF2LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDkwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbm5hdi5hY3RpdmUgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICByb3ctZ2FwOiAzNXB4O1xufVxuXG5uYXYuYWN0aXZlIGEge1xuICBjb2xvcjogIzZiOWI4MjtcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG5cbm5hdi5hY3RpdmUgYTpob3ZlciB7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG5uYXYuYWN0aXZlIGE6Zm9jdXMge1xuICBjb2xvcjogIzcwNzA3MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm5hdi5hY3RpdmUgYSBpbWcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTdHlsZXMgZm9yIGhvdmVyIGFuZCBmb2N1cyBpbnRlcmFjdGlvbnMgKi9cbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWc6Zm9jdXMsXG4uc29jaWFsLW1lZGlhLWxpc3QgaW1nOmhvdmVyLFxuLmxvZ286Zm9jdXMsXG4ubG9nbzpob3ZlcixcbmhlYWRlciBidXR0b246Zm9jdXMsXG5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4vKiBTdHlsZXMgZm9yIHNjcmVlbnMgZnJvbSA3NjhweCBvbndhcmRzICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLyogY29tbW9uIHN0eWxlcyAqL1xuICBocixcbiAgaGVhZGVyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIGgyLFxuICBoMSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG5cbiAgLyogSGVhZGVyICovXG4gIGhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHBhZGRpbmc6IDAgMjBweCAwIDIwcHg7XG4gIH1cblxuICAubG9nbyB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLyogbWFpbiBzZWN0aW9uICovXG4gIC5jb250YWluZXItZGVza3RvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmNyaXRlcmlhLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuaW1nLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDkwdmg7XG4gIH1cblxuICAuc2VhcmNoLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNWVtO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cblxuICAuc2VhcmNoLXN1Ym1pdC1idXR0b24ge1xuICAgIGhlaWdodDogNTVweDtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG5cbiAgLnNlYXJjaC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgLmFjdGlvbi1idXR0b25zIHtcbiAgICBnYXA6IDEwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG5cbiAgLmZvcm0tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogM2VtIDVlbSAzZW0gNWVtO1xuICB9XG5cbiAgLmNyaXRlcmlhIHtcbiAgICB3aWR0aDogMTV2dztcbiAgICBoZWlnaHQ6IDYzcHg7XG4gIH1cblxuICAuc2VydmljZXMtc2VjdGlvbiB7XG4gICAgcGFkZGluZy10b3A6IDIwZW07XG4gICAgcGFkZGluZy1ib3R0b206IDVlbTtcbiAgICBtYXJnaW4tdG9wOiAtMTVlbTtcbiAgfVxuXG4gIC5zZXJ2aWNlcy1saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzZiOWI4MjtcbiAgICBwYWRkaW5nOiAyZW07XG4gIH1cblxuICAuc2VydmljZS1pbWFnZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLyogRm9vdGVyICovXG4gIGZvb3RlciB7XG4gICAgcGFkZGluZzogNWVtIDAgNWVtIDA7XG4gIH1cblxuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2x1bW4tZ2FwOiA1MHB4O1xuICB9XG5cbiAgZm9vdGVyIHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICBmb290ZXIgdWwgbGkgYSxcbiAgZm9vdGVyIHVsIGxpIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3IsXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEuNXB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAuaW5mb3JtYXRpb24ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxuXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxuXG4gIC5jb3B5cmlnaHQtc2VjdGlvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cblxuICAuY29weXJpZ2h0LXNlY3Rpb24gcCB7XG4gICAgZm9udC1zaXplOiBzbWFsbDtcbiAgfVxuXG4gIC52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwge1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxuXG4gIC8qIE1lbnUgbW9iaWxlICovXG4gIG5hdixcbiAgbmF2IHVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMXB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIG5hdiB1bCBsaSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxuXG4gIG5hdiB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICBuYXYgdWwgbGkgYTpmb2N1cyxcbiAgbmF2IHVsIGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gIH1cblxuICBuYXYgdWwgbGkgYTpmb2N1cyBpbWcsXG4gIG5hdiB1bCBsaSBhOmhvdmVyIGltZyB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgfVxuXG4gIG5hdiB1bCBsaSBhOmZvY3VzIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIG5hdiB1bCBsaSBhOmZvY3VzIGltZyB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB9XG5cbiAgLyogU3R5bGVzIGZvciBob3ZlciBhbmQgZm9jdXMgaW50ZXJhY3Rpb25zICovXG4gIC5pbmZvcm1hdGlvbi1zZWN0aW9uIHVsIGxpIGE6Zm9jdXMsXG4gIC5pbmZvcm1hdGlvbi1zZWN0aW9uIHVsIGxpIGE6aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLyogbWFpbiBzZWN0aW9uICovXG5cblxuICAuc2VydmljZV90aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjNzE5ZTg2O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAuc2VydmljZV9kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5ob3VzZXNfc2VjdGlvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLXRvcDogMmVtO1xuICB9XG5cbiAgLnN0YXRlX3RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWN0aW9uX2Rlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xuICB9XG5cbiAgLmVzdGF0ZXNfbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5lc3RhdGUge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgfVxuXG4gIC5lc3RhdGVfaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAlO1xuICB9XG5cbiAgLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG4gIH1cblxuICAubG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3MTllODY7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGdhcDogMjBweDtcbiAgfVxuXG4gIC5sb2NhdGlvbl9pY29uIHtcbiAgICBjb2xvcjogIzcxOWU4NjtcbiAgfVxuXG4gIC5lc3RhdGVfbG9jYXRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzZiOWI4MjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5lc3RhdGVfZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAuZGV0YWlsX2xpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLmRldGFpbF9udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzZiOWI4MjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5kZXRhaWxfaW1nX251bWJlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIC5kZXRhaWxfdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5kZXRhaWxfdW5pdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDdweDtcbiAgfVxuXG4gIC5hcmVhX2RldGFpbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAycHg7XG4gIH1cblxuICAuZGV0YWlsX3ZhbHVlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICM2YjliODI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAuZXN0YXRlX3ByaWNlX3N0YXR1cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICB9XG5cbiAgLmVzdGF0ZV9wcmljZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLmVzdGF0ZV9zdGF0dXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLm9wdGlvbl9idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgICBnYXA6IDNlbTtcbiAgfVxuXG4gIC5vcHRpb25fYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgIHBhZGRpbmctbGVmdDogMmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcbiAgfVxuXG4gIC5vcHRpb25fYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNmI5YjgyICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogIzZiOWI4MiAwIDdweCAyOXB4IDA7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7O0FBRWxCLG1CQUFtQjtBQUNuQjtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBOzs7RUFHRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFD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RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLGdDQUFnQztFQUNsQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1vYmlsZSBTdHlsZXMgKi9cXG5cXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ011a3RhJywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xcbn1cXG5cXG4udmVydGljYWwtc2VwYXJhdG9yLFxcbi52ZXJ0aWNhbC1zZXBhcmF0b3Itc21hbGwsXFxubmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmgyLFxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2VyaWYgRGlzcGxheScsIHNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbi5sb2dvLWltYWdlIHtcXG4gIGhlaWdodDogNzBweDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9uIGltZyB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi8qIG1haW4gc2VjdGlvbiAqL1xcbi5jb250YWluZXItZGVza3RvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmltZy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2hvbWVfYmFubmVyLmpwZWcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG4gIGhlaWdodDogNDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYW5pbWF0aW9uOiB3cml0ZSA0cyBzdGVwcyg0MCkgMXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgd3JpdGUge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnNlYXJjaC1zZWN0aW9uIHtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcblxcbi5hY3Rpb24tYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEyMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNzA3MDcwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItdG9wOiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMXB4IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQ6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XFxuICBib3JkZXItcmlnaHQ6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAxcHggc29saWQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMCA3cHggMjlweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWN0aXZlLXNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mb3JtLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJvcmRlcjogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDFweCBzb2xpZDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwIDdweCAyOXB4IDA7XFxuICB3aWR0aDogODB2dztcXG59XFxuXFxuLmNyaXRlcmlhLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41ZW07XFxufVxcblxcbi5jcml0ZXJpYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNmI5YjgyO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvYXJyb3ctZG93bi1ncmVlbi5wbmcnKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxMHB4KSBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogNTB2dztcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNyaXRlcmlhOmhvdmVyLFxcbi5jcml0ZXJpYTpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL3Jlc291cmNlcy9pbWFnZXMvYXJyb3ctZG93bi13aGl0ZS5wbmcnKTtcXG59XFxuXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTgwcHg7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWFyY2gtc3VibWl0LWJ1dHRvbjpmb2N1cyxcXG4uc2VhcmNoLXN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjNmI5YjgyO1xcbiAgYm9yZGVyOiAjNmI5YjgyIDFweCBzb2xpZDtcXG59XFxuXFxuLnNlYXJjaC1zdWJtaXQtYnV0dG9uOmZvY3VzIHtcXG4gIGJvcmRlcjogIzZiOWI4MiAycHggc29saWQ7XFxufVxcblxcbi5zZXJ2aWNlcy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNWVtO1xcbiAgbWFyZ2luLXRvcDogM2VtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xcbn1cXG5cXG4uc2VydmljZXMtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogNTBweDtcXG4gIG1hcmdpbi10b3A6IDNlbTtcXG59XFxuXFxuLnNlcnZpY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2VydmljZS1pbWFnZS1yb3VuZC1zaGFwZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM2YjliODI7XFxuICBwYWRkaW5nOiAxLjVlbTtcXG59XFxuXFxuLnNlcnZpY2UtaW1hZ2Uge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL2Zvb3Rlci1iYWNrZ3JvdW5kLmpwZWcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNlbSAwIDNlbSAwO1xcbn1cXG5cXG4uc29jaWFsLW1lZGlhLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDEwcHg7XFxufVxcblxcbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWcge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciBociB7XFxuICB3aWR0aDogMmVtO1xcbiAgbWFyZ2luOiAxZW0gMCAxZW0gMDtcXG4gIGJvcmRlcjogMC44cHggc29saWQgI2ZmZjtcXG59XFxuXFxuLmNvcHlyaWdodC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuLmNvcHlyaWdodC1zZWN0aW9uIHAge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbmZvb3RlciB1bCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBNZW51IG1vYmlsZSAqL1xcbm5hdi5hY3RpdmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDkwcHg7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuXFxubmF2LmFjdGl2ZSB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJvdy1nYXA6IDM1cHg7XFxufVxcblxcbm5hdi5hY3RpdmUgYSB7XFxuICBjb2xvcjogIzZiOWI4MjtcXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xcbn1cXG5cXG5uYXYuYWN0aXZlIGE6aG92ZXIge1xcbiAgY29sb3I6ICM3MDcwNzA7XFxufVxcblxcbm5hdi5hY3RpdmUgYTpmb2N1cyB7XFxuICBjb2xvcjogIzcwNzA3MDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5uYXYuYWN0aXZlIGEgaW1nIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIFN0eWxlcyBmb3IgaG92ZXIgYW5kIGZvY3VzIGludGVyYWN0aW9ucyAqL1xcbi5zb2NpYWwtbWVkaWEtbGlzdCBpbWc6Zm9jdXMsXFxuLnNvY2lhbC1tZWRpYS1saXN0IGltZzpob3ZlcixcXG4ubG9nbzpmb2N1cyxcXG4ubG9nbzpob3ZlcixcXG5oZWFkZXIgYnV0dG9uOmZvY3VzLFxcbmhlYWRlciBidXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4vKiBTdHlsZXMgZm9yIHNjcmVlbnMgZnJvbSA3NjhweCBvbndhcmRzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAvKiBjb21tb24gc3R5bGVzICovXFxuICBocixcXG4gIGhlYWRlciBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgaDIsXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gIH1cXG5cXG4gIC8qIEhlYWRlciAqL1xcbiAgaGVhZGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGhlaWdodDogODBweDtcXG4gICAgcGFkZGluZzogMCAyMHB4IDAgMjBweDtcXG4gIH1cXG5cXG4gIC5sb2dvIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgfVxcblxcbiAgLyogbWFpbiBzZWN0aW9uICovXFxuICAuY29udGFpbmVyLWRlc2t0b3Age1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAuY3JpdGVyaWEtY29udGFpbmVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLmltZy1zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAuc2VhcmNoLXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgbWFyZ2luLXRvcDogLTE1ZW07XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICAuc2VhcmNoLXN1Ym1pdC1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDU1cHg7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICB9XFxuXFxuICAuc2VhcmNoLWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGw7XFxuICAgIGhlaWdodDogNjBweDtcXG4gIH1cXG5cXG4gIC5hY3Rpb24tYnV0dG9ucyB7XFxuICAgIGdhcDogMTBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmZvcm0tc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDNlbSA1ZW0gM2VtIDVlbTtcXG4gIH1cXG5cXG4gIC5jcml0ZXJpYSB7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbiAgICBoZWlnaHQ6IDYzcHg7XFxuICB9XFxuXFxuICAuc2VydmljZXMtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAyMGVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAtMTVlbTtcXG4gIH1cXG5cXG4gIC5zZXJ2aWNlcy1saXN0IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5zZXJ2aWNlLWltYWdlLXJvdW5kLXNoYXBlIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzZiOWI4MjtcXG4gICAgcGFkZGluZzogMmVtO1xcbiAgfVxcblxcbiAgLnNlcnZpY2UtaW1hZ2Uge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgfVxcblxcbiAgLyogRm9vdGVyICovXFxuICBmb290ZXIge1xcbiAgICBwYWRkaW5nOiA1ZW0gMCA1ZW0gMDtcXG4gIH1cXG5cXG4gIC5pbmZvcm1hdGlvbi1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sdW1uLWdhcDogNTBweDtcXG4gIH1cXG5cXG4gIGZvb3RlciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICBmb290ZXIgdWwgbGkgYSxcXG4gIGZvb3RlciB1bCBsaSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICB9XFxuXFxuICAudmVydGljYWwtc2VwYXJhdG9yLFxcbiAgLnZlcnRpY2FsLXNlcGFyYXRvci1zbWFsbCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxLjVweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAuaW5mb3JtYXRpb24ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICB9XFxuXFxuICAuc29jaWFsLW1lZGlhLWxpc3Qge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLnNvY2lhbC1tZWRpYS1saXN0IGltZyB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICB9XFxuXFxuICAuY29weXJpZ2h0LXNlY3Rpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBjb2x1bW4tZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcbiAgfVxcblxcbiAgLmNvcHlyaWdodC1zZWN0aW9uIHAge1xcbiAgICBmb250LXNpemU6IHNtYWxsO1xcbiAgfVxcblxcbiAgLnZlcnRpY2FsLXNlcGFyYXRvci1zbWFsbCB7XFxuICAgIGhlaWdodDogMTZweDtcXG4gIH1cXG5cXG4gIC8qIE1lbnUgbW9iaWxlICovXFxuICBuYXYsXFxuICBuYXYgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2x1bW4tZ2FwOiAxcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIG5hdiB1bCBsaSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAzMHB4IDAgMzBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpIGE6Zm9jdXMsXFxuICBuYXYgdWwgbGkgYTpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI5YjgyO1xcbiAgfVxcblxcbiAgbmF2IHVsIGxpIGE6Zm9jdXMgaW1nLFxcbiAgbmF2IHVsIGxpIGE6aG92ZXIgaW1nIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcXG4gIH1cXG5cXG4gIG5hdiB1bCBsaSBhOmZvY3VzIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICBuYXYgdWwgbGkgYTpmb2N1cyBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuXFxuICAvKiBTdHlsZXMgZm9yIGhvdmVyIGFuZCBmb2N1cyBpbnRlcmFjdGlvbnMgKi9cXG4gIC5pbmZvcm1hdGlvbi1zZWN0aW9uIHVsIGxpIGE6Zm9jdXMsXFxuICAuaW5mb3JtYXRpb24tc2VjdGlvbiB1bCBsaSBhOmhvdmVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAvKiBtYWluIHNlY3Rpb24gKi9cXG5cXG5cXG4gIC5zZXJ2aWNlX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICM3MTllODY7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICB9XFxuXFxuICAuc2VydmljZV9kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvdXNlc19zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy10b3A6IDJlbTtcXG4gIH1cXG5cXG4gIC5zdGF0ZV90aXRsZSB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIC5zZWN0aW9uX2Rlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuICB9XFxuXFxuICAuZXN0YXRlc19saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuXFxuICAuZXN0YXRlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgxMDAsIDEwMCwgMTExLCAwLjIpIDAgN3B4IDI5cHggMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xcbiAgfVxcblxcbiAgLmVzdGF0ZV9pbWFnZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gIH1cXG5cXG4gIC5kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgfVxcblxcbiAgLmxvY2F0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3MTllODY7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBnYXA6IDIwcHg7XFxuICB9XFxuXFxuICAubG9jYXRpb25faWNvbiB7XFxuICAgIGNvbG9yOiAjNzE5ZTg2O1xcbiAgfVxcblxcbiAgLmVzdGF0ZV9sb2NhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICM2YjliODI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLmVzdGF0ZV9kZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG5cXG4gIC5kZXRhaWxfbGluZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmRldGFpbF9udW1iZXIge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIGNvbG9yOiAjNmI5YjgyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5kZXRhaWxfaW1nX251bWJlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAuZGV0YWlsX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgfVxcblxcbiAgLmRldGFpbF91bml0IHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiA3cHg7XFxuICB9XFxuXFxuICAuYXJlYV9kZXRhaWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMnB4O1xcbiAgfVxcblxcbiAgLmRldGFpbF92YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgY29sb3I6ICM2YjliODI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLmVzdGF0ZV9wcmljZV9zdGF0dXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICB9XFxuXFxuICAuZXN0YXRlX3ByaWNlIHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5lc3RhdGVfc3RhdHVzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiOWI4MjtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAub3B0aW9uX2J1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDNlbTtcXG4gICAgZ2FwOiAzZW07XFxuICB9XFxuXFxuICAub3B0aW9uX2J1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjliODI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJlbTtcXG4gIH1cXG5cXG4gIC5vcHRpb25fYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcXG4gICAgY29sb3I6ICM2YjliODIgIWltcG9ydGFudDtcXG4gICAgYm94LXNoYWRvdzogIzZiOWI4MiAwIDdweCAyOXB4IDA7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIE1lbnUgbW9iaWxlXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIGJ1dHRvbicpO1xuY29uc3QgbWVudUltZyA9IG1lbnVCdXR0b24ucXVlcnlTZWxlY3RvcignaW1nJyk7XG5jb25zdCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKTtcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKG1lbnVJbWcuc3JjLmluY2x1ZGVzKCdtZW51LnBuZycpKSB7XG4gICAgbWVudUltZy5zcmMgPSAnLi9hc3NldHMvcmVzb3VyY2VzL2ltYWdlcy9jbG9zZS5wbmcnO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBtZW51SW1nLnNyYyA9ICcuL2Fzc2V0cy9yZXNvdXJjZXMvaW1hZ2VzL21lbnUucG5nJztcbiAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH1cbiAgbWVudUJ1dHRvbi5ibHVyKCk7IC8vIFJlbW92ZSBmb2N1cyBmcm9tIGJ1dHRvblxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9