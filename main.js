//@ sourceMappingURL=main.map
// Generated by CoffeeScript 1.6.1

/*
Implement a shuffle() function that randomly rearranges the elements in a given
array. Also demo its usage and effect.
*/


(function() {
  var display, main, shuffle;

  main = function() {
    var array, c, i, _i, _results;
    array = (function() {
      var _i, _len, _ref, _results;
      _ref = 'abcdefg';
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        c = _ref[_i];
        _results.push(c.toUpperCase());
      }
      return _results;
    })();
    display(array);
    $(document.body).append('<hr>');
    _results = [];
    for (i = _i = 1; _i <= 6; i = ++_i) {
      shuffle(array);
      _results.push(display(array));
    }
    return _results;
  };

  shuffle = function(array) {
    var i, j, _ref, _results;
    i = array.length;
    j = null;
    if (i === 0) {
      return;
    }
    _results = [];
    while (i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      _results.push((_ref = [array[j], array[i]], array[i] = _ref[0], array[j] = _ref[1], _ref));
    }
    return _results;
  };

  display = function(array) {
    var char, para, style, val, _i, _len, _results;
    para = $('<p></p>');
    $(document.body).append(para);
    _results = [];
    for (_i = 0, _len = array.length; _i < _len; _i++) {
      char = array[_i];
      val = 255 - (char.charCodeAt(0) - 65) / 7 * 100;
      val = Math.round(val);
      style = "background: rgb(" + val + ", " + val + ", " + val + ");\nborder: 1px solid black;\npadding: 5px; margin: 5px;";
      _results.push(para.append("<span style=\"" + style + "\">" + char + "</span>"));
    }
    return _results;
  };

  main();

}).call(this);
