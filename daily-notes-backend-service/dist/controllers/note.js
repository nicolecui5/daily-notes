"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getNoteByDate = function getNoteByDate(req, res) {
  var date = req.params.date; //query database

  return res.json({
    message: 'got it'
  });
};

exports.default = getNoteByDate;