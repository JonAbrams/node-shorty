# url_encoding method "borrowed" from https://github.com/ogonbat/django-shorty

slug_chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

exports.set_alphabet = (alphabet) ->
  slug_chars = alphabet

exports.url_encode = (i) ->
  if i is 0
    return slug_chars[0]
  s = ""
  base = slug_chars.length
  while i > 0
    s += slug_chars[i % base]
    i = Math.floor(i / base)
  s.split("").reverse().join("")

exports.url_decode = (s) ->
  i = 0
  base = slug_chars.length
  for char in s
    i = i * base + slug_chars.indexOf(char)
  i
