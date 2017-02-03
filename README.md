## JS Interview Questions

### bug1.html
  * Bug fixes :
    * Without changing any markup in ```<body>```, fix this file so that:
      * the word 'green' displays in green.
      * the word 'red' displays in red.
  * Enhancement:
    * Eliminate all Javascript and use CSS to style words (inlined ```<style>``` tag is fine).

### bug2.html
  * Bug fixes:
    * Anchor text says "hide" when div is visible, and "show" when it is hidden.
    * No # appears in URL after clicking show/hide link.
  * Enhancement:
    * Remove anchor tag and make div clickable.
    * Add CSS so div has a fixed size (100x100) and a border.
    * Toggle border color when clicked (in addition to showing/hiding text).
       * Green border when text visible.
       * Red border when text hidden.

### todo
  * This is a copy of the Backbone.js TODO app from: https://github.com/addyosmani/todomvc
  * Sadly, we broke some things.  Please fix:
    * Enter key doesn't add a new item, but it should.
    * 'Completed' filter doesn't work. When an item is 'checked', it doesn't filter properly in the completed and active views.

### moviekata
  * Adaptation of codingkata.org's Movie Ticket problem
  * See [description](moviekata/CodingKataMovieTickets.pdf) for full details.
    * Load in browser (runs qunit tests): ```moviekata/index.html```
    * Edit movie.js until tests pass, using pricing rules from above PDF
