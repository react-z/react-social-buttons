var chai = require('chai');
var contentEdit = require('../lib/FacebookLikeButton');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('FacebookLikeButton()', function() {  
    
    it('should be defined', function() {
    	var el = document.getElementById("fbbutton");
        assert.equal(el, undefined);
    })
})