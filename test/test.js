var chai = require('chai');
var contentEdit = require('../lib/contentEdit');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

describe('contentEdit()', function() {  
    
    it('should place the caret at the start', function() {
    	var el = document.getElementById("content");
    	var result = contentEdit.placeCaretAtStart(el);
        assert.equal(result, undefined);
    })
})