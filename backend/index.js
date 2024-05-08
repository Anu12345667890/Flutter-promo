const app = require('./app');
const db = require('./config/db')
const UserModel= require('./models/user.model')
const PromoModel=require('./models/promo.model')
const port = 3022;
app.get('/',(req,res)=>{
    res.send("Hello World!!!")
})
app.listen(port,()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
});