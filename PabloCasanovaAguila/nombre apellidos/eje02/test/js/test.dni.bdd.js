var expect = chai.expect;
chai.should();

describe("Testing dni", function () {
    it("DNIS válidos", function () {
            validarDNI("80608841M").should.be.equal(true);
            validarDNI("93965009G").should.be.equal(true);
            validarDNI("85931899N").should.be.equal(true);    
            validarDNI("72243059J").should.be.equal(true);
            validarDNI("72243059J").should.be.equal(true);
            validarDNI("02929323C").should.be.equal(true);
            validarDNI("12197029Z").should.be.equal(true);

    });
  
    it("DNIS inválidos", function () {
        // validar validardni
        validarDNI("12345678").should.be.equal(false);
        validarDNI("12345678AA").should.be.equal(false);
        validarDNI("12345678A1").should.be.equal(false);
        validarDNI("12345678A ").should.be.equal(false);
        validarDNI("12345678A1").should.be.equal(false);
        validarDNI("12345678A1").should.be.equal(false);

    });
  
});
