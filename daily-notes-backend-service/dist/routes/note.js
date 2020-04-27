"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _note = require("../controllers/note");

const router = (0, _express.Router)();
exports.default = router;
router.get('/getNoteByDate/:year-:month-:day', _note.getNoteByDate);
router.put('/putNoteByDate/:year-:month-:day', _note.updateNoteByDate); // router.delete();