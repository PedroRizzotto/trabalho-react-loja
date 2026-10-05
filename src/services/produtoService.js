import api from "./api";

export async function buscarProdutos() {
  try {
    const response = await api.get("/products");
    return {
      success: true,
      produtos: response.data,
    };
  } catch (error) {
    console.log("Ocorreu um erro ao buscar os produtos!", error.message);
    return {
      success: false,
      message: "Não foi possível carregar os produtos.",
    };
  }
}

export async function buscarProdutosPorCategoria(categoria) {
  try {
    const response = await api.get("/products/category/" + categoria);
    return {
      success: true,
      produtos: response.data,
    };
  } catch (error) {
    console.log("Ocorreu um erro ao filtrar os produtos!", error.message);
    return {
      success: false,
      message: "Não foi possível carregar os produtos.",
    };
  }
}

export async function buscarProduto(id) {
  try {
    const response = await api.get("/products/" + id);
    return {
      success: true,
      produto: response.data,
    };
  } catch (error) {
    console.log("Ocorreu um erro ao buscar o produto!", error.message);
    return {
      success: false,
      message: "Não foi possível carregar o produto.",
    };
  }
}
