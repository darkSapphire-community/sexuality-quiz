# How Questions are Formatted
This is a guide to specify how questions are formatted.

## Example
Here's an example question to help show visually how questions are formatted.
```js
{
  "question":"What is your sexuality?",
  "answers":[
    {
      "answer":"Heterosexual",
      "results":[
        {
          "att":"heterosexual",
          "value":10
        }
      ]
    },
    {
      "answer":"Homosexual",
      "results":[
        {
          "att":"homosexual",
          "value":10
        }
      ]
    },
    {
      "answer":"Bisexual/Pansexual",
      "results":[
        {
          "att":"heterosexual",
          "value":10
        },
        {
          "att":"homosexual",
          "value":10
        }
      ]
    },
    {
      "answer":"Asexual",
      "results":[
        {
          "att":"allsexual",
          "value":-10
        }
      ]
    }
  ],
  "max":{
    "hetero":10,
    "homo":10,
    "other":10
  }
}
```

## Explanation
The Data is formatted in the [JSON format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON), this means that anything between ```{}``` is an object and anything between ```[]``` is an array, arrays are lists of data, in this case, objects. Within objects, data is defined by a rule of ```"attribute":"value"```.

### Question
The question section contains the text string for the question presented at the top. Make this as clearly written as possible to make the users' response the best it can be.

### Answer
The objects in the answers list are made up of two tags, answer and results. The answer contains a string for the answer as it should be written in the answer box.

#### Results
The results section contains information about the effect this answer will have on the users results. here declare any attributes that should be increased or decreased and how much they should be increased by (negative number to decrease). Theses amounts will then be added to the users total scores for each.

The attributes useable are as follows:
```js
{
  "hetero":0,
  "homo":0,
  "cetero":0,
  "other":0,
  "all":0,
  "heterosexual":0,
  "heteroromantic":0,
  "homosexual":0,
  "homoromantic":0,
  "ceterosexual":0,
  "ceteroromantic":0,
  "othersexual":0,
  "otherromantic":0,
  "allsexual":0,
  "allromantic":0
}
```

Those with out the sexual or romantic suffix will affect both. The "other" tag relates to all genders except female/male as it is challenging to include every gender ever and perhaps other genders can be included in another version of this quiz. The "all" tag effects all values, the "allsexual" effects all sexual values and the "allromantic" attribute affects all romantic values.

There are no values to align with asexual umbrellas or micro-labels as I intend to include these either in a separate quiz or in a later stage of the project.

### Max
The max label declares the amount by which the question can increase at the most. essentially just assign the largest value that you assigned to any attribute in the results section for all answers. This is used so that if the max = 10 and the highest increase is 5, this moves them towards asexuality or a lack of attraction to that gender.
