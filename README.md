# Web-tuk-tak
If you are Bangla speaker you can probably guess the intent of this repo from the name! If you don't, let me explain.

I am mainly a back-end person. You can probably guess from my bad front end design in this repo. Anyway, this repo acts as a cheet-sheet for the things I have learnt working with client side javascript works.

Some of the highlights are:

- **A dynamic html table** where you can add/remove row to input varibale number of data. This is done with HTML and _Vanilla JavaScript_. Also you can get the input data as _JSON_.

- **From data as Json**, where you can get all the data of a form as _JSON_. I used this to handle _form within a form_ situation in a project.

- **Sending POST request with `fetch()` :** In this I sent form data in **POST** request as `url-encoded` data like tradional HTML form and also `multipart form data`. It is useful for sending _AJAX_ as post requst.

- **Set `input` field filter :** I found this function from `stack overflow`. This restricts the keyboard input of a text field to a certain pattern which can be supplied as `regular expression`.

- **Flatten Array :** this function flattens a JS array. By flattening, I mean to remove nested array structures and makes the array an 1-d array. For example,


    `Input [1,4,5,[7,-8],4,[5,[4,[8,7]]],5]`


    `Output [1,4,5,7,-8,4,5,4,8,7,5]`