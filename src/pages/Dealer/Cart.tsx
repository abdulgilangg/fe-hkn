import { useState } from 'react';
// import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  discountedPrice: number;
  qty: number;
  imgUrl: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'ELVICTO SUIT & TIE EXTRAIT DE PARFUM 35ML | Parfum Pria T...',
      price: 178000,
      discountedPrice: 128000,
      qty: 1,
      imgUrl: '/images/sample-product.jpg',
    },
  ]);

  const handleIncreaseQty = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  const handleDecreaseQty = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item,
      ),
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th className="p-3 font-semibold">Produk</th>
            <th className="p-3 font-semibold text-center">Harga Satuan</th>
            <th className="p-3 font-semibold text-center">Kuantitas</th>
            <th className="p-3 font-semibold text-center">Total Harga</th>
            <th className="p-3 font-semibold text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-3 flex items-center">
                <input type="checkbox" className="mr-3" />
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-md mr-3"
                />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-xs text-red-500 mt-1">
                    Gratis Tambah Rp250.000 untuk dapat Hadiah
                  </p>
                </div>
              </td>
              <td className="p-3 text-center">
                <p className="text-gray-400 line-through">
                  Rp{item.price.toLocaleString('id-ID')}
                </p>
                <p className="text-red-500 font-semibold">
                  Rp{item.discountedPrice.toLocaleString('id-ID')}
                </p>
              </td>
              <td className="p-3 text-center">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleDecreaseQty(item.id)}
                    className="px-2 py-1 border border-gray-300 hover:bg-gray-200 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-3">{item.qty}</span>
                  <button
                    onClick={() => handleIncreaseQty(item.id)}
                    className="px-2 py-1 border border-gray-300 hover:bg-gray-200 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-3 text-center text-red-500 font-semibold">
                Rp{(item.discountedPrice * item.qty).toLocaleString('id-ID')}
              </td>
              <td className="p-3 text-center">
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
