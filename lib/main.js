(function() {
  var slug_chars;

  slug_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  exports.set_alphabet = function(alphabet) {
    return slug_chars = alphabet;
  };

  exports.url_encode = function(i) {
    var base, s;
    if (i === 0) return slug_chars[0];
    s = "";
    base = slug_chars.length;
    while (i > 0) {
      s += slug_chars[i % base];
      i = Math.floor(i / base);
    }
    return s.split("").reverse().join("");
  };

  exports.url_decode = function(s) {
    var base, char, i, _i, _len;
    i = 0;
    base = slug_chars.length;
    for (_i = 0, _len = s.length; _i < _len; _i++) {
      char = s[_i];
      i = i * base + slug_chars.indexOf(char);
    }
    return i;
  };

}).call(this);
