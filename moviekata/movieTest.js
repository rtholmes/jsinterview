
var applyTickets = function(cashReg, runtime, day, isParquet, is3D, tickets) {
    var i;
    cashReg.startPurchase(runtime, day, isParquet, is3D);
    for (i = 0; i < tickets.length; i++) {
        cashReg.addTicket(tickets[i][0], tickets[i][1]);
    }
    return cashReg;
};

var calc = function(runtime, day, isParquet, is3D, tickets) {
    var cashReg = new MovieCashRegister();
    applyTickets(cashReg, runtime, day, isParquet, is3D, tickets);
    return cashReg.finishPurchase();
};

test( "No tickets costs zero", function() {
    equal(calc(0, DayEnum.MON, false, false, [ ]), 0);
});

test( "2D, parquet, tuesday, mid-age, no student", function() {
    var tickets = [ [35, false], [35, false], [35, false], [35, false] ];
    equal(calc(72, DayEnum.TUE, true, false, tickets), 44.0);
});

test( "3D, parquet, tuesday, mid-age, no student", function() {
    var tickets = [ [35, false], [35, false], [35, false], [35, false] ];
    equal(calc(72, DayEnum.TUE, true, true, tickets), 56.0);
});

test( "3D, loge, tuesday, mid-age, no student", function() {
    var tickets = [ [35, false], [35, false], [35, false], [35, false] ];
    equal(calc(72, DayEnum.TUE, false, true, tickets), 64.0);
});

test( "3D, loge, movie day, mid-age, no student", function() {
    var tickets = [ [35, false], [35, false], [35, false], [35, false] ];
    equal(calc(120, DayEnum.THU, false, true, tickets), 56.0);
});

test( "3D, loge, weekend, mid-age, no student", function() {
    var tickets = [ [35, false], [35, false], [35, false], [35, false] ];
    equal(calc(72, DayEnum.SAT, false, true, tickets), 70.0);
    equal(calc(72, DayEnum.SUN, false, true, tickets), 70.0);
});

test( "overlength, 2D, parquet, wednesday, mid-age, no student", function() {
    var tickets = [ [35, false], [35, false], [35, false], [35, false] ];
    equal(calc(145, DayEnum.WED, true, false, tickets), 50.0);
});

test( "overlength, 2D, parquet, wednesday, mid-age, students", function() {
    var tickets = [ [35, false], [35, false], [64, true], [35, true] ];
    equal(calc(121, DayEnum.WED, true, false, tickets), 44.0);
});

test( "overlength, 2D, parquet, monday, senior, no students", function() {
    var tickets = [ [35, false], [35, false], [64, false], [65, false] ];
    equal(calc(123, DayEnum.MON, true, false, tickets), 45.0);
});

test( "overlength, 2D, parquet, tuesday, senior students", function() {
    var tickets = [ [35, false], [35, false], [64, false], [68, true] ];
    equal(calc(145, DayEnum.TUE, true, false, tickets), 45.0);
});

test( "overlength, 2D, parquet, tuesday, 1 child, no students", function() {
    var tickets = [ [35, false], [35, false], [64, false], [10, false] ];
    equal(calc(145, DayEnum.TUE, true, false, tickets), 44.5);
});

test( "2D, parquet, tuesday, group, no students", function() {
    var tickets = [ ], i;
    for (i = 0; i < 23; i++) {
        tickets.push([35, false]);
    }
    equal(calc(72, DayEnum.TUE, true, false, tickets), 138.0);
});

test( "3D, parquet, tuesday, group, no students", function() {
    var tickets = [ ], i;
    for (i = 0; i < 23; i++) {
        tickets.push([35, false]);
    }
    equal(calc(72, DayEnum.TUE, true, true, tickets), 207.0);
});

test( "2D, group of kids with two adults", function() {
    var tickets = [ ], i;
    for (i = 0; i < 24; i++) {
        tickets.push([12, false]);
    }
    tickets.push([45, false]);
    tickets.push([27, false]);
    equal(calc(72, DayEnum.FRI, true, false, tickets), 144.0);
});

test( "2D, 17 kids with two adults", function() {
    var tickets = [ ], i;
    for (i = 0; i < 17; i++) {
        tickets.push([12, false]);
    }
    tickets.push([45, false]);
    tickets.push([27, false]);
    equal(calc(72, DayEnum.WED, true, false, tickets), 115.5);
});

test( "overlength, loge, 3D, movie-day group", function() {
    var tickets = [ ], i;
    for (i = 0; i < 5; i++) {
        tickets.push([12, false]);
    }
    for (i = 0; i < 7; i++) {
        tickets.push([45, false]);
    }
    for (i = 0; i < 4; i++) {
        tickets.push([75, false]);
    }
    for (i = 0; i < 8; i++) {
        tickets.push([27, true]);
    }
    equal(calc(125, DayEnum.THU, false, true, tickets), 297.5);
});

test( "overlength, loge, 3D, movie-day non-group", function() {
    var tickets = [ ], i;
    for (i = 0; i < 2; i++) {
        tickets.push([12, false]);
    }
    for (i = 0; i < 7; i++) {
        tickets.push([45, false]);
    }
    for (i = 0; i < 4; i++) {
        tickets.push([75, false]);
    }
    for (i = 0; i < 4; i++) {
        tickets.push([27, true]);
    }
    equal(calc(125, DayEnum.THU, false, true, tickets), 220.5);
});

test( "multiple transactions, same register", function() {
    var cashReg, tickets;

    cashReg = new MovieCashRegister();
    tickets = [ [35, false], [35, false], [35, false], [35, false], [35, false] ];

    applyTickets(cashReg, 90, DayEnum.MON, true, true, tickets);
    equal(cashReg.finishPurchase(), 70.0);

    applyTickets(cashReg, 90, DayEnum.MON, true, true, tickets);
    equal(cashReg.finishPurchase(), 70.0);
});
