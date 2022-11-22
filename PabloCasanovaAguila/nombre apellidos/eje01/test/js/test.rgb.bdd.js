var expect = chai.expect;
chai.should();


describe("Testing rgb", function () {
    it("Color blanco", function () {
        rgb(255,255,255).should.be.equal("#FFFFFF");
    });
    it("Color rojo", function () {
        rgb(255,0,0).should.be.equal("#FF0000");
    });
    it("Color verde", function () {
        rgb(0,255,0).should.be.equal("#00FF00");
    });
    it("Color azul", function () {
        rgb(0,0,255).should.be.equal("#0000FF");
    });
    it("Color amarillo", function () {
        rgb(255,255,0).should.be.equal("#FFFF00");
    }); 
    it("Color magenta", function () {
        rgb(255,0,255).should.be.equal("#FF00FF");
    });
    it("Color cian", function () {
        rgb(0,255,255).should.be.equal("#00FFFF");
    });
    it("Color  grey 50%", function () {
        rgb(128,128,128).should.be.equal("#808080");
    });
    it("Color  grey 25%", function () { 
        rgb(64,64,64).should.be.equal("#404040");
    });
    it("Color  grey 75%", function () {
        rgb(192,192,192).should.be.equal("#C0C0C0");
    });
    it("Color black 0%", function () {
        rgb(0,0,0).should.be.equal("#000000");
    });
});

describe("rgb: Los decimales, se redondearán al mas cercano", function () {
    it("Color blanco", function () {
        rgb(254.999,255,255).should.be.equal("#FFFFFF");
    });
    it("Color blanco", function () {
        rgb(255,255.1,255).should.be.equal("#FFFFFF");
    });
    it("Color blanco", function () {
        rgb(255,255,255.9).should.be.equal("#FFFFFF");
    });
    it("Color black 0%", function () {
        rgb(0.2,0.0001,0.1).should.be.equal("#000000");
    });
    it("Color magenta ", function () {
        rgb(255,0.1,255).should.be.equal("#FF00FF");
    });
    it("Color amarillo", function () {
        rgb(255,255,-1000).should.be.equal("#FFFF00");
    });      
});

describe("rgb: Los valores muy altos o bajos, se redondearán al mas cercano", function () {
        it("Color blanco", function () {
            rgb(300,255,255).should.be.equal("#FFFFFF");
        });
        it("Color blanco", function () {
            rgb(255,400,255).should.be.equal("#FFFFFF");
        });
        it("Color blanco", function () {
            rgb(255,255,600).should.be.equal("#FFFFFF");
        });
        it("Color black 0%", function () {
            rgb(-100,0,0).should.be.equal("#000000");
        });
        it("Color magenta ", function () {
            rgb(255,-200,255).should.be.equal("#FF00FF");
        });
        it("Color amarillo", function () {
            rgb(255,255,-1000).should.be.equal("#FFFF00");
        });
        it("Color black 0%", function () {
            rgb(-1,-100,-1000).should.be.equal("#000000");
    });
});    




