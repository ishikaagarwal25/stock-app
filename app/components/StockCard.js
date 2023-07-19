function StockCard({ stock }) {
  const { symbol: name, pChange, change, lastPrice: price } = stock;
  const percentChange = `${(pChange * 100).toFixed(0)}%`;
  const textColor =
    String(change)[0] === "-" ? "text-red-400" : "text-lime-400";
  return (
    <div className="bg-slate-600 p-4 lg:p-6 flex flex-col gap-4 rounded-2xl">
      <section className="flex justify-between items-center">
        <h2 className="text-white text-md lg:text-xl font-semibold">{name}</h2>
        <h3 className="text-white text-sm lg:text-lg font-semibold">{`Rs. ${price}`}</h3>
      </section>
      <section className="flex justify-between items-center">
        <h3 className={`text-xs lg:text-md font-semibold ${textColor}`}>
          {change.toFixed(2)}
        </h3>
        <h3 className={`text-xs lg:text-md font-semibold ${textColor}`}>
          {percentChange}
        </h3>
      </section>
    </div>
  );
}

export default StockCard;
