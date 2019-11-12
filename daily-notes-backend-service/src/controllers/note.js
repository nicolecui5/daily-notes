const getNoteByDate = (req, res) => {
  const date = req.params.date;
  //query database
  return res.json({
    message: 'got it',
  });
};
export { getNoteByDate as default };
