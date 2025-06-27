type CardProps = {
  name: string;
  text: string;
  price?: number;
  description?: string;
};

export default function Card({ name, text, price, description }: CardProps) {
  return (
    <div className="flex justify-evenly text-center gap-20 mt-20 p-8 shadow-md">
      <h2>{name}</h2>
      {price !== undefined && <p>Price: R{price}</p>}
      <p>{text}</p>
      {description && <p>{description}</p>}
    </div>
  );
}
