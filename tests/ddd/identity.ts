/// <reference path="../../definitions/mocha.d.ts" />
/// <reference path="../../definitions/chai.d.ts" />

/// <reference path="../../src/ddd/identity.ts" />

module DDD {

    var expect = chai.expect;

    describe("Identity", function() {

        it("should be string identity has `id_hoge`", function() {
            var stringIdentity: Identity<string> = new Identity<string>('id_hoge');
            expect(stringIdentity.getValue()).be.equal('id_hoge');
        });

        it("should be number identity has `123`", function() {
            var numberIdentity: Identity<number> = new Identity<number>(123);
            expect(numberIdentity.getIdentity()).be.equal(123);
        });


    });

}
