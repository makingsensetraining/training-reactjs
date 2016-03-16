import React from 'react';
import Fruit from './js/fruit';

const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 3,
    price: 8
};

React.render(
    <Fruit title={order.title}
        image={order.image}
        initialQty={order.initialQty}
        price={order.price}/>,
      document.querySelector('.container')
);
