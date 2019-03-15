export default class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];
    let typeSpeed = 150;

    this.isDeleting
      ? (this.txt = fullTxt.substring(0, this.txt.length - 1))
      : (this.txt = fullTxt.substring(0, this.txt.length + 1));

    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;

    this.isDeleting && (typeSpeed /= 3);

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 400;
    }

    setTimeout(() => {
      this.type();
    }, typeSpeed);
  }
}
