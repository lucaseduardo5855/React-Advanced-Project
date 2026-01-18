É o fluxo Síncrono (Instantâneo).
-> ação (disparada) -> reducer (escuta) -> newState (retorna novo estado) ou devolve o estado atual com o default

Linha 2: É o fluxo Assíncrono (Tem espera).
-> ação (request) -> saga -> reducer -> sucess/fail
