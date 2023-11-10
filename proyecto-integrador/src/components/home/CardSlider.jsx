export default function CardSlider({ product }) {
    return (
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-[380px] relative flex flex-col p-4 md:p-6 rounded-md border border-gray-300 hover:border-gray-500 shadow-md transition-all duration-300 ease-in-out">
        <div className="flex justify-center items-center mb-2">
          <img
            src={
              product.images[0]
                ? product.images[0].image
                : "http://dummyimage.com/283x430.png/5fa2dd/ffffff"
            }
            className="w-full h-[180px] object-cover rounded-t-md"
            alt={product.name}
          />
        </div>
  
        <section className="flex justify-between">
          <div>
            <h2 className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg font-semibold">
              Nombre de categoría
            </h2>
          </div>
        </section>
  
        <button className="mt-2 md:mt-4 lg:mt-8 xl:mt-4 2xl:mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 cursor-pointer transition-all duration-300 ease-in-out text-base sm:text-lg md:text-lg xl:text-base 2xl:text-lg w-full md:w-auto">
          Ver detalles
        </button>
      </div>
    );
  }
  