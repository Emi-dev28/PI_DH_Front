
import Wrapper from "@/components/Wrapper";
import products from "@/mocks/products.json";
import { useEffect, useState } from "react";

export default function Home() {

  // Clonar la lista de productos original para no modificarla directamente
  const clonedProducts = [...products];
  const [randomProducts, setRandomProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)

  // Ordenar aleatoriamente los productos
  const shuffledProducts = clonedProducts.sort(() => Math.random() - 0.5);

  // Tomar solo los primeros 10 productos
  const selectedProducts = shuffledProducts.splice(0, 10);

  useEffect(() => {
    // Actualizar el estado con los productos aleatorios
    setRandomProducts(selectedProducts);
  }, []); // La dependencia vacía asegura que esto solo se ejecute una vez al montar el componente


  const nextHandler = () => {
    const elementsAmount = clonedProducts.length;
    const nextPage = currentPage + 1; 
    const index = nextPage * 10;

    if(index === elementsAmount) return;
    
    setRandomProducts([...shuffledProducts].splice(index, 10))
    setCurrentPage(nextPage)
  }

  const prevHandler = () => {
    const prevPage = currentPage - 1;

    if(prevPage < 0) return;

    const index = prevPage * 10;
    
    setRandomProducts([...shuffledProducts].splice(index, 10))
    setCurrentPage(prevPage)
  }

  return (
    <Wrapper products={randomProducts} prevHandler={prevHandler} nextHandler={nextHandler} currentPage={currentPage}/>
  );
}
