import app from './src/app.js'

const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`Server is Running at http://localhost:${port}`);
})