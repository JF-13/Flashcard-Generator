function cloze(text, cloze) {
  if (text === undefined || cloze === undefined) {
    console.log("error, youre missing ... try again");
  } else {
    this.cloze = cloze;
    this.partial = text;
    this.fullText = function() {
      var full = this.partial.replace("...", this.cloze);
      console.log(full);
    };
  }
}

// EXAMPLE
// var fanta = new cloze('love is all you ...', 'need');
// console.log(fanta.partial);
// console.log(fanta.cloze);
// fanta.fullText();

module.exports = cloze;
