function Classrooming () {
var COURSESPLACE = document.getElementById("Classroom").value;

switch (COURSESPLACE) {
    case 'french':
			var DVD = document.getElementsByClassName("french");
		break;
    case 'science':
			var DVD = document.getElementsByClassName("science");
        break;
    case 'english':
			var DVD = document.getElementsByClassName("english");
        break;
    case 'math':
			var DVD = document.getElementsByClassName("math");
        break;
    case 'computer prog.':
			var DVD = document.getElementsByClassName("computer prog.");
        break;
    case 'architecture':
			var DVD = document.getElementsByClassName("architecture");
        break;
    case 'speech':
			var DVD = document.getElementsByClassName("speech");
		break;
	case 'history':
			var DVD = document.getElementsByClassName("history");
		break;
	case 'religion':
			var DVD = document.getElementsByClassName("religion");
		break;
	case 'early':
			var DVD = document.getElementsByClassName("early");
		break;
	case 'level assembly':
			var DVD = document.getElementsByClassName("level assembly");
		break;
	case 'late start':
			var DVD = document.getElementsByClassName("late start");
		break;
	case 'homeroom':
			var DVD = document.getElementsByClassName("homeroom");
		break;
}
		for (i = 0; i < DVD.lenght; i++) {
    DVD[i].style.backgroundColour = "#7FFF00";
}
}	


	
	
	
	
	
	