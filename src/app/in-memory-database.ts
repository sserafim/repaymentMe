import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './pages/categories/shared/category.model';

// tslint:disable-next-line:class-name
export class inMemoryDbService implements InMemoryDbService {

    createDb() {
        const categories: Category[] = [
            {id: '1', nome: 'Moradia', description: 'Pagamento aluguel'},
            {id: '2', nome: 'Lazer', description: 'Pagamento aluguel'},
            {id: '3', nome: 'Carro', description: 'Pagamento aluguel'},
            {id: '4', nome: 'Viagem', description: 'Pagamento aluguel'}
        ];
        return { categories };
    }
}
