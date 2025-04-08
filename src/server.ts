import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
dotenv.config()
import pageRouter from './routes/page.routes'
import productRouter from './routes/product.routes'

const app = express();

app.use(express.json());

// Routes
app.use('/products', productRouter)
app.use('/', pageRouter)

// Fallback
app.use((req: Request, res: Response) => {
    res.status(404).send('Invalid route!')
})

// Start server
const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})