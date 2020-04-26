"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "sequelize", {
  enumerable: true,
  get: function () {
    return _note2.sequelize;
  }
});

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _http = _interopRequireDefault(require("http"));

var _note = _interopRequireDefault(require("./routes/note"));

var _sequelize = require("sequelize");

var _note2 = require("./models/note");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const sequelize = new Sequelize('postgres', 'root', 'root', {
//   dialect: 'postgres',
// });
// export default sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
const app = (0, _express.default)(); // Setup database here ...

app.use(_bodyParser.default.urlencoded({
  extended: false
}));
app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use('/healthcheck', (req, res) => res.status(200).json({
  success: true
}));
app.use('/api/note', _note.default);
const PORT = 3001;
app.set('port', PORT);

const ourServer = _http.default.createServer(app);

ourServer.on('error', error => {
  console.log(error);
});
ourServer.on('listening', () => {
  const address = ourServer.address();
  console.log(`server running at ${address.address} ${address.port}`);
});
ourServer.listen(PORT);