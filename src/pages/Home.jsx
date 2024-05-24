import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import './Home.css';
import { useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import Product from '../components/Product';

import fastShippingIcon from './img_user.svg';
import safeDeliveryIcon from './img_clock.svg';
import returnIcon from './img_location.svg';
import csIcon from './img_call.svg';
import Footer from '../components/Footer';
const user = [
  { h1: 'Living Room', h2: 'The best foam padded chair' ,img :'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_sam_moghadam_kh.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=8ff471768476d2d7123725b2603c106249d178fc09a0504942b6a97aef7b1fa0&X-Amz-SignedHeaders=host' },
  { h1: 'Dining Room', h2: 'Latest model chandelier',img : 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_phil_desforges.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=d5688f421ffe90f4edd65ee8b30f3d671d54b62a0cb429345d62e6e46ec0f216&X-Amz-SignedHeaders=host' }
];

const products = [
    { 
      title: 'Living Room Chair', 
      description: 'The best foam padded chair', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=cb11c1c28e1e937307347774467aa8a5606905e2927b4d8278bd6daff93f5c76&X-Amz-SignedHeaders=host',
      price: 99.99,
      tag: 'Living Room',
      new: true
    },
    { 
      title: 'Living Room Chair', 
      description: 'The best foam padded chair', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=05d11eb3df2d7a04eec1b9b55be36e651aba621b7e07b82b9d4e7d6e4205b633&X-Amz-SignedHeaders=host',
      price: 99.99,
      tag: 'Living Room',
      new: true
    },
    { 
      title: 'Chandelier', 
      description: 'Latest model chandelier', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image_400x308.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=1e7cadc4479111c08b178f6aaedb222bc633b009a5e0b159f172007c7a06ea8f&X-Amz-SignedHeaders=host',
      price: 299.99,
      tag: 'Dining Room',
      new: false
    },
    { 
      title: 'Chandelier', 
      description: 'Latest model chandelier', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=06400091f67fccfb80292a620cd9e026a09de2f69dfbcb990b5c43e6a8b10d77&X-Amz-SignedHeaders=host',
      price: 299.99,
      tag: 'Dining Room',
      new: false
    },
    { 
      title: 'Chandelier', 
      description: 'Latest model chandelier', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image_2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=75ec918f83b61bb22f551c833ad1410fb59ab5dd5d7563e70da0baee2a01e28c&X-Amz-SignedHeaders=host',
      price: 299.99,
      tag: 'Dining Room',
      new: false
    },
    { 
      title: 'Chandelier', 
      description: 'Latest model chandelier', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image_3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=41d41c39f24b2c1949a2e3c86d064bc2a432405eb0f80492f725127e6cea496f&X-Amz-SignedHeaders=host',
      price: 299.99,
      tag: 'Dining Room',
      new: false
    },
    { 
      title: 'Chandelier', 
      description: 'Latest model chandelier', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image_4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=c7f0d2c6a6bdab24f2fe11cb0dde8dc0c6de1c7bbf20394ebca2247f289ae488&X-Amz-SignedHeaders=host',
      price: 299.99,
      tag: 'Dining Room',
      new: false
    },
    { 
      title: 'Chandelier', 
      description: 'Latest model chandelier', 
      img: 'https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_image_6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=559536bbffa0d7811778a45fb8d1eb2739680042cb839a7fe5227b0fa83f67ed&X-Amz-SignedHeaders=host',
      price: 299.99,
      tag: 'Dining Room',
      new: false
    },

  ];


  const featureData = [
    {
      icon: fastShippingIcon,
      title: 'Fast Shipping',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has'
    },
    {
      icon: safeDeliveryIcon,
      title: 'Safe Delivery',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has'
    },
    {
      icon: returnIcon,
      title: '365 Days Return',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has'
    },
    {
      icon: csIcon,
      title: '24 hours CS',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has'
    }
  ];

const Home = () => {

    const [cartItems, setCartItems] = useState(0);

  const addToCart = (product) => {
    setCartItems(cartItems + 1);
  };

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems -1;
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      {/* <Header cartItems={cartItems} /> */}
      <div className="one">
        <h5>Interior Needs</h5>
        <h1>Various new collections of <br /> furniture to decorate the corner <br /> of your house.</h1>
        <button><link rel="stylesheet" href="/signup" />Shop Now</button>
      </div>
      <div className="two">
        <h2>Various brands have used our products</h2>
        <div id="logos">
          <img className="i" src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_search_gray_50_01.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=55bdb376863b072cf15e5279ada27ba8a80f42b52fca1f09201b6a001a6a6855&X-Amz-SignedHeaders=host" alt="" />
          <img className="i" src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_company_logo_company109.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=ac7bb5e315068a829d5dd1b9b34198e3cb35f7275a4eda3088395f2dd1222ba1&X-Amz-SignedHeaders=host" alt="" />
          <img className="i" src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_company_logo_company109_gray_50_01.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=1550d410576b5586c9e0e2040e54628dd1358db884a65772c3d170ee65402e60&X-Amz-SignedHeaders=host" alt="" />
          <img className="i" src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_company_logo_company109_gray_50_01_48x141.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=4294913d003600dad84aa2ff7e6c243e99b8440a8e5647731e4ba33677ce86ff&X-Amz-SignedHeaders=host" alt="" />
          <img className="i" src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_company_logo_company109_gray_50_01_48x132.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=26d3c4b4e96b0a2b61ed8651c0eaa448c43e5d0161afa100503f50cd1f49b188&X-Amz-SignedHeaders=host" alt="" />
          <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_company_logo_company109_gray_50_01_48x134.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=6e1365078741d1a9f14679f8bbe4c4a874f6416c0cc95b28fd0519e6738bb4cc&X-Amz-SignedHeaders=host" alt="" />
        </div>
      </div>
      <div className="three flex " >
        {user.map((item, index) => (
          <Card key={index} title={item.h1} description={item.h2} img={item.img} />
        ))}
      </div>
      <div className="four bg-[#FEF9F4] flex flex-col justify-center items-center gap-5">
        <h1 className='text-3xl'>Our Newest Product</h1>
        <h2 className='text-sm'>Made of the best materials and with a design that follows the times</h2>
        <div className="products flex justify-center items-center flex-wrap gap-5">
          {products.map((product, index) => (
            <Product
              key={index}
              title={product.title}
              description={product.description}
              img={product.img}
              price={product.price}
              onAddToCart={() => addToCart(product)}
              onRemoveFromCart={() => removeFromCart(product)}
            />
          ))}
        </div>
      </div>

      <div className="five flex  mt-52 mb-20 justify-between h-72 p-2 bg-[#FEE3CA] ">
        <div className="text">
            <h1 className='text-xl' >Interior Modern</h1>
            <h2 className='text-4xl'>Arrange your home in such <br /> a way with our modern <br /> interiors</h2>
            <button className='px-4 py-2 border-black border-2 mt-3' ><link rel="stylesheet" href="/shop" />Shop Now</button>
        </div>
        <div className="image w-[35%] ">
            <img className='h-96 w-full relative -top-20 ' src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_inside_weather.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T015434Z&X-Amz-Expires=25200&X-Amz-Signature=adacc7657a637b0c54ea4039af7d9528eb64a60f4d35494734061ae938fb58b5&X-Amz-SignedHeaders=host" alt="" />
        </div>
      </div>

      <div className="six bg-[#FEF9F4] flex justify-between ">
        <div className="tex h-100vh p-4 flex flex-col ">
            <h1 className='text-5xl' >We guarantee the safety of <br /> your shopping</h1>
            <div className="boxes">
            {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
            </div>
        </div>
        <div  className="img h-full w-1/2 ">
            <img className='h-full w-full '  src="https://dhws-production.s3.ap-south-1.amazonaws.com/65d6c2ecd87d3600222785d7/65d6c3deb12259001524d504/664aacfcf535bc00147a52c8/appSource/images/img_rectangle_16.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240520%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T042543Z&X-Amz-Expires=25200&X-Amz-Signature=c5c732a23c8397f1f0250e258d77a2ec153bb12eeef3457936e6afd25d5b15aa&X-Amz-SignedHeaders=host" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
