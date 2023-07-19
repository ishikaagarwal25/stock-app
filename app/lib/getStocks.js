export default async function getStocks() {
  const url = "https://latest-stock-price.p.rapidapi.com/any";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
