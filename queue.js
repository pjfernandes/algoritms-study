class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.data = [];
    this.end = 0;
  }

   isEmpty() {
    if (this.data.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  first() {
    if (!this.isEmpty()) {
      return this.data[0];
    } else {
      return "Empty queue"
    }
  }

  put(value) {
    if (this.end < this.capacity) {
      this.data[this.end] = value;
      this.end += 1;
    }
    else {
      return "Capacity reached"
    }
  }

  remove() {
    if (!this.isEmpty()) {

      for (let i = 0; i < this.end - 1; i++) {
        this.data[i] = this.data[i+1];
      }
      this.end --;
    }

  }

}
