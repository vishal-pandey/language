(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var language = "";
var concept = "";

window.onload = function () {
	processPath(window.location.hash);
	linkUpdate();
	var langlink = document.querySelectorAll('[data-link-lang]');
	var conceptlink = document.querySelectorAll('[data-link-concept]');

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = langlink[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var llink = _step.value;

			llink.onclick = function (el) {
				// console.log(el.path[0].getAttribute('data-link-lang'))
				language = el.path[0].getAttribute('data-link-lang');
				linkUpdate();
			};
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = conceptlink[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var clink = _step2.value;

			clink.onclick = function (el) {
				// console.log(el.path[0].getAttribute('data-link-concept'))
				concept = el.path[0].getAttribute('data-link-concept');
				linkUpdate();
			};
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
};

function processPath(path) {
	var url = path.split("/");
	if (url[1]) {
		language = url[1];
	}
	if (url[2]) {
		concept = url[2];
	}
}

function linkUpdate() {
	var xx = "/" + language + "/" + concept;
	window.location.hash = xx;
	console.log(xx);
}

},{}]},{},[1]);
