/// <reference path="../../definitions/mocha.d.ts" />
/// <reference path="../../definitions/chai.d.ts" />

/// <reference path="../../src/ddd/identity.ts" />

module DDD {

    var expect = chai.expect;

    describe("Identity", function() {

        it("should be identity has `id_hoge`", function() {
            var identity: Identity = new Identity('id_hoge');
            expect(identity.getValue()).be.equal('id_hoge');
        });

    });

}
