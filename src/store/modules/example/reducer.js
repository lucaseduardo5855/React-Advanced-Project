const initialState = {
  botaoClicado: false, // Estado inicial: como a aplicação começa
};

// REDUCER: O "Gerente" que escuta os pedidos e muda o estado
export default function (state = initialState, action) {
  switch (action.type) {
    case 'botao_clicado': {
      // Nunca altere o "state" direto. Crie uma cópia dele primeiro.
      const newState = { ...state };

      // Agora alteramos a cópia
      newState.botaoClicado = !newState.botaoClicado;

      // Devolvemos a versão nova e atualizada para a aplicação
      return newState;
    }

    default:
      // Se a ação não for conhecida, devolve o estado como estava (não faz nada)
      return state;
  }
}
