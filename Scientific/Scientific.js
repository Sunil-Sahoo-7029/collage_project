function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

function sin(){
	document.calcul.result.value=Math.sin(document.calcul.result.value);
	}

	function cos(){
	document.calcul.result.value=Math.cos(document.calcul.result.value);
	}

	function tan(){
	document.calcul.result.value=Math.tan(document.calcul.result.value);
	}

	function BACKSPC(){
	var a = document.calcul.result.value;
	document.calcul.result.value = a.substr(0, a.length-1);
	}

	function square(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 2);
	}

	function cubed(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 3);
	}

	function sqrt2(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/2);
	}

	function sqrt3(){
	document.calcul.result.value = Math.pow(document.calcul.result.value, 1/3);
	}

	function number(value){
	document.calcul.result.value += value;
	}

	function remv(){
	document.calcul.result.value=" ";
	}

	function equal(){
	document.calcul.result.value=eval(document.calcul.result.value);
	}