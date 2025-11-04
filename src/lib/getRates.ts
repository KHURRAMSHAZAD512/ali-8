import axios from "axios";

export async function getRates(base = "USD") {
  const res = await axios.get(`https://api.exchangerate.host/latest?base=${base}`);
  return res.data.rates;
}
