# node-shorty

A simple node.js package that will generate tinyurl/bit.ly style URL paths given number.

This is useful if your webapp needs to generate shortened URLs. Just keep track of the number of shortened URLs generated and pass the counter into url\_encode. Then, pass an encoded path into url\_decode to find out the counter that was used to generate the URL path.

## Example

See my open source URL shortener, [wiqr](http://github.com/JonAbrams/wiqr), written for node.js.
