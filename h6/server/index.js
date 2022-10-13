import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from './middleware/logger.js';
import { router as userRouter } from './routes/users.js';

// Needed to add these since I'm using ES6 modules instead of CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// init logger middleware
app.use(logger);

// Users routes
app.use('/users', userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
