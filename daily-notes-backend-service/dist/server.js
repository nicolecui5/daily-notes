"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _http = _interopRequireDefault(require("http"));

var _note = _interopRequireDefault(require("./routes/note"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)(); // Setup database here ...

app.use(_bodyParser.default.json());
app.use((0, _cors.default)());
app.use('/healthcheck', function (req, res) {
  return res.status(200).json({
    success: true
  });
});
app.use('/api/note', _note.default);
var PORT = 3001;
app.set('port', PORT);

var ourServer = _http.default.createServer(app);

ourServer.on('error', function (error) {
  console.log(error);
});
ourServer.on('listening', function () {
  var address = ourServer.address();
  console.log("server running at ".concat(address.address, " ").concat(address.port));
});
ourServer.listen(PORT);