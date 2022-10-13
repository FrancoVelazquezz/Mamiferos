import { Mamiferos } from "./mamiferos";
import { Carnivoros } from "./carnivoros";
import { Herviboros } from "./herviboros";
import { Omnivoros } from "./omnivoros";

let animalCarnivoro = new Carnivoros('leon', true, false)

let animalHerviboro = new Herviboros('ciervo', false, true)

let animalOmnivoro = new Omnivoros('oso', false, false)

animalCarnivoro.comer()
animalHerviboro.comer()
animalOmnivoro.comer()

console.log(animalHerviboro.getDormir())
console.log(animalCarnivoro.getGenero())
