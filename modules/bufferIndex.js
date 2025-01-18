/**
 * Character sets converts the character to binary and the encoding it users is utf-8
 * 
 * Streams: Sequence of data moved from one to another system, it will pass chucks of data
 * 
 * Buffers: It will have a minimum about of data to send those amount. Eg: rollercoaster waiting line
 * 
 * In db we will store images and videos in binary format only
 * 
 * Will not be used directly
 * 
 */

const buffer = new Buffer.from("Castro") // Data to process for buffer

console.log(buffer); //displays the output in hexadecimal
console.log(buffer.toJSON());