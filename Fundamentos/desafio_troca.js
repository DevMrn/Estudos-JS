{
    let a = 7;
    let b = 94;

    // depois da troca... a = 94 e b =7
}

// Resolução 01

{
    let a = 7
    let b = 94
    let temp = a;
    a = b;
    b = temp;

    console.log(a);
    console.log(b);
}

// Resolução 02

{
    let a = 7;
    let b = 94;

    [a, b] = [b, a];

    console.log(a);
    console.log(b);    
}