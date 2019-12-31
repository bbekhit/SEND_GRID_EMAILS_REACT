require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');

// db
mongoose
	.connect(process.env.DATABASE, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	})
	.then(() => console.log('DB connected'));

// middlewares
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
// cors
if (process.env.NODE_ENV === 'development') {
	app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/auth', contactRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on prot ${port}`));
