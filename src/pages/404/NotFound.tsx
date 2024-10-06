const NotFound = () => {
  return (
    <>
      <main className="grid rounded-sm min-h-screen place-items-center border border-stroke bg-white px-6 py-24 sm:py-32 lg:px-8 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="text-center">
          <p className="font-medium font-poppins text-5xl text-[#4f61e3]">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold font-poppins tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 font-poppins font-light leading-7 text-gray-600">
            Sorry, we couldn't find the page you were looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/dealer/home"
              className="rounded-lg bg-[#4f61e3] px-3.5 py-2.5 text-sm font-medium font-poppins text-white shadow-sm hover:bg-gray-100 hover:text-[#4f61e3]"
            >
              Return to Home
            </a>
            <a
              href="#"
              className="text-sm font-medium font-poppins text-gray-900"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
