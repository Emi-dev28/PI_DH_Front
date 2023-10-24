import CardHome from "@/components/CardHome";
import { useDataContext } from "@/context/DataContext";
import products from "@/mocks/products.json";
import { useEffect, useState } from "react";

export default function Home() {

  const { state } = useDataContext()
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Clonar la lista de productos original para no modificarla directamente
    // const clonedProducts = [...products];

    // Ordenar aleatoriamente los productos
    //* Colocamos el state que obtimos con el useContext 
    const shuffledProducts = products.sort(() => Math.random() - 0.5);

    // Tomar solo los primeros 10 productos
    const selectedProducts = shuffledProducts.slice(0, 10);

    // Actualizar el estado con los productos aleatorios
    setRandomProducts(selectedProducts);
  }, [state]); // La dependencia vacía asegura que esto solo se ejecute una vez al montar el componente

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Tenemos que ver cómo crear los id, por ahora sirve el nombre porque no se pueden repetir */}
        {randomProducts.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
