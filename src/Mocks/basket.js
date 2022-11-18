import React from 'react';
import logo from '../../assets/logo.png';
import tomato from '../../assets/frutas/Tomate.png';
import broccoli from '../../assets/frutas/Brócolis.png';
import cucumber from '../../assets/frutas/Pepino.png';
import potato from '../../assets/frutas/Batata.png';
import pumpkin from '../../assets/frutas/Abóbora.png';

const basket = {
    top: {
        title: 'Basket Details'
    },
    details: {
        name: 'Vegetable Basket',
        farmLogoImg: logo,
        farmName: 'Jenny Jack Farm',
        basketDescription: 'A basket of carefully selected products directly from farm to your kitchen',
        price: 'US$ 8,00',
        button: 'Buy',
        buttonMsg: 'Thank you for choosing our products, have a great day!'
    },
    items: {
        title: 'Basket Items',
        list: [
            {
                name : 'Tomato',
                itemImg: tomato
            },
            {
                name : 'Broccoli',
                itemImg: broccoli
            },
            {
                name : 'Cucumber',
                itemImg: cucumber
            },
            {
                name : 'Potato',
                itemImg: potato
            },
            {
                name : 'Pumpkin',
                itemImg: pumpkin
            }
        ]
    }

};

export default basket;