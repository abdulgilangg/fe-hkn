import React from 'react';

const Invoice: React.FC = () => {
  const invoiceData = {
    companyName: 'PT HALO KREASI NUSANTARA',
    companyAddress:
      'JL. IR. H. DJUANDA No. 185, Lt. 2, Dago, Kec. Coblong, Kota Bandung, Jawa Barat 40135, Indonesia',
    recipient: 'Halo Niko Foto and Supply',
    recipientAddress:
      'Cilangkap No 8, RT/RW 04/03, Cilangkap, Depok, Jawa Barat 16458',
    invoiceNumber: 'SO.2024.09.00001',
    date: '03 Sep 2024',
    paymentTerms: 'C.O.D',
    currency: 'IDR',
    items: [
      {
        kode: '019498547573',
        name: 'ILFORD HP5 PLUS 135 36',
        qty: 20,
        price: 140000,
        discount: 420000,
      },
      {
        kode: '019498649653',
        name: 'ILFORD FP4 PLUS 135 36',
        qty: 20,
        price: 135000,
        discount: 405000,
      },
    ],
    subtotal: 4675000,
    ppn: 0,
    total: 4675000,
    bank: 'BCA - 5508283333\nPT. HALO KREASI NUSANTARA',
    note: 'ILFORD Pre-Order\nStatus Pembayaran: Pending\nDP 30% - Rp. 1.402.500,-',
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto p-8 border border-gray-300">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">{invoiceData.companyName}</h2>
          <p>{invoiceData.companyAddress}</p>
        </div>

        {/* Info Kepada dan Invoice */}
        <div className="flex justify-between mb-6">
          <div>
            <p className="font-bold">Kepada:</p>
            <p>{invoiceData.recipient}</p>
            <p>{invoiceData.recipientAddress}</p>
          </div>
          <div>
            <p className="font-bold">Pesanan Penjualan</p>
            <p>
              <span className="font-semibold">Tanggal:</span> {invoiceData.date}
            </p>
            <p>
              <span className="font-semibold">Nomor:</span>{' '}
              {invoiceData.invoiceNumber}
            </p>
            <p>
              <span className="font-semibold">Syarat Pembayaran:</span>{' '}
              {invoiceData.paymentTerms}
            </p>
            <p>
              <span className="font-semibold">Mata Uang:</span>{' '}
              {invoiceData.currency}
            </p>
          </div>
        </div>

        {/* Tabel Barang */}
        <table className="w-full table-auto border-collapse mb-6">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Kode Barang</th>
              <th className="text-left p-2">Nama Barang</th>
              <th className="text-right p-2">Kts.</th>
              <th className="text-right p-2">@Harga</th>
              <th className="text-right p-2">Diskon</th>
              <th className="text-right p-2">Total Harga</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.kode}</td>
                <td className="p-2">{item.name}</td>
                <td className="text-right p-2">{item.qty}</td>
                <td className="text-right p-2">
                  {item.price.toLocaleString('id-ID')}
                </td>
                <td className="text-right p-2">
                  {item.discount.toLocaleString('id-ID')}
                </td>
                <td className="text-right p-2">
                  {(item.qty * item.price - item.discount).toLocaleString(
                    'id-ID',
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Section */}
        <div className="flex justify-end mb-6">
          <table className="w-1/3 border-collapse">
            <tbody>
              <tr>
                <td className="p-2 font-semibold">Sub Total (Exc. PPN)</td>
                <td className="p-2 text-right">
                  {invoiceData.subtotal.toLocaleString('id-ID')}
                </td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Diskon</td>
                <td className="p-2 text-right">0</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">PPN (%)</td>
                <td className="p-2 text-right">{invoiceData.ppn}</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Biaya Lain-lain</td>
                <td className="p-2 text-right">0</td>
              </tr>
              <tr>
                <td className="p-2 font-semibold">Total (Inc. PPN)</td>
                <td className="p-2 text-right">
                  {invoiceData.total.toLocaleString('id-ID')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes & Bank Info */}
        <div className="mb-6">
          <p className="font-bold">Keterangan:</p>
          <p>{invoiceData.note}</p>
          <p>Pembayaran hanya dilakukan kepada Rekening berikut:</p>
          <p>{invoiceData.bank}</p>
        </div>

        <div className="mt-12 text-right">
          <p>Disetujui,</p>
          <p>Tgl. ___________________</p>
        </div>
      </div>
    </>
  );
};

export default Invoice;
