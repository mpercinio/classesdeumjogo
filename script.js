class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack () {
        let onset;
        switch (this.type) {
            case "mago":
                onset = "magia";
                break;
            case "guerreiro":
                onset = "espada";
                break;
            case "monge":
                onset = "artes marciais";
                break;
            case "ninja":
                onset = "shuriken";
                break;
        }

        const message = `O ${this.type} ${this.name} atacou usando ${onset}`;
        console.log(message);
        return message;
    }
}

const heroMago = new hero ("Merlyn", 250, "mago");
const heroguerreiro = new hero ("Conan", 32, "guerreiro");
const heroMonge = new hero ("Buda", 50, "monge");
const heroNinja = new hero ("Lee", 36, "ninja");

heroMago.attack();
heroguerreiro.attack();
heroMonge.attack();
heroNinja.attack();
