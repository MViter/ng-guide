import * as firebase from 'firebase';

export class AuthService {
    signupUser(email: string, password: string) {
        console.log(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        console.log('sign in,', email, password)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log(response)
            )
            .catch(
                error => console.log(error)
            )
    }

    getToken() {
        return firebase.auth().currentUser.getIdToken();
    }
}