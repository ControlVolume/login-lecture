"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");  //gpt code

// 아이디, 비밀번호, 회원가입
const output = {
    hello: (req, res)=> {
        res.render("home/index");
    },
    
    login: (req, res)=> {
        res.render("home/login");
    },
    register: (req, res)=> {
        res.render("home/register");
    },
};

const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};



module.exports = {
    output,
    process,
};
