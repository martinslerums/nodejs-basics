//For ES6 Imports/Exports to work we need to specify "type": "module" in our package.json file ( which we generate with npm init)

//When Importing DO NOT forget to specify file extension
import greet from "./greet.js";

greet("Martin");

import { person1, person2, person3 } from "./peoples.js";

greet(person1);
greet(person2);
greet(person3);

