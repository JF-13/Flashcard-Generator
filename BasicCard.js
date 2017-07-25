
function BasicCard (front, back) {
  if (front === undefined || back === undefined) {
    console.log("error, youre missing ... try again");
  } else {
    this.front = front;
    this.back = back;
    this.showFront = function() {
      console.log(this.front);
    };
    this.showBack = function() {
      console.log(this.back);
    };
  }
}

//EXAMPLE
// var card1 = new BasicCard('George Washington', 'Is the first US president');
// card1.showFront();
// card1.showBack();

module.exports = BasicCard;
