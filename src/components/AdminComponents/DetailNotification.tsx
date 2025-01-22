import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notification } from '../../types/package';

const DetailNotification = () => {
  const { id } = useParams<{ id: string }>();

  // Data dummy
  const notificationsDummy: Notification[] = [
    {
      id: 1,
      message: 'Notifikasi pertama',
      date: '05 06 22',
    },
    {
      id: 2,
      message: 'Notifikasi kedua',
      date: '06 07 22',
    },
    {
      id: 3,
      message: 'Notifikasi ketiga',
      date: '07 08 22',
    },
  ];

  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    // Ambil notifikasi dari data dummy berdasarkan ID
    const foundNotification = notificationsDummy.find(
      (n) => n.id === Number(id),
    );
    setNotification(foundNotification || null);
  }, [id]);

  return (
    <div className="rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
      {notification ? (
        <div>
          <h3 className="text-lg font-bold text-center">
            {notification.message}
          </h3>
          <p className="text-center text-gray-500">{notification.date}</p>
        </div>
      ) : (
        <p className="text-center">No notifications available</p>
      )}
    </div>
  );
};

export default DetailNotification;
