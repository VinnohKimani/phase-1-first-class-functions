function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function namedFunction() {
    return '700 RPM'
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    return `Where everything fades`;
  };
}
