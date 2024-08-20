import bcrypt from 'bcryptjs';
const Users = [
    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'ali',
        email: 'ali@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'hassan',
        email: 'hassan@gmail.com',
        password: bcrypt.hashSync('123456', 10)
    }
]

export default Users;