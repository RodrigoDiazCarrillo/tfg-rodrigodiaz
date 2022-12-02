
const stripe = require('stripe')("sk_test_51MAWJ3FFJcsNwwzTPI7l1ERAxsJIIviVIoS4Adu3zLfinR6MJppHTdOgTVeO9Z7cRszYiehekbhdXe3hJCDXRlF500L3w8zs74")
const express = require('express');
const app = express();
app.use(express.static('.'));

const DOMAIN = "http://localhost:3000";

app.post('/create-checkout-session', async (req, res) => {

    const products = [
        {
            name: "producto 1",
            quantity: 5,
            price: 5000,
            total: 25000
        },
        {
            name: "producto 2",
            quantity: 3,
            price: 2000,
            total: 6000
        },
        {
            name: "producto 3",
            quantity: 1,
            price: 4000,
            total: 4000
        }
    ]

    
    let arrayProducts = [];
    products.forEach(product =>{
        let lineProduct = {
            price_data: {
                currency: 'usd',
                product_data:{
                    name: product.name,
                    images:["https://brandemia.org/sites/default/files/sites/default/files/logo_paypal_principal.jpg"]
                },
                //precio
                unit_amount: product.total,
              },
              quantity: product.quantity,
        }
        arrayProducts.push(lineProduct);
    })

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
      line_items: arrayProducts,
      mode: 'payment',
      success_url: `${DOMAIN}/store`,
      cancel_url: `${DOMAIN}/login`,
    });
  
    res.json({ id:session.id})
  });

app.listen(4242, () => console.log('Running on port 4242'));