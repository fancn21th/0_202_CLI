console.log(process.argv);

const flags = [];

process.argv.forEach((arg) => {
  if (/^-/.test(arg)) {
    flags.push(arg.replace(/^-{1,2}/, ""));
  }
});

console.log(flags);
