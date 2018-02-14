function Classrooming() {
	
var CLASSING = document.getElementById("Classroom").value;

switch (CLASSING) {
    case 'french':
			CLASSING = "french"
		break;
    case 'science':
			CLASSING = "science"
        break;
    case 'english':
			 CLASSING = "english"
        break;
    case 'math':
			CLASSING = "math"
        break;
    case 'computer prog.':
			 CLASSING= "computer prog."
        break;
    case 'architecture':
			 CLASSING = "architecture"
        break;
    case 'speech':
			CLASSING = "speech"
		break;
	case 'history':
			CLASSING = "history"
		break;
	case 'religion':
			CLASSING = "religion"
		break;
	case 'early':
			CLASSING = "early"
		break;
	case 'level assembly':
			CLASSING = "level assembly"
		break;
	case 'late start':
			 CLASSING = "late start"
		break;
	case 'homeroom':
			CLASSING = "homeroom"
		break;
}
var WhichClass = document.getElementsByName(CLASSING);

		for (i = 0; i < CLASSING.lenght; i++) {
			CLASSING[i].style.backgroundColor = "#7FFF00";
			}
}	


	
	
	
	
	
	