import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export default class PessoaDao implements DaoInterface<Pessoa> {
    nometabela: string = 'tb_Pessoa';    
    
    inserir(object: Pessoa): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: Pessoa): boolean {
        console.log('logica de atualizar')
        return true
    }
    
    remover(id: number): Pessoa {
        console.log('logica de remover')
        return new Pessoa('', '')
    }
    
    selecionar(id: number): Pessoa {
        console.log('logica para selecionar')
        return new Pessoa('', '')
    }
    
    selecionarTodos(): Pessoa[] {
        console.log('logica para selecionarTodos')
        return new Array<Pessoa>()
    }


}