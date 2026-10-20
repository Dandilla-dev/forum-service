import express from 'express';
import postRoutes from './routes/post.routes.js';
import userAccountRoutes from './routes/userAccount.routes.js';
import mongoose from "mongoose";
import config from './configuration/config.js';


const app = express();

app.use(express.json());

app.use('/forum',postRoutes);
app.use('/account', userAccountRoutes);


app.use((req, res) => res.status(404).type('text/plain; charset=utf-8').send('Not found')
);

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongodb.uri, config.mongodb.db);
        console.log('Connected to MongoDB')
    } catch (e) {
        console.error('Failed to connect', e);
    }
}

async function startServer() {
      await connectDB();
        app.listen(config.port, () => console.log(`Server running on ${config.port}.
Press Ctrl+C to stop`));
}

startServer();