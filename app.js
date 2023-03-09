const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const style = app.use(express.static((__dirname + '/public')));

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));

let InairaRate = 0
let GnairaRate = 0
let RnairaRate = 0
let WnairaRate = 0
let rate = 0


app.post('/rates',function(req,res){
        res.redirect("/")
        const cardName = req.body.cardName
        rate = req.body.rateInaira

     

        if (cardName ==="iTunes"){
            InairaRate = rate;}
        else if(cardName==="Google Play"){
            GnairaRate = rate;}
            
        else if(cardName==="Razer Gold"){
            RnairaRate = rate;}
        else if(cardName==="Walmart"){
            WnairaRate = rate;} 
            
});

app.get('/', function(req, res) {
    res.render("home",{InairaRate:InairaRate,GnairaRate:GnairaRate,RnairaRate:RnairaRate,WnairaRate:WnairaRate});
});

app.get('/rates', function(req,res){
    res.render('rates')
});

app.listen(3000,()=>console.log('Server Started'));