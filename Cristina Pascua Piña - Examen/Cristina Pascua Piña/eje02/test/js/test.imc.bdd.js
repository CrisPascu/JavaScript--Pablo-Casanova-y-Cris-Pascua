var expect = chai.expect;
chai.should();

describe("Testing IMC", function () {
    it("hombre mayor 18", function () {
        calcularIMC(1.8,3.24*18,"hombre",24).should.be.equal("18.0 - bajo peso"); 
        calcularIMC(1.8,58.644 ,"hombre",18).should.be.equal("18.1 - peso normal"); 
        calcularIMC(1.8,81.648,"hombre",18).should.be.equal("25.2 - sobrepeso"); 
        calcularIMC(1.8,97.848,"hombre",45).should.be.equal("30.2 - obesidad"); 

    });
    
    it("mujer mayor 18", function () {
        calcularIMC(1.7,51.41,"mujer",24).should.be.equal("17.8 - bajo peso");
        calcularIMC(1.7,52.2,"mujer",18).should.be.equal("18.1 - peso normal");  
        calcularIMC(1.7, 74.52,"mujer",45).should.be.equal("25.8 - sobrepeso"); 
        calcularIMC(1.7,82,"mujer",18).should.be.equal("28.4 - obesidad"); 
    });    
       
    it("hombre  17", function () {
        calcularIMC(1.8,3.24*18,"hombre",17).should.be.equal("18.0 - bajo peso"); 
        calcularIMC(1.8,3.24*18.1 ,"hombre",17).should.be.equal("18.1 - peso normal"); 
        calcularIMC(1.8,3.24*25.7,"hombre",17).should.be.equal("25.7 - sobrepeso"); 
        calcularIMC(1.8,3.24*28.4,"hombre",17).should.be.equal("28.4 - obesidad"); 


    });
    
    it("mujer  17", function () {
        calcularIMC(1.7,2.89*18.1,"mujer",17).should.be.equal("18.1 - bajo peso");
        calcularIMC(1.7,2.89*18.2,"mujer",17).should.be.equal("18.2 - peso normal");  
        calcularIMC(1.7, 2.89*24.7,"mujer",17).should.be.equal("24.7 - sobrepeso"); 
        calcularIMC(1.7,2.89*30,"mujer",17).should.be.equal("30.0 - obesidad"); 
    });  

    it("hombre  16", function () {
        calcularIMC(1.8,3.24*17.6,"hombre",16).should.be.equal("17.6 - bajo peso"); 
        calcularIMC(1.8,3.24*17.7 ,"hombre",16).should.be.equal("17.7 - peso normal"); 
        calcularIMC(1.8,3.24*26.9,"hombre",16).should.be.equal("26.9 - sobrepeso"); 
        calcularIMC(1.8,3.24*31.2,"hombre",16).should.be.equal("31.2 - obesidad"); 


    });
    
    it("mujer  16", function () {
        calcularIMC(1.7,2.89*17.6,"mujer",16).should.be.equal("17.6 - bajo peso");
        calcularIMC(1.7,2.89*17.7,"mujer",16).should.be.equal("17.7 - peso normal");  
        calcularIMC(1.7, 2.89*27.8,"mujer",16).should.be.equal("27.8 - sobrepeso"); 
        calcularIMC(1.7,2.89*27.9,"mujer",16).should.be.equal("27.9 - obesidad"); 
    });  
  
});
