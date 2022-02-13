var selectedTab = "";

function mostrar (elemento) {
	var info = document.getElementById(elemento)
	info.style.display = 'block'
	if (elemento != 'oscuro') {
		selectedTab = elemento
	}
}

function ocultar (elemento) {
	var info = document.getElementById(elemento)
	info.style.display = 'none'
}

function oscuro() {
	var nos = document.getElementById(selectedTab)
	nos.style.backgroundColor = '#633974'

	var parrafo = document.getElementsByTagName('p')
	if (selectedTab == 'quien') {
		parrafo[1].style.color = '#EBDEF0'
		parrafo[2].style.color = '#ffffff'
		parrafo[3].style.color = '#EBDEF0'
		parrafo[4].style.color = '#ffffff'
	} else if (selectedTab == 'mercaderia') {
		parrafo[5].style.color = '#EBDEF0'
		parrafo[6].style.color = '#ffffff'
		parrafo[7].style.color = '#EBDEF0'
	} else {
		parrafo[8].style.color = '#EBDEF0'
		parrafo[9].style.color = '#ffffff'
		parrafo[10].style.color = '#EBDEF0'
	}
	/*var nos = document.getElementById('quien')
	nos.style.backgroundColor = '#633974'

	var parrafo = document.getElementsByTagName('p')
	parrafo[1].style.color = '#EBDEF0'
	parrafo[2].style.color = '#ffffff'
	parrafo[3].style.color = '#EBDEF0'
	parrafo[4].style.color = '#ffffff'*/
}





