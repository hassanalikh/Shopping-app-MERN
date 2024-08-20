
import dotenv from 'dotenv';
import Users from './data/Users.js'; // Ensure the correct path and extension
import User from './models/UserModel.js';
import Product from './models/ProductModel.js';
import Order from './models/OrderModel.js';
import products from './data/products.js';
import connectDB from './conectdb/config.js'; // Ensure the correct path and extension

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        const createUser = await User.insertMany(Users);
        const adminUser = createUser[0]._id;
        const sampleData = products.map((product) => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleData);
        console.log('Data imported successfully');
        process.exit();

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();
        console.log('Data destroyed successfully');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
