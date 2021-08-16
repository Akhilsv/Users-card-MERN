import mongoose from 'mongoose';

const userFile = mongoose.Schema({
	firstName: {
		type: String,
		require: true,
	},
	lastName: {
		type: String,
		require: true,
		
	},
	gender: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
	nationality: {
		type: String,
		require: true,
	},
});
const user = mongoose.model('Users', userFile);

export default user;
