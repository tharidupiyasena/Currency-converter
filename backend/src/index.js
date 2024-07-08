const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//all currency
app.get("/getAllCurrencies", async (req, res)=>{
    const nameURL = " https://openexchangerates.org/api/currencies.json?app_id=1d3a92445c5641dd8584de88844e6482 ";


    try{
        const namesResponce = await  axios.get(nameURL);
        const nameData = namesResponce.data;
    
        return res.json(nameData);
    }catch(err){
        console.error(err);
    }
});

//get target amount
app.get("/convert", async( req , res) => {
    const{ date, sourceCurrency, targetCurrency, amountInSourceCurrency } = 
    req.query;

    try {
        const dataUrl = 'https://openexchangerates.org/api/historical/${date}.json?app_id=1d3a92445c5641dd8584de88844e6482'; 
    
        const dataResponce = await axios.get(dataUrl);
        const rates = dataResponce.data.rates;

        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency] ;
        
        const targetAmount = (targetRate/sourceRate) * amountInSourceCurrency;
    
        return res.json(targetAmount);
    } catch (err)
     {
      console.error(err);  
    }
});

//listen to a port
app.listen( 5000, ()=>{
    console.log("SEVER STARTED")
})