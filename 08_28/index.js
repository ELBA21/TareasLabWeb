const users = [
    {id:1, name:"Ana",age:22},
    {id:2, name:"Luis",age:19}
];

const byAge = users.reduce((acc,u) =>{
    if(acc[u.age]<20){
        acc[u.age]=[];
    }
    acc[u.age].push(u.name);
    return acc;
},{});

console.log(byAge)
