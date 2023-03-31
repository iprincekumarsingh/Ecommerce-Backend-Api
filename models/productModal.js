const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    photos: [
        {
            id: {
                type: String,
                required: true,
            },
            secure_url: {
                type: String,
                required: true,
            },

        },
    ],

    category: {
        type: String,
        required: [
            true,
            "please select category from- short-sleeves, long-sleeves, sweat-shirts, hoodies",

        ],
        enum: {
            values: ["shortsleeves", "longsleeves", "sweatshirt", "hoodies"],
            message:
                "please select category ONLY from - short-sleeves, long-sleeves, sweat-shirts and hoodies ",
        },
    },
    stock: {
        type: Number,
        required: [true, "please enter the stock"],
    },
    brand: {
        type: String,
        required: [true, "please enter the brand"],
    },
    rating: {
        type: Number,
        default: 0
    },
    numberofReview: {
        type: Number,
        default: 0
    },
    review: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'User'
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },

            comment: {
                type: String,

            },
        },
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;