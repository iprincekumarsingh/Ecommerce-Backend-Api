const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserScheama = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phone: {
        type: String,
        required: false
    },
    avatar: {
        type: String
    },



}, { timestamps: true })


UserScheama.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.methods.generateAuthToken =  function () {
    const token =  jwt.sign({ _id: this._id }, process.env.JWT_SECERT);
    return token;

}

userSchema.methods.isVerifiedpassword = async function (password) {
    return await bcrypt.compare(password, this.password)

}

const User = mongoose.model('User', UserScheama);

module.exports = User;