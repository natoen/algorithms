/*
Suppose we have a bunch of wooden blocks. Each block is the same width and height, and
they're arranged in a row of vertical stacks to make a little 2-dimensional tower:

We're going to take a hose and spray water all over the top of our tower, so water comes down
across the top. The water drains off to the sides of the tower (but not out the bottom), so the
result is that water pools anywhere there is a depression:

We want to find out, given an arbitrary tower of blocks, how many "blocks of water" will it hold?


============
============
============
============
============
============
============
============
*/

function woodenBlocks(width, height) {
  return width * (height - 1) - 2 * (height - 1);
}

woodenBlocks(4, 4); // 6
