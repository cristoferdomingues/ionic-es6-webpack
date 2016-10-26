export default class <%= upCaseName %>Controller {
    constructor(factory) {
        this.name = '<%= name %>';
    }

    $onInit() {
        console.log('<%= upCaseName %>Controller Init');
    }
}

<%= upCaseName %>Controller.$inject = ['<%= name %>.factory'];