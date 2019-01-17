import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

// tslint:disable-next-line:class-name
export class inMemoryDbService implements InMemoryDbService {

    createDb() {
      const categories: any =  [
            {id: 1, nome: 'Moradia', description: 'Pagamento de Contas da Casa'},
            {id: 2, nome: 'Saúde', description: 'Plano de Saúde e Remédos'},
            {id: 3, nome: 'Lazer', description: 'Cinema, Parques, Praia e etc'},
            {id: 4, nome: 'Freelancer', description: 'Trabalhos com Freelancer'},
            {id: 5, nome: 'Freelancer', description: 'Recebimento Salário'}
        ];
        return { categories };
    }
}
