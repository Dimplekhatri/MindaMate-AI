const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registration Controller
const register = async (req, res) => {
    const { username, email, password } = req.body;
   console.log("regiter controller");
    try {
        // Basic password validation
        if (password.length < 6) {
            return res.status(400).json({ 
                message: 'Password must be at least 6 characters long',
                success: false 
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'User with this email already exists',
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        console.log('Incoming request:', req.body);
        console.log('New user details:', newUser);

        await newUser.save();
        return res.status(201).json({
            message: 'User registered successfully',
            success: true
        });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({
            message: 'Server error',
            error: error.message // More informative error message
        });
    }
};

// Login Controller
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ 
                message: 'Invalid email or password',
                success: false 
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid email or password',
                success: false
            });
        }

        // Generate JWT Token
        //const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '12h' });
        // const token = (userId) => {
        //     return jwt.sign(
        //         { userId }, // Payload
        //         process.env.JWT_SECRET, // Secret Key
        //         { expiresIn: '7d' } // Token expires in 1 hour
        //     );
        // };
        const generateToken = (userId) => {
            return jwt.sign(
                { userId }, // Payload
                process.env.JWT_SECRET, // Secret Key
                { expiresIn: '7d' } // Token expires in 7 days
            );
        };
        
        // Call the function to generate the token
        const token = generateToken(user._id);
        
        return res.status(200).json({ 
            message: 'Login successful',token,
            success: true
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ 
            message: 'Server error',
            error: error.message // More informative error message
        });
    }
};

// Get Profile Controller
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select('-password'); // Exclude the password from the response
        if (!user) {
            return res.status(404).json({ 
                message: 'User not found',
                success: false
            });
        }

        return res.status(200).json({ 
            user, 
            success: true 
        });
    } catch (error) {
        console.error('Error fetching user profile:', error);
        return res.status(500).json({ 
            message: 'Server error',
            error: error.message
        });
    }
};

module.exports = { register, login, getProfile };
