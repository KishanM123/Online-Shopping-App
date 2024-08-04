// src/data/products.ts
import product1Image from '../images/product1.jpg';
import product2Image from '../images/product2.jpg';
import product3Image from '../images/product3.jpg';
import product4Image from '../images/product4.jpg';
import product5Image from '../images/product5.jpg';
import product6Image from '../images/product6.jpg';
import product7Image from '../images/product7.jpg';
import product8Image from '../images/product8.jpg';

export const products = [
  {
    id: 1,
    name: 'T-Shirt',
    price: 29.99,
    image: product1Image,
    description: 'This is a great product that is soft and comfortable.', // New description field
  },
  {
    id: 2,
    name: 'Table',
    price: 49.99,
    image: product2Image,
    description: 'A premium product designed to meet your needs and exceed expectations.',
  },
  {
    id: 3,
    name: 'Chair',
    price: 149.99,
    image: product3Image,
    description: 'High quality and performance, ideal for professionals and enthusiasts.',
  },
  {
    id: 4,
    name: 'Winter Jacket',
    price: 49.99,
    image: product4Image,
    description: 'Reliable and efficient, this product is a top choice for consumers.',
  },
  {
    id: 5,
    name: 'Playstation 4 Controller',
    price: 49.99,
    image: product5Image,
    description: 'Innovative design and superior performance make this a must-have.',
  },
  {
    id: 6,
    name: 'Wireless Keyboard',
    price: 49.99,
    image: product6Image,
    description: 'Versatile and durable, this product is perfect for various applications.',
  },
  {
    id: 7,
    name: 'Shoes',
    price: 29.99,
    image: product7Image,
    description: 'Affordable and effective, offering great value for money.',
  },

  {
    id: 8,
    name: 'Bicycle',
    price: 109.99,
    image: product8Image,
    description: 'Durable and effective, offering great value for money.',
  },
];
