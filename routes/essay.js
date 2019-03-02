const express = require('express');
const users = express.Router();
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require("../models/Essay")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/upload', (req, res) => {
    const today = new Date()
    const userEssay ={

    }
    app.post("/upload", isLogedIn, upload.single('image'), function (req, res) {
        let address = '/uploads/' + req.file.originalname
    
        let essay = new article({
            title: req.body.titr,
            description: req.body.descript,
            author: req.user.userName,
            Date: req.body.date,
            shorttext: req.body.shortext,
            image: address
    
        });