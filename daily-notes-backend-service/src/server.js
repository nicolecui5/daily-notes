import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import http from 'http';
import noteRoutes from './routes/note';
import { Sequelize } from 'sequelize';
import { sequelize } from './models/note';

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

const app = express();
// Setup database here ...
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/healthcheck', (req, res) =>
  res.status(200).json({
    success: true,
  })
);
app.use('/api/note', noteRoutes);
const PORT = 3001;
app.set('port', PORT);

const ourServer = http.createServer(app);

ourServer.on('error', error => {
  console.log(error);
});
ourServer.on('listening', () => {
  const address = ourServer.address();
  console.log(`server running at ${address.address} ${address.port}`);
});

ourServer.listen(PORT);

export { sequelize };
