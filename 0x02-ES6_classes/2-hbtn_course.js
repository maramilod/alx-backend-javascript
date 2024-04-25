export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  get students() {
    return this._students;
  }

  get length() {
    return this._length;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = name;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = length;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('it must be an array');
    }

    this._students = students;
  }
}
