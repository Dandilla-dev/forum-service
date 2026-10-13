import express from 'express';
import routes  from './routes/post.routes.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server running on ${port}.
Press Ctrl+C to stop`));