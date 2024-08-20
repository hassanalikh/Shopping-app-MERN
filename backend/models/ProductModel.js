import mongoose from "mongoose";

const review = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        Comment: {
            type: String
        }
    }, { timestamp: true }
);

const productSchema = mongoose.Schema(
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
        image: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        reviews: [review],
        rating: {
            type: String,
            required: true
        },
        numReviews: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        countInStock: {
            type: String,
            required: true
        }
    }
);
const Product = mongoose.model('Product', productSchema);
export default Product;