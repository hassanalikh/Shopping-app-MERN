import mongoose from "mongoose";


const conectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb conected on ${conn.connection.host}`)
    } catch (error) {
        console.error(`error -> ${error.message}`)
    }
}

export default conectDB;