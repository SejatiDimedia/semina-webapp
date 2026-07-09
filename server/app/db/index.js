const mongoose = require('mongoose');
const { urlDb } = require('../config');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(urlDb, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log(`Mongodb connected : ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error : ${error.message}`);
		process.exit(1);
	}

}

module.exports = connectDB;