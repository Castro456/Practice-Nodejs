// const swapCase = require("swap-case").swapCase
import { swapCase } from "swap-case";

function greet(name){
  console.log(`My name is ${name}`);
  console.log(swapCase('bye'));
}

greet('happy')
/**
 * In npm package name, version are mandatory
 * 
 * npm run greet (to run the script)
 * 
 * npm install swap-case@2.0.2 (to install specific version)
 * 
 * npm uninstall swap-case
 * 
 * 
 */
// modules.exports = greet