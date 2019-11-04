describe("FizzBuzzTest", function() {
   beforeEach(function() {
      fizztest = new fizz();
   })

   describe("Checks number", function() {
      it("should return FizzBuzz", function() {
         var result = fizz(15);
         expect(result).toBe("FizzBuzz");
      });
      it("should return Fizz", function() {
         var result = fizz(10);
         expect(result).toBe("Fizz");
      });
      it("should return num", function() {
         var result = fizz(11);
         expect(result).toBe(11);
      });
   });
});