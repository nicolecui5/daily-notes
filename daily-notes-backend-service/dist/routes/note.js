"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _note = _interopRequireDefault(require("../controllers/note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
exports.default = router;
router.get('/getNotebyDate/:date', _note.default);