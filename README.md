# node-shorty

A simple node.js package that will generate tinyurl/bit.ly style URL paths given number.

This is useful if your webapp needs to generate shortened URLs. Just keep track of the number of shortened URLs generated and pass the counter into _url\_encode_. Then, pass an encoded path into _url\_decode_ to find out the counter that was used to generate the URL path.

## Setting your own "alphabet"

By default, only alphanumeric characters are used for generating URL paths. If you would like a different set. Just call _set\_alphabet_, passing in your string of desired characters, just after loading the module.

## Example

See my open source URL shortener, [wiqr](http://github.com/JonAbrams/wiqr), written for node.js.
