import ProductCard from './ProductCard';

const TrendingProducts: React.FC = () => {
  const products = [
    {
      primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/17_02-460x460.jpg',
      secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
      title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
      price: 200,
      rating: 5,
    },
    {
        primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/23_02-460x460.jpg',
        secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
        title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
        price: 200,
        rating: 5,
      },
      {
        primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/18_02-460x460.jpg',
        secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
        title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
        price: 200,
        rating: 5,
      },
      {
        primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/15_02-460x460.jpg',
        secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
        title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
        price: 200,
        rating: 5,
      },
      
      {
        primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
        secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
        title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
        price: 200,
        rating: 5,
      },
      
    {
      primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/23_02-460x460.jpg',
      secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
      title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
      price: 200,
      rating: 5,
    },
    
    {
      primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/15_02-460x460.jpg',
      secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
      title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
      price: 200,
      rating: 5,
    },
    {
      primaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/18_02-460x460.jpg',
      secondaryImage: 'https://demo.webdigify.com/WCM01/WCM029_timen/wp-content/uploads/2023/10/22_02-460x460.jpg',
      title: 'Tissot T-Classic Rhodium Dial Automatic Men\'s Watch',
      price: 200,
      rating: 5,
    },
    // Add more products here
  ];

  return (
    <div className=' pb-[5%] px-[5%]'>
        <div className='flex flex-col justify-center items-center'>
        <h3 className="text-gray-800 font-semibold text-4xl mb-2 text-center pb-[2vh]">Trending Products</h3>
        <div className='bg-gray-800 h-[3px] w-[100px] mb-[5vh]'></div>
        </div>
            

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          primaryImage={product.primaryImage}
          secondaryImage={product.secondaryImage}
          title={product.title}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
    </div>
  );
};

export default TrendingProducts;