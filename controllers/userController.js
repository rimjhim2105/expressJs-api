import User from '../models/userSchema.js';

class UserController{
    static async createUser(req, res){
        const {name, email} = req.body;
        if(!name || !email){
            return res.status(400).json({message: "All fields are required"})
        }
        const created = await User.create({
            name,
            email
        })
        res.status(201).json(created)
        await created.save();
    }
}

export default UserController;