export async function customFetch(
  url: string,
  method = "GET"
) {
  const response = await fetch(`${url}`, {
    method,
    headers: {
      accept: "application/json",
    },

  });
  return await response.json();
}

export async function getBitcoinData(): Promise<any> {
  const res = await customFetch("https://api.coingecko.com/api/v3/coins/bitcoin");
  return res;
}