const mongoose = require('mongoose')



const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    shippingInfor: {
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        phoneNo: {
            type: String,
            required: true

        },
        orderItem: [
            {
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                },

                image: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product'
                },
            },

        ],
        paymentInfo: {
            id: {
                type: String
            },
        },
        taxAmount: {
            type: Number,
            required: true,
        },
        shippingAmount: {
            type: Number,
            required: true,
        },
        totalAmount: {
            type: Number,
            required: true,
        },
        orderStatus: {
            type: String,
            required: true,
            default: 'Processing'
        },
        deliveredAt: {
            type: Date
        },

    }
}, { timestamps: true })


const Order = mongoose.model('Order', orderSchema);
module.exports = Order;