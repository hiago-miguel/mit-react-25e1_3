// src/pages/CatalogPage.jsx
import { useEffect, useState } from "react";
import productsData from "../assets/products.json";
import ProductCard from "../components/ProductCard";

export default function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Catálogo de Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
