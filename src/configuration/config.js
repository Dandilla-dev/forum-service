const config = {
    port: process.env.PORT || 3000,
    mongodb: {
        uri: process.env.MONGODB_URI || 'mongodb://Dan:1234@localhost:27017/',
        db: {
            dbName: process.env.DB_NAME || 'fullstack3464'
        }
    }
}

export default config;