const AddItem = () => {
  return (
    <div className="grid grid-cols-1 gap-9">
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex flex-col gap-5.5 p-6.5">
            {/* Name */}
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Name
              </label>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Category
              </label>
              <input
                type="text"
                placeholder="Category"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Item Code */}
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Item Code
              </label>
              <input
                type="text"
                placeholder="Item Code"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* QTY */}
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                QTY
              </label>
              <input
                type="number"
                placeholder="QTY"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Price */}
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Price
              </label>
              <input
                type="number"
                placeholder="Price"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Discount */}
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Discount
              </label>
              <input
                type="number"
                placeholder="Discount"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>

            {/* Thumbnail */}
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Thumbnail
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>

            {/* Save Button */}
            <div className="flex flex-col lg:flex-row gap-4 mt-4 lg:mt-0 w-full lg:w-auto lg:ml-auto">
              <button
                // onClick={handleSubmit}
                className="w-full lg:w-auto px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/50"
              >
                Submit
              </button>
              <button
                // onClick={handleDiscard}
                className="w-full lg:w-auto px-4 py-2 bg-danger text-white rounded-md hover:bg-danger/50"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
