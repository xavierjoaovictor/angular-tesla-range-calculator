import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {
  constructor() {
  }

  getListServicos(): Object {
    return {
      servicos: ['Pagamentos', 'Transferências', 'Recarga de Celular', 'InterSaque']
    };
  }

  getMenuPerfil(): Object {
    return {
      labels: ['Dados da Conta', 'Portabilidade de Salário', 'Desbloqueio de Aparelho']
    };
  }
}
