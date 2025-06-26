import Card from '../components/card';

export default function Homepage() {
  return (
    <main className="bg-ivory text-charcoal p-8">
      <header>
        <Card
          name="Burgundary"
          text="Burgundary Your Trusted Web Designer Since 2024"
        />
        <form action="/search" method="POST">
          {/* Add search input here later */}
        </form>
      </header>
    </main>
  );
}
