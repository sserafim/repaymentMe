export class Entrie {

    constructor(
      public id?: string,
      public nomeDespesa?: string,
      public descricao?: string,
      public tipoDespesa?: string,
      public valor?: number,
      public data?: string,
      public pago?: boolean,
      public category?: string
    ) {}

    // tslint:disable-next-line:member-ordering
    static types = {
        despesa: 'Despesa',
        receita: 'Receita'
    };

    get pagoPendente() {
        return this.pago;
    }

}
