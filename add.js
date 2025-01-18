const add = (a, b) => {
  return a + b
}

const sub = (c, d) => {
  return d - c
}

module.exports = { // While using this name should match on the required side also
  add,
  sub
}
// Node js every file is a module. If we want to use only a specific part from outside use the above function

// Each module in the nodejs has its own scope
// So even if the other file also has the same const name it wont conflict

// Each module is cached 
// const name = 'Avatar'
// console.log(name)