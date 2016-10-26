export default class LoginController {
    constructor(factory) {
        this.name = 'login';
    }

    $onInit() {
        console.log('LoginController Init');
    }
}

LoginController.$inject = ['login.factory'];