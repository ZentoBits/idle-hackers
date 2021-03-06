app.factory("AuthFactory", function() {

	let currentUserId = null;
	let provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log("user logged in", user.uid);
			currentUserId = user.uid;
		} else {
			console.log("user not logged in");
		}
	});

	let authWithProvider = function() {
		return firebase.auth().signInWithPopup(provider);
	};

	let logout = function() {
		currentUserId = null;
		return firebase.auth().signOut();
	};

	let isAuthenticated = function() {
		return (currentUserId) ? true : false;
	};

	let getUser = function() {
		return currentUserId;
	};

	return { authWithProvider, isAuthenticated, getUser, logout };
});





