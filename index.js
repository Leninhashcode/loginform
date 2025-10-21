let express = require('express')
let app = express();
let path = require('path')
let port = 3000;
app.set('view engine','ejs')
app.set("views",path.join(__dirname,"/views"))
app.use(express.urlencoded( {extended:true}))
app.use(express.static(path.join(__dirname,"/public")))
app.get('/',(req,res)=> {
    res.render("index")
})
app.post('/login',(req,res)=>{
    let data = req.body.username
    res.render('welcome', {username:data})
   
    console.log(data)
})
app.listen(port,()=> {
    console.log("sever was running on port:3000")
})