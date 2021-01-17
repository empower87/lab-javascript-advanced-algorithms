class StackDataStructure {
  constructor(item) {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {
    if (this.stackControl.length < 10) {
      return this.stackControl
      console.log(stackControl.length)
    }
    else {     
      return [false, "Stack Overflow"]
    }
  }

  display() {
    return this.stackControl[this.stackControl.length - 1]
    // ... your code goes here
  }

  isEmpty() {
    if (this.stackControl.length === 0) {
      return true
    }
    else {
      return false
    }
    // ... your code goes here
  }

  push(item) {
      this.stackControl.push(item)
      return this.stackControl
    // ... your code goes here
  }

  pop() {
    this.stackControl.pop()
    // ... your code goes here
  }
}
