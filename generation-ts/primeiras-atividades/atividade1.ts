/**
 * Arquivo: defaultParams.ts
 * Author: Glaucia Lemos
 * Description: Exercício prático sobre o uso de parâmetros default em TypeScript.
 * Comando para executar:
 *  1) Executar o comando: Shift + Ctrl + B (Windows)
 *  2) No terminal executar: Node (nome do arquivo)
 * 
 * 
 * Link: https://www.typescriptlang.org/docs/handbook/functions.html (Optional and Default Parameters)
 *
 */

calcularValorDesconto(1000); //0.50 (segundo parâmetro)
calcularValorDesconto(1000, 0.30);


function calcularValorDesconto(valor: number, desconto: number = 0.50): any{ //é any porque vai retornar tanto string quanto número
   console.log(`O valor de desconto da taxa aplicada é ${valor * desconto}`)
  
}

/*resultado
O Valor de Desconto da taxa aplicada é.....:  500
O Valor de Desconto da taxa aplicada é.....:  300*/