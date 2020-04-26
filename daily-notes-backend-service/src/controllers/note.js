import Note from '../models/note';

import moment from 'moment';
const ACCEPTED_DATE_FORMAT = 'YYYY-MM-DD';

const getNoteByDate = (req, res) => {
  const { year, month, day } = req.params;
  const date = moment(`${year}-${month}-${day}`).format(ACCEPTED_DATE_FORMAT);
  console.log(date);

  Note.sync({ force: false }).then(() => {
    Note.findOne({
      where: {
        date,
      },
    })
      .then(note => {
        res.status(200).json({
          note,
        });
      })
      .catch(err => {
        res.status(400).json({
          err,
        });
      });
  });
};
const updateNoteByDate = (req, res) => {
  const text = req.body.text;
  const { year, month, day } = req.params;
  const date = moment(`${year}-${month}-${day}`).format(ACCEPTED_DATE_FORMAT);
  // Validate date
  if (moment(date) < moment('2010-01-01')) {
    return res.status(400).json({
      err: 'Invalid date.',
    });
  }

  Note.sync({ force: false }).then(() => {
    Note.upsert(
      {
        text,
        date,
      },
      {
        where: {
          date,
        },
      }
    )

      .then(() => {
        res.status(200).end();
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({ err });
      });
  });
};

const deleteNoteByDate = (req, res) => {
  const { year, month, day } = req.params;
  const date = moment(`${year}-${month}-${day}`).format(ACCEPTED_DATE_FORMAT);

  Note.sync({ force: false }).then(() => {
    Note.destroy({
      where: {
        date,
      },
    })
      .then(() => {
        res.status(200).end();
      })
      .catch(err => {
        res.status(400).json({
          err,
        });
      });
  });
};
export { getNoteByDate, updateNoteByDate, deleteNoteByDate };
