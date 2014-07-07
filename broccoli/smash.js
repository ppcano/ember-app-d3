var Writer = require('broccoli-writer');
var RSVP = require('rsvp');
var Promise = require('rsvp').Promise;
var smash = require('smash');
var walkSync = require('walk-sync');
var fs = require('fs');

function SmashFilter(inputTree, options) {
	if (!(this instanceof SmashFilter)) {
		return new SmashFilter(inputTree, options);
	}

  this.inputTree = inputTree;
  this.input = options.input || 'd3.js';;
  this.output = options.output || 'd3.js';
}

SmashFilter.prototype = Object.create(Writer.prototype);
SmashFilter.prototype.constructor = SmashFilter;

SmashFilter.prototype.extensions = ['js'];
SmashFilter.prototype.targetExtension = 'js';


SmashFilter.prototype.write = function (readTree, destDir) {
    
  var input = this.input;
  var output = destDir+'/'+this.output;

  return readTree(this.inputTree).then(function(srcDir) {

    input = srcDir+'/'+input;

    return new Promise(function(resolve, reject) {

      var w = fs.createWriteStream(output);
      w.on('finish', function(){
        resolve();
      })

      smash([input]).pipe(w);
    });


  })

};

module.exports = SmashFilter;
