type Product = {
  name: string;
  priceRange: string;
  maxPrice: number;
  features: string;
};

export default function ProductCard({ name, priceRange, features }: Product) {
  return (
    <div className="border rounded-xl p-6 shadow hover:shadow-md transition-all bg-white">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-500 mb-1">💸 <strong>Price Range:</strong> {priceRange}</p>
      <p className="text-gray-600">⚙️ <strong>Features:</strong> {features}</p>
    </div>
  );
}
