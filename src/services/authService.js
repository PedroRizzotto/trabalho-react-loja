import api from "./api";

export async function login(username, senha) {
  try {
    // Primeiro busca os usuários para ver se o username existe
    const responseUsuarios = await api.get("/users");
    const usuarios = responseUsuarios.data;

    const usuario = usuarios.find((item) => item.username === username);

    if (!usuario) {
      return {
        success: false,
        message: "Usuário não encontrado.",
      };
    }

    const response = await api.post("/auth/login", {
      username: username,
      password: senha,
    });

    const authInfo = response.data;

    if (!authInfo.token) {
      return {
        success: false,
        message: "Usuário ou senha inválidos.",
      };
    }

    return {
      success: true,
      authInfo,
    };
  } catch (error) {
    console.log("Ocorreu um erro ao fazer o login!", error.message);

    if (!error.response) {
      return {
        success: false,
        message: "Erro de conexão. Verifique sua internet.",
      };
    }

    if (error.response.status === 401) {
      return {
        success: false,
        message: "Usuário ou senha inválidos.",
      };
    }

    return {
      success: false,
      message: "Não foi possível fazer o login. Tente novamente.",
    };
  }
}
