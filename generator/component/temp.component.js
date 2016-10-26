import template from './<%= name %>.component.html';
import <%= upCaseName %>Controller from './<%= name %>.controller';

let <%= name %>Component = {
    template: template,
    controller: <%= upCaseName %>Controller,
    bindings:{
        
    }
};


export default <%= name %>Component;
