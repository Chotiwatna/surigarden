require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const adminRoutes = require('./modules/admin/admin.routes.js');
const roomRoutes = require('./modules/room/room.routes.js');
const banquetRoutes = require('./modules/banquet/banquet.routes.js');

const reservationRoomRoutes = require('./modules/reservation/room/reservationRoom.routes');
const reservationBanquetRoutes = require('./modules/reservation/banquet/reservationBanquet.routes');

const roomImageRoutes = require('./modules/room/image/roomImage.routes');
const banquetImageRoutes = require('./modules/banquet/image/banquetImage.routes');

const app = express();
const port = process.env.PORT || 8800;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get('/api/ping', (_req, res) => res.json({ message: 'API is working!' }));

app.use('/api', adminRoutes);
app.use('/api', roomRoutes);
app.use('/api', banquetRoutes);

app.use('/api', reservationRoomRoutes);
app.use('/api', reservationBanquetRoutes);

app.use('/api', roomImageRoutes);
app.use('/api', banquetImageRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
