describe('BmiService', function(){
    
    it('should calculate the BMI given a weight and height', function() {
       expect(BmiService.getIndex(75, 1.71)).toBeCloseTo(25.64891761567662 ); 
    });
    
    it('should return null for a non valid number', function() {
        expect(BmiService.getIndex('a','b')).toBeCloseTo(null); 
        expect(BmiService.getIndex(1,'b')).toBeCloseTo(null); 
        expect(BmiService.getIndex('a',2)).toBeCloseTo(null); 
        expect(BmiService.getIndex('')).toBeCloseTo(null); 
        expect(BmiService.getIndex()).toBeCloseTo(null); 
    });
});