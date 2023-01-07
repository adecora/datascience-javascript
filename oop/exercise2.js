class Filter {
  constructor (...elements) {
    this.elements = [...elements];
  }

  call (value) {
    if (this.elements.includes(value))
      return null;
    else
      return value;
  }
}


const example = new Filter('a', 'e', 'i', 'o', 'u');
for (let value of ['a', 'b', 'c', 'd', 'e']) {
  console.log(value, '->', example.call(value));
}