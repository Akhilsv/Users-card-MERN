import user from '../Model/Model.js';

export const register = async (req, res) => {
	const { firstName, lastName, gender, age, nationality } = req.body;
	console.log(firstName, lastName, gender, age, nationality);
	try {
		await user
			.create({
				firstName,
				lastName,
				gender,
				age,
				nationality,
			})
			.then((response) => {
				res.send('user added').status(201);
			});
	} catch (error) {
		res.status(500).json({
			sucess: false,
			data: error.message,
		});
		console.log(error);
	}
};
export const users = async (req, res) => {
try {
	const post = await user.find();
	res.json(post);
} catch (error) {
	res.json({ message: error.message });
}
};

export const profile = async (req, res) => {
    const uid = req.params.uid;
    
	try {
		const post = await user.find({ _id: uid });
		res.json(post);
	} catch (error) {
		console.log(error);
	}
}
