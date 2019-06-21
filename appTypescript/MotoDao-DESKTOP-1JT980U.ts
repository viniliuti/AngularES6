import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export default class MotoDao implements DaoInterface<Moto> {
    nometabela: string = 'tb_Moto';    
    
    inserir(object: Moto): boolean {
        console.log('logica de insert')
        return true
    }
    
    atualizar(object: Moto): boolean {
        console.log('logica de atualizar')
        return true
    }
    
    remover(id: number): Moto {
        console.log('logica de remover')
        return new Moto()
    }
    
    selecionar(id: number): Moto {
        console.log('logica para selecionar')
        return new Moto()
    }
    
    selecionarTodos(): Moto[] {
        console.log('logica para selecionarTodos')
        return new Array<Moto>()
    }


}