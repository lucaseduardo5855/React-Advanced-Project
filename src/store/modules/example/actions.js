import * as types from '../types';

export function clicaBotao() {
  return {
    type: types.botao_clicado, // O NOME EXATO que está no switch do reducer
  };
}
