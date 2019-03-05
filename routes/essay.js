const express = require('express');
const essay = express.Router();
const cors = require('cors')

const bcrypt = require('bcrypt')

const Essay = require("../models/Essay")
essay.use(cors())

process.env.SECRET_KEY = 'secret'

essay.post('/profile', (req, res) => {
    // const today = new Date()
    const userEssay ={

    }
    app.post("/profile", isLogedIn, upload.single('image'), function (req, res) {
        let address = '/uploads/' + req.file.originalname
    
        let essay = new article({
            title: req.body.titr,
            description: req.body.descript,
            author: req.user.userName,
            Date: req.body.date,
            shorttext: req.body.shortext,
            image: address
    
        });
        module.exports = essay