function makeCounter(i = 0){
    let count = i;

    return{
        next: ()=> ++count,
        reset:() =>(count =i)
    };
}

const contadorA = makeCounter(0);

console.log("CounterA");
console.log(contadorA.next());
console.log(contadorA.next());
console.log(contadorA.next());
console.log(contadorA.next());
console.log(contadorA.reset());


function makeTogge(i =  false){
    let estado = i;
    
    return{
        get: ()=>estado,
        toggle: ()=> (estado= !estado)
    }
}

const a = makeTogge(false);
console.log(a.get());
console.log(a.toggle());
console.log(a.get());
console.log(a.toggle());
console.log(a.get());
console.log(a.toggle());
console.log(a.get());                   


