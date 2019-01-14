function signInListener(email, password) {
	firebase.auth().signInWithEmailAndPassword(email, password)
	.then(function() {
		console.log(email)
		window.location.replace("./user.html");
	})
	.catch(function(error) {
		alert(error)
	});
}

function signUpListener(email, password) {
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		alert(error)
	});
}

function googleListener() {
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider)
	.then(function(result) {
		window.location.replace("./user.html");
	})
	.catch(function(error) {
		alert(error)
	});
}
