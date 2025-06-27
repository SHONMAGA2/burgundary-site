import ProductCard from '../../components/shop';

type Product = {
  name: string;
  priceRange: string;
  maxPrice: number;
  features: string;
};

const products: Product[] = [
  {
    name: "Premium Web Applications",
    priceRange: "R9000 - R20000+",
    maxPrice: 20000,
    features: "Custom logic, dashboards, user authentication"
  },
  {
    name: "Advanced Machine-Learning",
    priceRange: "R8000 - R20000+",
    maxPrice: 20000,
    features: "Deep learning, NLP, image recognition"
  },
  {
    name: "Database or API-integrated App",
    priceRange: "R7000 – R15000",
    maxPrice: 15000,
    features: "Backend integrations, databases or APIs"
  },
  {
    name: "Standard Business Website",
    priceRange: "R4500 - R8000",
    maxPrice: 8000,
    features: "Contact forms, gallery, blogs"
  },
  {
    name: "Basic ML Models",
    priceRange: "R3000 - R7000",
    maxPrice: 7000,
    features: "Scikit-learn classifiers or regressors"
  },
  {
    name: "Simple App",
    priceRange: "R3000 – R6000",
    maxPrice: 6000,
    features: "Basic app like To-Do list or Recipe App"
  },
  {
    name: "Desktop GUI App",
    priceRange: "R2000 – R5000",
    maxPrice: 5000,
    features: "Tkinter or PyQt GUIs"
  },
  {
    name: "Basic Business Website",
    priceRange: "R1500 - R4000",
    maxPrice: 4000,
    features: "3–5 pages website"
  },
  {
    name: "Web Scrapers / Data Tools / Bots",
    priceRange: "R1000 - R4000",
    maxPrice: 4000,
    features: "Automation and scraping utilities"
  },
  {
    name: "Basic Scripts or Tools",
    priceRange: "R500 – R1500",
    maxPrice: 1500,
    features: "Small automation tools, calculators"
  }
];

export default function ShopPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Burgundary Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
