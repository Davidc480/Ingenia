const request = require('request');
require('dotenv').config();
const {CLIENTPAYPAL,SECRET} = process.env;

// const {executePaymentControllers} = require('../../controllers/buy/paypal/executePaymentControllers')

const PAYPAL_API = 'https://api-m.sandbox.paypal.com';
const auth = {user: CLIENTPAYPAL, pass:SECRET};

const buyHandlers = (req,res)=>{
    const body = req.body;
    request.post(`${PAYPAL_API}/v2/checkout/orders`,{
        auth,
        body,
        json:true
    },(err,response)=>{
        res.json({data:response.body})
    })
}
const executePayment = (req,res)=>{
    const {token} = req.query;
    // try {
    //     const response = executePaymentControllers()
    //     res.status(200)
        
    // } catch (error) {
        
    // }
    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        res.status(200).json({ data: response.body })
    })
}
module.exports={
    buyHandlers,
    executePayment
}

