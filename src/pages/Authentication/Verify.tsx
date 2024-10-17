import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Verification: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [resendLoading, setResendLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('user_id');
    const otp = params.get('verification_code');

    if (!userId || !otp) {
      alert('User ID or verification code is undefined or missing in the URL');
      return;
    }

    setUserId(userId);
    // Verifikasi OTP dengan metode GET
    verifyOtpAutomatically(userId, otp);
  }, []);

  const verifyOtpAutomatically = async (userId: string, otp: string) => {
    try {
      const response = await fetch(
        `http://103.217.144.72:5555/verify-registration?user_id=${userId}&verification_code=${otp}`, // Menggunakan GET dengan parameter URL
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Verification successful!',
          text: 'You will be redirected to sign in.',
        });
        navigate('/auth/signin');
      } else {
        throw new Error(
          result.message || 'Invalid OTP code. Please try again.',
        );
      }
    } catch (error) {
      setError(
        (error as Error).message || 'An error occurred during verification.',
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || !userId) {
      alert('Please enter OTP and ensure User ID is available.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `http://103.217.144.72:5555/verify-registration`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: userId,
            verification_code: otp,
          }),
        },
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Verification successful!',
          text: 'You will be redirected to sign in.',
        });
        navigate('/auth/signin');
      } else {
        throw new Error(
          result.message || 'Invalid OTP code. Please try again.',
        );
      }
    } catch (error) {
      setError(
        (error as Error).message || 'An error occurred during verification.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!userId) {
      Swal.fire({
        icon: 'warning',
        title: 'User ID is undefined or missing.',
      });
      return;
    }

    setResendLoading(true);
    setError('');

    try {
      const response = await fetch(
        `http://103.217.144.72:5555/request-verification-code`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_id: userId }),
        },
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'OTP has been resent successfully!',
          text: 'Please check your email.',
        });
      } else {
        throw new Error(
          result.message || 'Failed to resend OTP. Please try again.',
        );
      }
    } catch (error) {
      setError(
        (error as Error).message || 'An error occurred while resending OTP.',
      );
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex min-h-screen items-center justify-center dark:bg-boxdark-2 dark:text-bodydark">
        <div className="w-full max-w-[480px] px-6">
          <div className="text-center">
            <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-boxdark lg:p-8">
              <h1 className="mb-4 text-3xl font-bold text-black dark:text-white">
                Verify Your Account
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Enter the 6 digit code sent to the registered email id.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-5 flex justify-center">
                  <input
                    type="text"
                    value={otp}
                    onChange={handleChange}
                    maxLength={6}
                    className="w-2/3 rounded-md border border-stroke bg-transparent p-3 text-center text-2xl font-medium text-black outline-none transition focus:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                {error && (
                  <div className="mb-4 text-sm text-red-600">{error}</div>
                )}
                <div className="text-gray-600 dark:text-gray-400 mb-6 text-left">
                  <p>
                    Didn’t receive a code?{' '}
                    <button
                      className="text-primary"
                      onClick={handleResend}
                      disabled={resendLoading}
                    >
                      {resendLoading ? 'Resending...' : 'Resend'}
                    </button>
                  </p>
                </div>
                <button
                  className="w-full rounded-md bg-primary p-3 font-bold text-white hover:bg-opacity-90"
                  type="submit"
                  disabled={loading || !userId}
                >
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
                <span className="mt-4 block text-sm text-red-600">
                  Don’t share the verification code with anyone!
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
