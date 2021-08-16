import mongoose from 'mongoose';

export const Db = () => {
	mongoose
		.connect(process.env.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		.then(() => console.log('Database connected'))
		.catch((error) => console.log(error.message));
};
