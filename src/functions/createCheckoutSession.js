import { db } from  "../firebase-config";
import { collection, doc, addDoc, onSnapshot } from "firebase/firestore";

async function createCheckoutSession(uid, cart) {
  const collectionRef = collection(db, `customers/${uid}/checkout_sessions`);
  // añadimos documento para indicar a stripe inteción de compra
  console.log("carrocheckout",cart);
  const { id } = await addDoc(collectionRef, {
    
    mode: "payment",
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    collect_shipping_address: true,
    automatic_tax:  true,
   
      
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'eur',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    line_items: cart.map((item) => {
      return {
        quantity: item.quantity,
        price: item.priceId,
      };
    }),

  });
  // escuchamos los cambios para obtener la url de stripe
  const cancelarStreaming = onSnapshot(
    doc(db, `customers/${uid}/checkout_sessions/${id}`),

    (snapshot) => {
      let url = snapshot.data().url;
      if (url) {
        cancelarStreaming();
        window.location.href = url;
      }
    }
  );
}

export default createCheckoutSession;
