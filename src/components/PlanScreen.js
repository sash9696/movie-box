import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import './PlanScreen.css'
import db from '../firebase';
import { selectUser } from '../features/userSlice';
import {loadStripe} from '@stripe/stripe-js';

function PlanScreen() {

    const user = useSelector(selectUser);
    const [products, setProducts] = useState([]);
    
    const [subscription, setSubscription] = useState([]);

    useEffect(() => {
        db.collection('customers')
        .doc(user.uid)
        .collection('subscriptions')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(async (subscription) => {
                setSubscription({
                    role: subscription.data().role,
                    current_period_end: subscription.data().current_period_end.seconds,
                    current_period_starts: subscription.data().current_period_end.starts,

                })
            })
        })
    }, [user.uid])

    const loadCheckout = async (priceId) => {
        const docRef = await db.collection('customers')
        .doc(user.uid)
        .collection('checkout_sessions')
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,

        });
        docRef.onSnapshot(async (snap) => {
            const {error, sessionId} = snap.data();

            if(error)
            {
                alert(`An error occured: ${error.message}`)
            }
            if(sessionId)
            {
                const stripe = await loadStripe('pk_test_51KHjkbSEQAn8hiNZVnHSu0deuk7oG1gCykLaJdnzpGQpeVEB2qzjhs2i0ffgM2036ODvsgIsR42BND3kQZmBykfb00VlIhixeH')
                stripe.redirectToCheckout({sessionId});
            }
        })

    }

    useEffect(() => {
        db.collection('products')
        .where('active','==',true)
        .get().then((querySnapshot) => {
            const products = {};
            querySnapshot.forEach( async (productDoc) => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection('prices')
                .get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId : price.id,
                        priceData : price.data(),
                    };

                });
            });
            setProducts(products);
        });
        
    }, [])
   
    return (
        <div className='planScreen'>
           {Object.entries(products).map(([productId, productData]) => {
                // add logic to check users subscription active
                const isCurrentPackage = productData.name?.toLowerCase().includes(subscription?.role)
               
                
                return (
                    <div className='planScreen_plans'>
                        <div className="planScreen_info">
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>
                        <button onClick={() => !isCurrentPackage && loadCheckout(productData?.prices?.priceId)}>{isCurrentPackage ? 'Current Package' : 'Subscribe' }</button>
                    </div>
                )
                
            
            })}
        </div>
    )
}

export default PlanScreen;
