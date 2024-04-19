require("dotenv").config()
module.exports={
    PORT: process.env.PORT || 3000,
    DB_NAME: process.env.DB_NAME || 'phonebook',
    DB_USER_NAME: process.env.DB_USER_NAME || 'admin',
    DB_PASSWORD: process.env.DB_PASSWORD || '123456',
    JWT_SECRET: process.env.JWT_SECRET || 'CHANGEME',
}