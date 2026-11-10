export async function executarRequisicao(chamada, mensagemErro) {
  try {
    const response = await chamada();
    return {
      success: true,
      dados: response.data,
    };
  } catch (error) {
    console.log(mensagemErro, error.message);
    return {
      success: false,
      message: error.response
        ? mensagemErro
        : "Erro de conexão. Verifique sua internet.",
    };
  }
}
