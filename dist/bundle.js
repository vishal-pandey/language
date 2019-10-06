(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var language = "";
var concept = "";

window.onload = function () {
	processPath(window.location.hash);
	linkUpdate();

	var xhttp = new XMLHttpRequest();
	xhttp.open('GET', "https://raw.githubusercontent.com/vishal-pandey/language/master/repo/language.json");
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			headMenu(JSON.parse(xhttp.responseText));
			processLink();
		}
	};
	xhttp.send();

	var xhttp1 = new XMLHttpRequest();
	xhttp1.open('GET', "https://raw.githubusercontent.com/vishal-pandey/language/master/repo/concept.json");
	xhttp1.onreadystatechange = function () {
		if (xhttp1.readyState == 4 && xhttp1.status == 200) {
			sideMenu(JSON.parse(xhttp1.responseText));
			processLink();
		}
	};
	xhttp1.send();
};

function processLink() {
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

	linkUpdate();
}

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
	// console.log(xx)
	try {
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = document.querySelectorAll('[data-link-lang]')[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var el = _step3.value;

				el.style = "background-color:white;";
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		document.querySelector('[data-link-lang="' + language + '"]').style = "background-color:lightgrey;";

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = document.querySelectorAll('[data-link-concept]')[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var el1 = _step4.value;

				el1.style = "background-color:white;";
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		document.querySelector('[data-link-concept="' + concept + '"]').style = "background-color:lightgrey;";
	} catch (e) {
		console.log(e);
	}
}

function headMenu(links) {
	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
		for (var _iterator5 = links[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
			var i = _step5.value;

			document.querySelector(".languages").insertAdjacentHTML('beforeend', '<span class="button" data-link-lang="' + i + '">' + i.charAt(0).toUpperCase() + i.slice(1) + '</span>');
		}
	} catch (err) {
		_didIteratorError5 = true;
		_iteratorError5 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion5 && _iterator5.return) {
				_iterator5.return();
			}
		} finally {
			if (_didIteratorError5) {
				throw _iteratorError5;
			}
		}
	}
}

function sideMenu(links) {
	var _iteratorNormalCompletion6 = true;
	var _didIteratorError6 = false;
	var _iteratorError6 = undefined;

	try {
		for (var _iterator6 = links[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
			var i = _step6.value;

			document.querySelector(".sidebar").insertAdjacentHTML('beforeend', '<span class="button" data-link-concept="' + i + '">' + i.charAt(0).toUpperCase() + i.slice(1) + '</span>');
		}
	} catch (err) {
		_didIteratorError6 = true;
		_iteratorError6 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion6 && _iterator6.return) {
				_iterator6.return();
			}
		} finally {
			if (_didIteratorError6) {
				throw _iteratorError6;
			}
		}
	}
}

},{}]},{},[1]);
