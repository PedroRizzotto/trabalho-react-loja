// 199.9 -> "R$ 199,90"
export default function formatarPreco(preco) {
  return "R$ " + preco.toFixed(2).replace(".", ",");
}
