require('../../server.babel');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];
Object.values = x =>
    Object.keys(x).reduce((y, z) =>
        y.push(x[z]) && y, []);

Object.entries = x =>
    Object.keys(x).reduce((y, z) =>
        y.push([z, x[z]]) && y, []);


global.window = (new JSDOM(``)).window;
global.document = global.window.document;
Object.keys(document).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document[property];
  }
});
global.fetch = () => Promise.resolve()
global.navigator = {
  userAgent: 'node.js'
};

documentRef = global.document;
