## JavaScript coding exercise

You work at a movie theatre and need a program to calculate ticket prices. The rates are as follows:


Basic admission rates (regular weekday, 2D movie, <=120 min, standard "parquet" seats)

|  Type       | Price  |
|--------------|-------------|
| General admission | $11.00 |
| Students  | $8.00 |
| Seniors (65 & older) | $6.00 |
| Children (under 13) | $5.50 |
| Group (20 people or more) | $6.00 each |

However, the following exceptions apply, per person:

| Exception |  Price change |
|--------------|-------------|
| 3D movie | +$3.00 |
| Over-length (more than 120 min.) | +$1.50 |
| Movie Day (Thursday, except for groups!) | -$2.00 |
| Weekends | +$1.50 |
| Fancy "loge" seats | +$2.00 |

In the case of any ambiguity, you should give your customers
the lowest possible price to keep them happy.

To complete this exercise, fill in the three functions in _movie.js_:
`startPurchase`, `addTicket`, and `finishPurchase` (which returns the total in dollars).

You are provided with a suite of 20 tests in _movieTest.js_. To run the tests,
open _index.html_ in your web browser and refresh. You can use these tests
to keep track of your progress.
