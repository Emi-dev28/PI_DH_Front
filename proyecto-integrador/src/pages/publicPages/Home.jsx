import { Marquee } from '@/components/home/Marquee';
import Slider from '@/components/home/Slider';
import Wrapper from '@/components/home/Wrapper';
import { Button } from '@/components/ui/button';
import { useDataStore } from '@/context/dataContext/hooks/useDataStore';
import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import Search from '@/components/home/Search';

import categories from '@/mocks/categories.json';
// import products from '@/mocks/products.json';

export default function Home() {
  const { state } = useDataStore();

  const [randomProducts, setRandomProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [shuffledProducts, setShuffledProducts] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProductsByCategories, setFilteredProductsByCategories] =
    useState([]);

  // Para tomar tomar los searchParams que llegan del componente Search que está en el Navbar
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (
      search.get('product') ||
      (search.get('dateFrom') && search.get('dateTo'))
    ) {
      // Función para filtrar productos según el nombre del producto
      const filteredProductsByName = state.products.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.get('product').toLowerCase()),
      );


      // Función para filtrar productos según las fechas
      const filteredProductsByDate = () => {
        return filteredProductsByName.filter((product) => {
          const dateFrom = new Date(product.date.from);
          const dateTo = new Date(product.date.to);

          dateFrom >= search.get('dateFrom') && dateTo <= search.get('dateTo');
        });
      };


      setShuffledProducts(filteredProductsByName);

      // Tomar solo los primeros 10 productos
      const newSelectedProducts = filteredProductsByName.slice(0, 10);

      // Actualizar el estado con los productos filtrados
      setRandomProducts(newSelectedProducts);
    } else {
      const updateRandomProducts = () => {
        // Ordenar aleatoriamente los productos
        const shuffledProducts = state.products.sort(() => Math.random() - 0.5);
        //const shuffledProducts = products.sort(() => Math.random() - 0.5);

        setShuffledProducts(shuffledProducts);

        // Tomar solo los primeros 10 productos
        const newSelectedProducts = shuffledProducts.slice(0, 10);

        // Actualizar el estado con 10 productos aleatorios
        setRandomProducts(newSelectedProducts);
      };

      // Llamamos a la función de actualización al montar el componente y cuando products cambia
      updateRandomProducts();
    }
  }, [search, state.products]);


  const elementsAmount =
    selectedCategories.length > 0
      ? filteredProductsByCategories.length
      : shuffledProducts.length;

  const handleClickFilterProducts = (selectedCategory) => {
    // Verificar si la categoría ya está presente en selectedCategories
    const isCategorySelected = selectedCategories.includes(selectedCategory);

    // Crear un nuevo array con las categorías actualizadas
    let updatedCategories;

    if (isCategorySelected) {
      // Si la categoría está seleccionada, quitarla del array
      updatedCategories = selectedCategories.filter(
        (category) => category !== selectedCategory,
      );
    } else {
      // Si la categoría no está seleccionada, agregarla al array
      updatedCategories = [...selectedCategories, selectedCategory];
    }

    // Actualizar el estado con las categorías seleccionadas
    setSelectedCategories(updatedCategories);

    // Filtrar productos según las categorías seleccionadas
    const filteredProducts =
      updatedCategories.length > 0
        ? shuffledProducts.filter((product) =>
            updatedCategories.find((category) =>
              product.category.includes(category),
            ),
          )
        : shuffledProducts;

    setFilteredProductsByCategories(filteredProducts);

    // Actualizar los productos aleatorios y la página actual
    setRandomProducts(filteredProducts.slice(0, 10));
    setCurrentPage(0);
  };

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    const index = nextPage * 10;

    if (index >= elementsAmount) return;

    const remainingElements = elementsAmount - index;
    const elementsToDisplay = remainingElements >= 10 ? 10 : remainingElements;

    selectedCategories.length > 0
      ? setRandomProducts(
          [...filteredProductsByCategories].splice(index, elementsToDisplay),
        )
      : setRandomProducts(
          [...shuffledProducts].splice(index, elementsToDisplay),
        );

    setCurrentPage(nextPage);
    window.scroll({ top: 1020, behavior: 'smooth' });
  };

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if (prevPage < 0) return;

    const index = prevPage * 10;

    selectedCategories.length > 0
      ? setRandomProducts([...filteredProductsByCategories].splice(index, 10))
      : setRandomProducts([...shuffledProducts].splice(index, 10));

    setCurrentPage(prevPage);
    window.scroll({ top: 1020, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-full">
        <Marquee />
        <img src="/img/home-bkg.webp" alt="Top-home-img" className="w-full h-full object-cover" />
        <div className="md:bottom-15 absolute bottom-10 left-8 lg:bottom-40">
          <h1 className="hidden md:block lg:block text-4xl md:text-6xl lg:text-7xl text-white underline decoration-pink-500 underline-offset-8">
            DH Technology
          </h1>
          <h4 className="hidden md:block lg:block mt-2 text-lg md:text-2xl lg:text-3xl text-white">
            Hacemos realidad tu proyecto
          </h4>
        </div>
      </div>

      <Search />

      {/* CATEGORÍAS */}
      <Slider
        categories={categories}
        handleClickFilterProducts={handleClickFilterProducts}
      />

      <h3 className="mr-20 mt-2 flex justify-end 2xl:mr-56">
        {elementsAmount} resultados
      </h3>
      {/* PRODUCTOS */}
      <Wrapper
        products={randomProducts}
        prevHandler={prevHandler}
        nextHandler={nextHandler}
        currentPage={currentPage}
      />

      <div className="relative w-full saturate-150">
        <img src="/img/Component.webp" alt="Bottom-home-img" className="pr-2" />

        <Button
          variant="outline"
          size="icon"
          className="absolute bottom-5 right-8 rounded-md border-none bg-gradient-to-b 
          from-lime-400 to-lime-600"
          onClick={() => window.scroll({ top: '0', behavior: 'smooth' })}
        >
          <MdArrowUpward className="text-xl text-white" />
        </Button>
      </div>
    </div>
  );
}
