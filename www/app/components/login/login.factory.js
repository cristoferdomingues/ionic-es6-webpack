
let loginFactory = function ($resource) {
  
  let resources = {};

  return $resource('http://pathurl/:url/:id', {}, resources);
};


export default ['$resource', loginFactory];
