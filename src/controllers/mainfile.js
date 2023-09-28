const { Sequelize } = require("sequelize");
const bcrypt = require("bcrypt");
const { sequelize } = require("../../config/database");
const generateToken = require("../utils/jwt").generateToken;
const process = require('dotenv').config();
const signUp=require("../models/signup")

module.exports={
    signUp:async(req,res)=>{
        try{
        const { firstName, lastName, email, gender, password, re_enterpassword } = req.body;
        if (password !== re_enterpassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await sequelize.models.signUp.create({
        firstName,
        lastName,
        email,
        gender,
        password: hashedPassword,
        re_enterpassword:hashedPassword
        });

        const token = generateToken(firstName,email);

        res.status(201).json({ message: 'User created successfully', newUser,token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }

    }
}
