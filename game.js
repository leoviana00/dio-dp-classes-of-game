class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;  
    }

    atack(params){
        const atacks = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        }

        for (let atk in atacks){
            if(this.type === atk){
                console.log(`O ${this.type} atacou usando ${atacks[atk]}!`)
            }
        }
    }
}

const listHeros = {
    name: ["Gandalf", "Leônidas", "Thich Nhat", "Ishikawa"],
    type: ["mago", "guerreiro", "monge", "ninja"],
    age: [108, 22, 38, 18]
}

for(i in listHeros.name){
    const nameHero = listHeros.name[i]
    const typeHero = listHeros.type[i]
    const ageHero = listHeros.age[i]

    const heroNew = new hero(nameHero,ageHero,typeHero)
    const atackHero = heroNew.atack();
}
