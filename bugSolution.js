function myFunc(...args) {
  console.log(args);
  console.log(args.map(arg => arg * 2)); // Using array methods is now possible
}

myFunc(1, 2, 3); 