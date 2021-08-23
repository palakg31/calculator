export const utils = {
  cancel: (value: string) => {
    return "";
  },
  cos: (value: string) => Math.cos(+value),
  cosh: (value: string) => Math.cosh(+value),
  delete: (value: string) => {
    if (value.length > 1) return value.slice(0, value.length - 1);
    else return "";
  },
  equals: (value: string) => eval(value),
  exponentOf10: (value: string) => Math.E,
  factorial: (value: string) => {
    let num = +value;
    return fact(num);
    function fact(n: number): number {
      if (n === 0 || n === 1) return 1;
      else return n * fact(n - 1);
    }
  },
  IntFormat: (value: string) => new Intl.NumberFormat().format(+value),
  log: (value: string) => Math.log(+value),
  multiplicativeInverse: (value: string) => 1 / +value,
  pie: (value: string) => Math.PI,
  powerOf2: (value: string) => Math.pow(2, +value),
  powerOf10: (value: string) => Math.pow(10, +value),
  powerOfe: (value: string) => Math.pow(Math.E, +value),
  random: (value: string) => Math.random,
  sin: (value: string) => Math.sin(+value),
  sinh: (value: string) => Math.sinh(+value),
  square: (value: string) => Math.pow(+value, 2),
  squareRoot: (value: string) => Math.sqrt(+value),
  tan: (value: string) => Math.tan(+value),
  tanh: (value: string) => Math.tanh(+value),
} as { [key: string]: any };
