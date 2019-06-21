import { DaoInterface } from "./DaoInterface";
import Concessionaria from "./Concessionaria";

export default class ConcessionariaDao implements DaoInterface<Concessionaria> {
    nometabela: string = 'tb_concessionaria';    
    
    inserir(object: Concessionaria): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: Concessionaria): boolean {
        console.log('logica de atualizar')
        return true
    }
    
    remover(id: number): Concessionaria {
        console.log('logica de remover')
        return new Concessionaria('', [])
    }
    
    selecionar(id: number): Concessionaria {
        console.log('logica para selecionar')
        return new Concessionaria('', [])
    }
    
    selecionarTodos(): Concessionaria[] {
        console.log('logica para selecionarTodos')
        return new Array<Concessionaria>()
    }


}