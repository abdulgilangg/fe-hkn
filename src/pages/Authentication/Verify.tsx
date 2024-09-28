import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

    if (!userId) {
      alert('User ID is undefined or missing in the URL');
    } else {
      setUserId(userId);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        'http://localhost:8040/verify-registration',
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
        alert('Verification OTP successfully!');
        navigate('/auth/signin');
      } else {
        throw new Error(
          result.message || 'Invalid OTP code. Please try again.',
        );
      }
    } catch (error) {
      setError(
        (error as Error).message || 'An error occurred. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!userId) {
      alert('User ID is undefined or missing.');
      return;
    }

    setResendLoading(true);
    setError('');

    try {
      const response = await fetch(
        'http://localhost:8040/request-verification-code',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: userId,
          }),
        },
      );

      const result = await response.json();

      if (response.ok) {
        alert('OTP has been resend successfully!');
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
    <div className="bg-gray-100 flex min-h-screen items-center justify-center dark:bg-boxdark-2 dark:text-bodydark">
      <div className="w-full max-w-[480px] px-6">
        <div className="text-center">
          <a className="mx-auto mb-10 inline-flex">
            <img
              className="dark:hidden"
              src={'/logo/logo.png'}
              alt="Logo"
              width={100}
              height={32}
            />
          </a>
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
  );
};

export default Verification;
