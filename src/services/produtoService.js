import api from "./api";
import { executarRequisicao } from "./requisicao";

export function buscarProdutos(categoria) {
  const url = categoria ? "/products/category/" + categoria : "/products";

  return executarRequisicao(
    () => api.get(url),
    "Não foi possível carregar os produtos."
  );
}

export function buscarProduto(id) {
  return executarRequisicao(
    () => api.get("/products/" + id),
    "Não foi possível carregar o produto."
  );
}
