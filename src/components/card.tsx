type cardProp = {
  name: string;
  text: string;
  price: number;
  description?: string;
};

export default function Card({ name, text, price, description }: cardProp) {
  return (
<div className="flex justify-evenly text-center gap-20 mt-20 p-8 shadow-lg h-auto max-h-none min-h-0">
 <h2>{name}</h2>
      <p>price: R{price}</p>
      <p>{text}</p>
      {description && <p>{description}</p>}
</div>  );
}
