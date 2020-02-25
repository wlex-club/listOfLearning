/**
 *
 * 抽象工厂模式就是：围绕一个超级工厂类，创建其他工厂类；再围绕工厂类，创建实体类
 * 相较于传统的工厂模式，它多出了一个超级工厂类
 *
 * **/

/**
 * 按照之前的做法，这里我们实现几个实体类：Cat 和 Dog 一组、Male 和 Female 一组
 * **/
class Dog {
    run() {
        console.log("狗")
    }
}

class Cat {
    run() {
        console.log("猫")
    }
}

class AbstractFactory {
    getPerson() {
        throw new Error("子类请实现接口");
    }

    getAnimal() {
        throw new Error("子类请实现接口");
    }
}//诸如此类的写法,实现一个超级工厂类
class PersonFactory extends AbstractFactory {
    getPerson(person) {
        person = person.toLocaleLowerCase();
        switch (person) {
            case "male":
                return new Male();
            case "female":
                return new Female();
            default:
                break;
        }
    }

    getAnimal() {
        return null;
    }
}

class AnimalFactory extends AbstractFactory {
    getPerson() {
        return null;
    }

    getAnimal(animal) {
        animal = animal.toLocaleLowerCase();
        switch (animal) {
            case "cat":
                return new Cat();
            case "dog":
                return new Dog();
            default:
                break;
        }
    }
}

/**
 * 以下是测试代码
 */

// 创建person工厂
const personFactory = new Factory("person");
// 从person工厂中创建 male 和 female 实体
const male = personFactory.getPerson("male"),
    female = personFactory.getPerson("female");
// 输出测试
male.run();
female.run();

// 创建animal工厂
const animalFactory = new Factory("animal");
// 从animal工厂中创建 dog 和 cat 实体
const dog = animalFactory.getAnimal("dog"),
    cat = animalFactory.getAnimal("cat");
// 输出测试
dog.run();
cat.run();
