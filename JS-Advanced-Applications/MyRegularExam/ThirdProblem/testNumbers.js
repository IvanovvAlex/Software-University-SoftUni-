let {assert} = require('chai');

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

describe("averageSumArray", function() {
 
    it("test1.1", function() {
        let ok = testNumbers.averageSumArray([2,2,0])

        
        expect(testNumbers.averageSumArray([2,2,0])).to.equal(ok);
        expect(testNumbers.averageSumArray([2,2,2])).to.equal(2);


    });

 });


 
     describe("numberChecker", function() {
 
        it("test1.1", function() {
            assert.throw(() => testNumbers.numberChecker(undefined), (Error, 'The input is not a number!'))
            assert.throw(() => testNumbers.numberChecker(isNaN), (Error, 'The input is not a number!'))
            assert.throw(() => testNumbers.numberChecker('as'), (Error, 'The input is not a number!'))
          
 
        });
 
        it("test1.2", function() {
 
            
            expect(testNumbers.numberChecker(5)).to.equal('The number is odd!');         
            expect(testNumbers.numberChecker(6)).to.equal('The number is even!');
        });
 
 
 
        describe("testNumbers", function() {
            describe("sumNumbers", function() {
         
                it("test1.1", function() {
                    expect(testNumbers.sumNumbers(undefined, 5)).to.equal(undefined);
                    expect(testNumbers.sumNumbers(null, 5)).to.equal(undefined);
                    expect(testNumbers.sumNumbers('as', 5)).to.equal(undefined);
                    expect(testNumbers.sumNumbers('as', undefined)).to.equal(undefined);
                  
                    expect(testNumbers.sumNumbers(5, null)).to.equal(undefined);
                    expect(testNumbers.sumNumbers('as', 'asdq')).to.equal(undefined);
                    expect(testNumbers.sumNumbers(5, 'asdq')).to.equal(undefined);
         
         
         
                });
         
                it("test1.2", function() {
                    let num = 10;
                   num= num.toFixed(2);
                    expect(testNumbers.sumNumbers(5, 5)).to.equal(num);
         
                });
         
                it("test1.3", function() {
                    let num = -10;
                   num= num.toFixed(2);
                    expect(testNumbers.sumNumbers(-5, -5)).to.equal(num);
         
                });
             });
         
     });
 
 
   
 
});
