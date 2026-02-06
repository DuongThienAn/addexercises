import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Book", price: 50 },
  { id: 3, name: "Bag", price: 100 },
];

function UseMemoProducts() {
  const [keyword, setKeyword] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  const total = useMemo(() => {
    return filteredProducts.reduce((sum, p) => sum + p.price, 0);
  }, [filteredProducts]);

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <p>Total: {total}</p>
    </div>
  );
}

export default UseMemoProducts;
