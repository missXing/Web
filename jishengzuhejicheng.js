function Parent(name) {
  this.name = name
  this.say = () => {
    console.log(this.age)
  }
}


Parent.prototype.play = function() {
  console.log(this.name)
}

function Children(name, age) {
  Parent.call(this, name)
  this.age = age
}

Children.prototype = Object.create(Parent.prototype)
Children.prototype.constructor = Children


const test = new Children('mx----', 19)

test.play()
test.say()