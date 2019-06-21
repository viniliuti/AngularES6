import { DaoInterface } from "./DaoInterface";

export default class Dao<T> implements DaoInterface<T> {
    nometabela: string = '';
    
    inserir(object: T): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: T): boolean {
        console.log('logica de atualizar')
        return true
    }
    
    remover(id: number): T {
        console.log('logica de remover')
        return Object()
    }
    
    selecionar(id: number): T {
        console.log('logica para selecionar')
        return Object()
    }
    
    selecionarTodos(): T[] {
        console.log('logica para selecionarTodos')
        return [Object()]
    }
}