import { useState } from 'react';
import { BsPlus } from 'react-icons/bs';
// import { Plus } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  width: number;
  height: number;
}

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const products: Product[] = [
    {
      id: 1,
      name: 'ILFORD HP5 PLUS 135 36',
      price: 2500000,
      image: '/images/tes.jpg',
      width: 100,
      height: 100,
    },
    {
      id: 2,
      name: 'ILFORD HP5 PLUS 135 36',
      price: 1000000,
      image: '/images/tes.jpg',
      width: 100,
      height: 100,
    },
    {
      id: 3,
      name: 'ILFORD HP5 PLUS 135 36',
      price: 2500000,
      image: '/images/tes.jpg',
      width: 100,
      height: 100,
    },
    {
      id: 4,
      name: 'ILFORD HP5 PLUS 135 36',
      price: 1200000,
      image: '/images/tes.jpg',
      width: 100,
      height: 100,
    },
    {
      id: 5,
      name: 'ILFORD HP5 PLUS 135 36',
      price: 60000,
      image: '/images/tes.jpg',
      width: 100,
      height: 100,
    },
    {
      id: 6,
      name: 'ILFORD HP5 PLUS 135 36',
      price: 122000,
      image: '/images/tes.jpg',
      width: 100,
      height: 100,
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.name.includes(selectedCategory)),
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mb-8 flex items-center space-x-4">
        <select
          className="border-gray-300 rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Asus">Asus</option>
          <option value="Redmi">Redmi</option>
          <option value="Oppo">Oppo</option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="border-gray-300 w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="w-3/4 pl-4">
        <div className="container flex flex-wrap">
          {filteredProducts.map((product) => (
            <div key={product.id} className="w-full p-1 md:w-1/2 lg:w-1/4">
              <div className="overflow-hidden rounded-lg border bg-white hover:bg-white hover:shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  width={product.width}
                  height={product.height}
                  className="h-48 w-full rounded-md object-cover"
                />
              </div>
              <div className="p-4">
                <h5 className="line-clamp-2 text-start text-base font-normal">
                  {product.name}
                </h5>
              </div>
              <p className="text-base font-medium text-black">
                Rp.{product.price.toLocaleString()}
              </p>
              <button className="rounded-full bg-white px-2 py-2 text-white shadow-lg">
                <BsPlus className="text-blue-600" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
