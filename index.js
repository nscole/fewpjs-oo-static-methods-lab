class Formatter {
  //add static methods here
  static capitalize(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  static sanitize(word){
    return word.replace(/[^A-Za-z0-9 '-]/g, '');
  };
  static titleize(string) {
    let lowerCaseWords = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let words = string.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      if (!lowerCaseWords.includes(words[i]) || i === 0)
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
}

