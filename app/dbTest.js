function submitClick() {
	var name = document.getElementById('name');
	var address = document.getElementById('address');
	var number = document.getElementById('number');
	var intro = document.getElementById('intro');

	var firebaseRef = firebase.database().ref();
	firebase.push().set(name);
}