import StockCard from "./components/StockCard";
import getStocks from "./lib/getStocks";

export default async function Home() {
  const stocks = await getStocks();
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 bg-slate-800">
      <nav className="bg-slate-700 text-white h-16 w-full flex justify-start items-center px-8 md:px-18 lg:px-36 text-2xl font-semibold">
        Stonks&nbsp;<span>📈</span>
      </nav>
      <section className="w-3/5 h-full flex flex-col gap-5">
        {stocks.map((stock, idx) => {
          return <StockCard key={idx} stock={stock} />;
        })}
      </section>
    </main>
  );
}
