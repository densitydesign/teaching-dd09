yFactor = (1*1230)/2807;
yFactor = 0.65;
//alert(window.innerWidth);

var point0 = new Point(190*yFactor, 0);
var point1 = new Point(215*yFactor, 100);
var point2 = new Point(419*yFactor, 200);
var point3 = new Point(537*yFactor, 150);
var point4 = new Point(884*yFactor, 100);
var point5 = new Point(1509*yFactor, 120);
var point6 = new Point(2054*yFactor, 120);
var point7 = new Point(2775*yFactor, 110);
var point8 = new Point(2807*yFactor, 70);

var handleLength = 100;
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
path.strokeColor = '#E35555';
path.strokeWidth = 1;
path.selected = false;
path.position.x -= 190*yFactor;