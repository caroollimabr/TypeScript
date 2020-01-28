export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        //descrição do método original
        const metodoOriginal = descriptor.value; //o que ele é

         
        descriptor.value = function(...args: any[]) { //...args: array[] rest operator: pode receber desde nenhum até vários parâmetros, quero ter acesso a tudo isso

            let unidade = 'ms';
            let divisor = 1;
            if(emSegundos) {
                unidade = 's';
                divisor = 1000;
            }

            console.log('---------------');
            console.log(`parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertyKey} demorou ${(t2 - t1)/divisor} ${unidade}`); //agora vai mostrar em segundos se o logarTempoDeExecucao for true em View.ts, caso contrário, ms.
            return retorno;
        }

        return descriptor;
    }
}