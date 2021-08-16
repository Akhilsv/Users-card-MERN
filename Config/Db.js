import mongoose from 'mongoose';

const Db = () => {
	mongoose
		.connect('mongodb+srv://akhil:4pm18cs005@cluster0.s2nxc.mongodb.net/webQuark?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() => console.log('Database connected'))
		.catch((error) => console.log(error.message));
};
export default Db;