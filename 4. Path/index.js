//More info on: https://nodejs.org/api/path.html

import path from "path";

//Gets last portion of the path. In this case: index.js
console.log(path.basename("c:\\nodejs\\index.js"))

//Gets last portion of the path but cuts off what is provided as suffix. In this case: index
console.log(path.basename("c:\\nodejs\\index.html", ".html"))

//Gets dirrectory name. In this case: c:\nodejs
console.log(path.dirname("c:\\nodejs\\index.js"))

//Gets file extension name. In this case: .js
console.log(path.extname("c:\\nodejs\\index.js"))

//Joins provided strings in path. In this case: c:\web-dev\courses\redux.
console.log(path.join("c:", "web-dev", "courses", "redux."))

// .. Goes up a level ( same as cd ..). In this case: c:\web-dev\courses
console.log(path.join("c:", "web-dev", "courses", "redux.", ".."))
//c:\web-dev
console.log(path.join("c:", "web-dev", "courses", "redux.", "..", ".."))

//Clear ups the path. In this case: c:\courses\redux\store\features\
console.log(path.normalize("c:\\courses\\redux\\\\store\\features\\"))

/* Gets us an object with all the information about our path. 
{
  root: 'c:\\',
  dir: 'c:\\nodejs\\courses',
  base: 'index.js',
  ext: '.js',
  name: 'index'
}
*/
console.log(path.parse("c:\\nodejs\\courses\\index.js"))