import { useEffect, useState } from "react";

export default function useRequisicao(buscarDados, dependencias = []) {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  async function carregar() {
    setLoading(true);
    setErro("");

    const response = await buscarDados();

    if (response.success) {
      setDados(response.dados);
    } else {
      setErro(response.message);
    }

    setLoading(false);
  }

  useEffect(() => {
    carregar();
  }, dependencias);

  return { dados, loading, erro, recarregar: carregar };
}
