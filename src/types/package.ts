// Mendefinisikan tipe data untuk objek
export type users = {
  id: number;
  name: string;
  role: string;
}

export type Announcement = {
  id: number;
  message: string;
}

export type BreadcrumbProps = {
  pageName: string;
  role: 'admin' | 'dealer';
}

export type orderHistory = {
  id: number;
  tanggal: string;
  noOrder: string;
  jumlah: number;
  jenisPayment: string;
  statusPayment: string;
  statusKirim: string;
};

export type Diskon = {
  id: number;
  diskon: number;
};

export type order = {
  id: number;
  kode: string;
  name: string;
  qty: number;
  harga: number;
  diskon: number;
}

export type Address = {
  address: string;
  city: string;
  country: string;
}

export type ProfilePayload = {
  username: string;
  role: string;
  profileImage: File | null
  coverImage: File | null
}

export type menuBarang = {
  id: number;
  image: string;
  name: string;
  kategori: string;
  kode: string;
  qty: number;
};

export type Notification = {
  id: number,
  message: string,
  time: string,
}

export type Cart = {
  id: number;
  name: string;
  qty: number;
  price: number;
  imgUrl: string;
}
