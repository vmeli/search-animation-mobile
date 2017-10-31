var search = document.getElementById('btn-MainMenu-search-mobile');
var molNavMain = document.getElementById('mol-nav_Main');

search.onclick = function(e) {
	e.preventDefault();
	molNavMain.classList.toggle('active');
}