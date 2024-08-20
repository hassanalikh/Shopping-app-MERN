
import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
    {
        User: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        order: [
            {
                name: {
                    type: String,
                    required: true
                },
                qyt: {
                    type: Number,
                    requuird: true
                },
                Product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'product'
                }
            }
        ],
        shippingAdress:
        {
            adress: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            postalCode: {
                type: Number,
                required: true
            }
        },
        payment: {
            type: String,
            required: true
        },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            email: { type: String }
        },
        taxprice: {
            type: String,
            required: true,
            default: 0.0
        },
        shippingprice: {
            type: String,
            required: true,
            default: 0.0

        },
        totalPrice: {
            type: String,
            required: true,
            default: 0.0
        },
        isPaid: {
            type: String,
            required: true,
            default: false
        },
        paidDate: {
            type: Date
        },
        isdelevired: {
            type: Boolean
        },
        delevDate: {
            type: Date
        }

    }
);


const Order = mongoose.model('Order', orderSchema);

export default Order;