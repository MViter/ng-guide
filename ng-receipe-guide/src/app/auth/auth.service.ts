import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token: string;

    constructor (private router: Router) {}

    signupUser(email: string, password: string) {
        console.log('sign up', email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            )
    }

    signinUser(email: string, password: string) {
        console.log('sign in,', email, password)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                    .then(
                        (token: string) => this.token = token
                    )
                }
            )
            .catch(
                error => console.log(error)
            )
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );

        return this.token;
    }

    logout () {
        firebase.auth().signOut();
        this.token = null;
    }

    isAuthenticated () {
        const result = this.token !== null ? 'AUTH!' : 'Not AUTH!';
        console.log(result);
        return this.token !== null;
    }
}