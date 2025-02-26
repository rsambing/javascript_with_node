{ 
    const human = {
        name: "reinaldo",
        age: 13,
        heigth: 159
    }
    const {heigth ,name, age} = human;
    console.log(name, age, heigth);
    
    const {name:my_name, age:my_age} = human;
    console.log(my_name, my_age);
}

{
    const colors = ["green", "blue", "white"];

    const [first, second, third] = colors;

    console.log(first, second, third);
}