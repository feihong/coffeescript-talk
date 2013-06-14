###
Implement a shuffle() function that randomly rearranges the elements in a given
array. Also demo its usage and effect.
###

main = ->
    array = (c.toUpperCase() for c in 'abcdefg')
    display array
    $(document.body).append '<hr>'

    for i in [1..6]
        shuffle array
        display array

shuffle = (array) ->
    i = array.length
    j = null
    if i == 0
        return
    while i -= 1
        j = Math.floor(Math.random() * (i+1))
        [array[i], array[j]] = [array[j], array[i]]

display = (array) ->
    para = $('<p></p>')
    $(document.body).append para
    for char in array
        # Compute a shade of gray corresponding to the ordinal of the
        # character.
        val = 255 - (char.charCodeAt(0) - 65) / 7 * 100
        val = Math.round val
        style = """
            background: rgb(#{ val}, #{ val}, #{ val });
            border: 1px solid black;
            padding: 5px; margin: 5px;
            """
        para.append "<span style=\"#{ style }\">#{ char }</span>"

main()
