/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./node_modules/bootstrap/dist/css/bootstrap.min.css?");

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n\n__webpack_require__(/*! ./css/style.scss */ \"./src/css/style.scss\");\n\nvar _config = __webpack_require__(/*! ./js/config */ \"./src/js/config.js\");\n\nvar _ui = __webpack_require__(/*! ./js/ui */ \"./src/js/ui.js\");\n\nvar _router = __webpack_require__(/*! ./js/router */ \"./src/js/router.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar App = function () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.articles = [];\n    this.router = new _router.Router();\n    this.ui = new _ui.Ui(this.router);\n    this.init();\n  }\n\n  _createClass(App, [{\n    key: 'init',\n    value: function init() {\n      var _this = this;\n\n      fetch(_config.CONFIG.api + '/articles', {\n        headers: {\n          'Content-Type': 'application/json'\n        }\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        _this.articles = data;\n        _this.initRouter();\n        _this.ui.generateArticles(data);\n        _this.ui.initNavBtn();\n        _this.router.render(decodeURI(window.location.pathname));\n        _this.ui.initBack();\n      });\n    }\n  }, {\n    key: 'initRouter',\n    value: function initRouter() {\n      this.router.addRoute('', this.ui.renderNewsline.bind(this.ui));\n      this.router.addRoute('404', this.ui.renderErrorPage.bind(this.ui));\n      this.router.addRoute('article', this.ui.renderArticle.bind(this.ui, this.articles));\n      this.router.addRoute('about', this.ui.renderAboutPage.bind(this.ui, this.articles));\n      // ToDo needs calculation\n      this.router.addRoute('search', this.ui.renderSearchPage.bind(this.ui, this.articles));\n    }\n  }]);\n\n  return App;\n}();\n\n// eslint-disable-next-line no-unused-vars\n\n\nvar app = new App();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CONFIG = exports.CONFIG = {\n  api: 'http://localhost:3007',\n  dNone: 'd-none',\n  news: '.news',\n  about: '.about',\n  searchPage: '.search-page',\n  searchPageResults: '.search-page .results',\n  searchNoResult: 'Подходящих документов не найдено.',\n  navSearch: '.form-inline',\n  searchInput: '#search-input',\n  navNewsline: '#nav-newsline',\n  navAbout: '#nav-about',\n  allContent: '.all-content',\n  errorPage: '.error-page',\n  singleNews: '.single-news',\n  articleName: '.single-news .card-header',\n  articleContent: '.single-news .full',\n  articleContentImg: '.single-news .full .img-large',\n  articleBack: '.single-news .back',\n  aboutBack: '.about .back'\n};\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Router = exports.Router = function () {\n  function Router() {\n    var _this = this;\n\n    _classCallCheck(this, Router);\n\n    this.routes = {};\n\n    window.addEventListener('popstate', function () {\n      _this.render(decodeURI(window.location.pathname));\n    });\n  }\n\n  _createClass(Router, [{\n    key: 'addRoute',\n    value: function addRoute(route, action) {\n      this.routes[route] = action;\n    }\n  }, {\n    key: 'render',\n    value: function render(url) {\n      var temp = url.split('/')[1];\n      // eslint-disable-next-line no-unused-expressions\n      this.routes[temp] ? this.routes[temp]() : this.routes['404']();\n    }\n  }]);\n\n  return Router;\n}();\n\n//# sourceURL=webpack:///./src/js/router.js?");

/***/ }),

/***/ "./src/js/ui.js":
/*!**********************!*\
  !*** ./src/js/ui.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Ui = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(/*! ./config */ \"./src/js/config.js\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Ui = exports.Ui = function () {\n  function Ui(router) {\n    _classCallCheck(this, Ui);\n\n    this.router = router;\n    this.errorPage = document.querySelector(_config.CONFIG.errorPage);\n    this.allContent = document.querySelector(_config.CONFIG.allContent);\n    this.about = document.querySelector(_config.CONFIG.about);\n    this.searchPage = document.querySelector(_config.CONFIG.searchPage);\n    this.searchPageResults = document.querySelector(_config.CONFIG.searchPageResults);\n    this.aboutBack = document.querySelector(_config.CONFIG.aboutBack);\n    this.navNewsline = document.querySelector(_config.CONFIG.navNewsline);\n    this.navAbout = document.querySelector(_config.CONFIG.navAbout);\n    this.navSearch = document.querySelector(_config.CONFIG.navSearch);\n    this.searchInput = document.querySelector(_config.CONFIG.searchInput);\n    this.news = document.querySelector(_config.CONFIG.news);\n    this.singleNews = document.querySelector(_config.CONFIG.singleNews);\n    this.articleName = document.querySelector(_config.CONFIG.articleName);\n    this.articleBack = document.querySelector(_config.CONFIG.articleBack);\n    this.articleContent = document.querySelector(_config.CONFIG.articleContent);\n    this.articleContentImg = document.querySelector(_config.CONFIG.articleContentImg);\n    this.templateScript = document.querySelector('#products-template');\n  }\n\n  _createClass(Ui, [{\n    key: 'hideAll',\n    value: function hideAll() {\n      this.searchInput.value = '';\n      this.news.classList.add(_config.CONFIG.dNone);\n      this.singleNews.classList.add(_config.CONFIG.dNone);\n      this.about.classList.add(_config.CONFIG.dNone);\n      this.searchPage.classList.add(_config.CONFIG.dNone);\n    }\n  }, {\n    key: 'handlebarCompile',\n    value: function handlebarCompile(data) {\n      // eslint-disable-next-line no-undef\n      return Handlebars.compile(this.templateScript.innerHTML)(data);\n    }\n  }, {\n    key: 'generateArticles',\n    value: function generateArticles(data) {\n      // hide all first\n      this.hideAll();\n      // compile with handlebar\n      this.news.innerHTML = this.handlebarCompile(data);\n\n      this.news.addEventListener('click', this.btnMore.bind(this));\n    }\n  }, {\n    key: 'btnMore',\n    value: function btnMore(event) {\n      event.preventDefault();\n      if (event.target.classList.contains('btn-more')) {\n        this.articleId = event.target.dataset.more;\n        window.history.pushState(null, null, '/article/' + this.articleId);\n        this.router.render(decodeURI(window.location.pathname));\n      }\n    }\n  }, {\n    key: 'renderNewsline',\n    value: function renderNewsline() {\n      this.allContent.classList.remove(_config.CONFIG.dNone);\n      this.hideAll();\n      this.news.classList.remove(_config.CONFIG.dNone);\n    }\n  }, {\n    key: 'renderAboutPage',\n    value: function renderAboutPage() {\n      this.hideAll();\n      this.about.classList.remove(_config.CONFIG.dNone);\n    }\n  }, {\n    key: 'renderArticle',\n    value: function renderArticle(data) {\n      if (data.length) {\n        var articleId = window.location.pathname.split('/article/')[1].trim();\n        this.news.classList.add(_config.CONFIG.dNone);\n        var article = [].concat(_toConsumableArray(data)).find(function (item) {\n          return String(item.id) === String(articleId);\n        });\n        var isFind = !(article === undefined);\n        // const isFind = !(Object.entries(article).length === 0 && article.constructor === Object);\n        // eslint-disable-next-line no-unused-expressions\n        isFind ? this.renderArticleHtml(article) : this.render404();\n      }\n    }\n  }, {\n    key: 'renderArticleHtml',\n    value: function renderArticleHtml(article) {\n      this.articleName.innerText = article.name;\n      // form img tag\n      this.articleContentImg.setAttribute('src', article.content.img.url);\n      this.articleContentImg.setAttribute('alt', article.content.img.name);\n      // form article content\n      this.articleContent.innerText = article.content.data;\n      this.articleContent.prepend(this.articleContentImg);\n      // go UP & show\n      window.scrollTo(0, 0);\n      this.hideAll();\n      this.singleNews.classList.remove(_config.CONFIG.dNone);\n    }\n  }, {\n    key: 'render404',\n    value: function render404() {\n      window.history.pushState(null, null, '/404');\n      this.router.render(decodeURI(window.location.pathname));\n    }\n  }, {\n    key: 'renderErrorPage',\n    value: function renderErrorPage() {\n      this.allContent.classList.add(_config.CONFIG.dNone);\n      this.errorPage.classList.remove(_config.CONFIG.dNone);\n    }\n  }, {\n    key: 'renderSearchPage',\n    value: function renderSearchPage(articles) {\n      var articlesCopy = articles;\n      this.searchPageResults.innerHTML = '';\n      this.hideAll();\n      var searchValue = decodeURI(window.location.pathname.split('/search/')[1].trim());\n      this.searchResult = articlesCopy.filter(function (item) {\n        return item.name.includes(searchValue);\n      });\n      // render with handlebar\n      if (this.searchResult.length !== undefined && this.searchResult.length !== 0) {\n        this.searchPageResults.innerHTML = this.handlebarCompile(this.searchResult);\n        this.searchPageResults.addEventListener('click', this.btnMore.bind(this));\n      } else {\n        var p = document.createElement('p');\n        p.innerHTML = _config.CONFIG.searchNoResult;\n        this.searchPageResults.append(p);\n      }\n\n      this.searchPage.children[0].children[0].innerText = searchValue;\n      this.searchInput.value = searchValue;\n      this.searchPage.classList.remove(_config.CONFIG.dNone);\n    }\n  }, {\n    key: 'initBack',\n    value: function initBack() {\n      this.articleBack.addEventListener('click', this.backToMain.bind(this));\n      this.aboutBack.addEventListener('click', this.backToMain.bind(this));\n    }\n  }, {\n    key: 'backToMain',\n    value: function backToMain(event) {\n      event.preventDefault();\n      window.history.pushState(null, null, '/');\n      this.router.render(decodeURI(window.location.pathname));\n    }\n  }, {\n    key: 'initNavBtn',\n    value: function initNavBtn() {\n      var _this = this;\n\n      this.navAbout.addEventListener('click', function (event) {\n        event.preventDefault();\n        window.history.pushState(null, null, '/about');\n        _this.router.render(decodeURI(window.location.pathname));\n      });\n      this.navNewsline.addEventListener('click', this.backToMain.bind(this));\n      this.navSearch.addEventListener('submit', function (event) {\n        event.preventDefault();\n        window.history.pushState(null, null, '/search/' + _this.searchInput.value);\n        _this.router.render(decodeURI(window.location.pathname));\n      });\n    }\n  }]);\n\n  return Ui;\n}();\n\n//# sourceURL=webpack:///./src/js/ui.js?");

/***/ })

/******/ });