require("dotenv").config()
module.exports={
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL || 'postgres://admin:123456@localhost:5432/phonebook',
    JWT_SECRET: process.env.JWT_SECRET || 'CHANGEME',
}