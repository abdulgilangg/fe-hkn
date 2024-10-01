// Mendefinisikan tipe data untuk objek
export type users = {
  id: number;
  name: string;
  role: string;
}

export type menuBarang = {
  id: number;
  image: string;
  name: string;
  kategori: string;
  kode: string;
  qty: number;
};

export type OrderHistory = {
  id: number;
  tanggal: string;
  noOrder: string;
  jumlah: string;
  jenisPayment: string;
  statusPayment: string;
  statusKirim: string;
};

export type Keranjang = {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}
export type Produk = {
  id: number;
  name: string;
  price: number;
  image: string;
  width: number;
  height: number;
}

export type dataBarang = {
  id: number;
  kode: string;
  name: string;
  qty: number;
  harga: number;
  diskon: number;
}