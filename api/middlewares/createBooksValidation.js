import { booksValidator } from "../validators/index.js";

export const validateBookCreation = async (req, res, next) => {
    const { body } = req;
    try {
        await booksValidator.createBook.validateAsync(body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: "Error al intentar crear un usuario, campos no válidos",
            error,
        });
    }
};
