"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteNoteByDate = exports.updateNoteByDate = exports.getNoteByDate = void 0;

var _note = _interopRequireDefault(require("../models/note"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ACCEPTED_DATE_FORMAT = 'YYYY-MM-DD';

const getNoteByDate = (req, res) => {
  const {
    year,
    month,
    day
  } = req.params;
  const date = (0, _moment.default)(`${year}-${month}-${day}`).format(ACCEPTED_DATE_FORMAT);
  console.log(date);

  _note.default.sync({
    force: false
  }).then(() => {
    _note.default.findOne({
      where: {
        date
      }
    }).then(note => {
      res.status(200).json({
        note
      });
    }).catch(err => {
      res.status(400).json({
        err
      });
    });
  });
};

exports.getNoteByDate = getNoteByDate;

const updateNoteByDate = (req, res) => {
  const text = req.body.text;
  const {
    year,
    month,
    day
  } = req.params;
  const date = (0, _moment.default)(`${year}-${month}-${day}`).format(ACCEPTED_DATE_FORMAT); // Validate date

  if ((0, _moment.default)(date) < (0, _moment.default)('2010-01-01')) {
    return res.status(400).json({
      err: 'Invalid date.'
    });
  }

  _note.default.sync({
    force: false
  }).then(() => {
    _note.default.upsert({
      text,
      date
    }, {
      where: {
        date
      }
    }).then(() => {
      res.status(200).end();
    }).catch(err => {
      console.log(err);
      res.status(400).json({
        err
      });
    });
  });
};

exports.updateNoteByDate = updateNoteByDate;

const deleteNoteByDate = (req, res) => {
  const {
    year,
    month,
    day
  } = req.params;
  const date = (0, _moment.default)(`${year}-${month}-${day}`).format(ACCEPTED_DATE_FORMAT);

  _note.default.sync({
    force: false
  }).then(() => {
    _note.default.destroy({
      where: {
        date
      }
    }).then(() => {
      res.status(200).end();
    }).catch(err => {
      res.status(400).json({
        err
      });
    });
  });
};

exports.deleteNoteByDate = deleteNoteByDate;