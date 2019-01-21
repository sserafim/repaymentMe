export class Entrie {

     $key: string;
     nomeDespesa: string;
     descricao: string;
     tipoDespesa: string;
     valor: number;
     data: string;
     pago: boolean;
     category: string;

    constructor() {}

    // tslint:disable-next-line:member-ordering
    static types = {
        despesa: 'Despesa',
        receita: 'Receita'
    };

    get pagoPendente(): string {
        return this.pago ? 'Pago' : 'Pendente';
    }

}
