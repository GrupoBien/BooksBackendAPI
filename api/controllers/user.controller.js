import User from "../models/User.js";

const createUser = async (req, res) => {
    const { nombre, fecha_de_nacimiento, mail, nombre_app } = req.body;
    try {
        const createdUser = new User({ nombre, fecha_de_nacimiento, mail, nombre_app });
        await createdUser.save();
        return res.json({ 
            user: createdUser
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
};

const deleteUserById = async (req, res) => {
    const { id } = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if(!deletedUser) return res.status(404).json({ error: 'Could not delete the user with id ' + id });

        return res.json({ 
            user: deletedUser
        })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { nombre, nombre_app } = req.body;
    const updateData = {};
    if(!nombre && nombre_app) return res.json({ error: 'You should update a property' });

    if(nombre) updateData.nombre = nombre;
    if(nombre_app) updateData.nombre_app = nombre_app;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, updateData);
        return res.json({
            user: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params
    try {
        const userById = await User.findById(id);
        if(!userById) return res.status(404).json({ error: 'Could not find the user with id ' + id });

        return res.json({ 
            user: userById
        })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        return res.json({ 
            users
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
};

export { 
    createUser,
    deleteUserById,
    getUserById,
    getUsers,
    updateUserById,
};


