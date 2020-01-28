
var varName: string = "world";
console.log(hello(name));

function hello(name: string[]): string {
   return `Hello, ${varName}! Hello, ${name}`
}

console.log(hello["Maria", "José", "Jonas"]);


/*OUTRA OPÇÃO

function hello(name: string[]): string{ //? - pode ser, pode n ser
   var test = nome.join(",");
   return test;
}

console.log(hello(["João", "Maria", "Camila"]))*/