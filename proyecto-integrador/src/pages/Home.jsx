import CardHome from "@/components/CardHome";
import products from "@/mocks/products.json";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Clonar la lista de productos original para no modificarla directamente
    const clonedProducts = [...products];

    // Ordenar aleatoriamente los productos
    const shuffledProducts = clonedProducts.sort(() => Math.random() - 0.5);

    // Tomar solo los primeros 10 productos
    const selectedProducts = shuffledProducts.slice(0, 10);

    // Actualizar el estado con los productos aleatorios
    setRandomProducts(selectedProducts);
  }, []); // La dependencia vacía asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {randomProducts.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
