import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export default class CarroDao implements DaoInterface<Carro> {
    nometabela: string = 'tb_Carro';    
    
    inserir(object: Carro): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: Carro): boolean {
        console.log('logica de atualizar')
        return true
    }
    
    remover(id: number): Carro {
        console.log('logica de remover')
        return new Carro('', 1)
    }
    
    selecionar(id: number): Carro {
        console.log('logica para selecionar')
        return new Carro('', 1)
    }
    
    selecionarTodos(): Carro[] {
        console.log('logica para selecionarTodos')
        return new Array<Carro>()
    }


}