//UNO
var selezionato = true;

var point0 = new Point(0, 0);
var point1 = new Point(200, 100);
var point2 = new Point(300, 300);
var link1 = new Path();
link1.selected = selezionato;
link1.strokeColor = '#056996';
link1.add(point0);
link1.add(point1);
link1.add(point2);
link1.smooth();
link1.position += 500;
link1.strokeWidth = 10;

//DUE
var point0 = new Point(0, 0);
var point1 = new Point(200, 100);
var point2 = new Point(300, 200);
var point3 = new Point(400, 150);
var point4 = new Point(500, 100);

var handle1 = new Point(30, 0);
var handle2 = new Point(170, 100);

var wordFrequency = 1;
var wordStream = new Path();
wordStream.strokeColor = '#056996';
wordStream.strokeWidth = wordFrequency;
wordStream.selected = selezionato;
wordStream.add(point0);
wordStream.add(point1);
wordStream.add(point2);
wordStream.add(point3);
wordStream.add(point4);
wordStream.smooth();



//TRE
var point0 = new Point(0, 0);
var point1 = new Point(200, 100);
var point2 = new Point(300, 200);
var point3 = new Point(400, 150);
var point4 = new Point(500, 100);
var point5 = new Point(600, 120);
var point6 = new Point(700, 120);
var point7 = new Point(800, 110);
var point8 = new Point(900, 70);

var handleLength = 50;
var handleIn = new Point(-handleLength, 0);
var handleOut = new Point(handleLength, 0);

var segment1 = new Segment(point0, handleIn, handleOut);
var segment2 = new Segment(point1, handleIn, handleOut);
var segment3 = new Segment(point2, handleIn, handleOut);
var segment4 = new Segment(point3, handleIn, handleOut);
var segment5 = new Segment(point4, handleIn, handleOut);
var segment6 = new Segment(point5, handleIn, handleOut);
var segment7 = new Segment(point6, handleIn, handleOut);

//for (i=1; i=2; i++) {}

var path = new Path(segment1, segment2, segment3, segment4, segment5, segment6, segment7);
path.strokeColor = 'black';
path.selected = true;