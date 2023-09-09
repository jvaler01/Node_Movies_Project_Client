const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    try {
        const { username, surname, email, password, bornDate } = req.body;
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({ message: 'El usuario ya existe.'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, surname, email, password: hashedPassword, bornDate});
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado con éxito.' });
    } catch (error) {
        res.status(500).json({ message: 'Error registrando usuario.' });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(401).json({ message: 'Credenciales inválidas.'});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(401).json({ message: 'Credenciales inválidas.'});
        }

        const token = jwt.sign({ userId: user._id }, 'api_movies', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión.' });
    }
}