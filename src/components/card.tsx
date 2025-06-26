type cardProp = {
  name: string;
  text: string;
  price: number;
  description?: string;
};

export default function Card({ name, text, price, description }: cardProp) {
  return (
    <div>
      <h2>{name}</h2>
      <p>price: R{price}</p>
      <p>{text}</p>
      {description && <p>{description}</p>}
    </div>
  );
}
