function cloze(text, cloze) {
  if (text === undefined || cloze === undefined) {
    console.log("error, youre missing ... try again");
  } else {
    this.cloze = cloze;
    this.partial = text;
    this.fullText = this.partial.replace("...", this.cloze);
  }
}

//EXAMPLE
// var fanta = new cloze('All you need is ...', 'love');
// console.log(fanta.partial);
// console.log(fanta.cloze);
// console.log(fanta.fullText);

module.exports = cloze;
