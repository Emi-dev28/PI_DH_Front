import CardHome from "@/components/CardHome";
import productsJson from "@/mocks/products.json";

const products = JSON.parse(productsJson);

console.log(products);

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {products.map((product) => (
          <CardHome key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
