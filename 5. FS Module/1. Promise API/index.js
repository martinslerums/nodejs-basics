//FS-Module => File system

import * as fs from "fs/promises";

// ====================== Creating Directory ( Folder ) ======================

// 1. Nested folders will result in error, for example => "E:/Code/NodeJS/5. FS Module/1. Promise API/non-existent-directory/new-folder"
// non-existent-directory => Does not exist, thus creating new directory there will result in error.

/*
  [Error: ENOENT: no such file or directory, mkdir 'E:\Code\NodeJS\5. FS Module\1. Promise API\non-existent-directory\new-folder'] {
    errno: -4058,
    code: 'ENOENT',
    syscall: 'mkdir',
    path: 'E:\\Code\\NodeJS\\5. FS Module\\1. Promise API\\non-existent-directory\\new-folder'
  }
*/

// await fs.mkdir(
//   "E:/Code/NodeJS/5. FS Module/1. Promise API/non-existent-directory/new-folder"
// );

//  2. If Recursive parameter is provided then it can create nested folders.

//  await fs.mkdir(
//     "E:/Code/NodeJS/5. FS Module/1. Promise API/non-existent-directory/new-folder",
//     { recursive: true }
//   );

// ====================== Read the Content from Direcories ======================

// try {
//   const files = await fs.readdir("E:/Code/NodeJS/5. FS Module/1. Promise API/nodejs");
//   // We itterate of files within dirrectory ( readdir());
//   for (const file of files) {
//     console.log("File: ", file);
//   }
// } catch (error) {
//   console.error(error);
// }

// ====================== Remove Direcories ======================

//1. When you remove directory it should be empty.

/*
  [Error: ENOTEMPTY: directory not empty, rmdir 'E:\Code\NodeJS\5. FS Module\1. Promise API\nodejs'] {
    errno: -4051,
    code: 'ENOTEMPTY',
    syscall: 'rmdir',
    path: 'E:\\Code\\NodeJS\\5. FS Module\\1. Promise API\\nodejs'
  }
*/
// try {
//   await fs.rmdir("E:/Code/NodeJS/5. FS Module/1. Promise API/nodejs");
//   console.log("File removed")
// } catch (error) {
//   console.error(error);
// }

// ====================== Create and Write Files ======================

// 1. writeFile Param 1: File name, Param 2: Content
// If you run it twice with different content it will not append but rather overrwrite.

// try {
//   await fs.writeFile("README.md", "Hello Nodejs");
// } catch (error) {
//   console.error(error);
// }

// 2. Appending data

// try {
//   await fs.appendFile("README.md", "I am starting to love NodeJs");
// } catch (error) {
//   console.error(error);
// }

// ====================== Reading Files ======================

// try {
//     // This will safe Buffer within data variable
//     const data = await fs.readFile("README.md");
//     // This will safe Content within content variable, notice how type change as soon as utf-8 flag was provided.
//     const content = await fs.readFile("README.md", 'utf-8');
//     console.log("Data: ", data)
//     console.log("Content: ", content)
//   } catch (error) {
//     console.error(error);
//   }

// ====================== Copy Files ======================

// try {
//   await fs.copyFile("README.md", "Info.txt");
// } catch (error) {
//   console.error(error);
// }

// ====================== File Information ======================

try {
  const info = await fs.stat("Info.txt");
  console.log("Info: ", info);
  console.log(info.isDirectory());
  console.log(info.isFile());
} catch (error) {
  console.error(error);
}
