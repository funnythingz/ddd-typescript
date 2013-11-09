/// <reference path="../../definitions/mocha.d.ts" />
/// <reference path="../../definitions/chai.d.ts" />

/// <reference path="../../src/ddd/entity.ts" />
/// <reference path="../../src/ddd/identity.ts" />

module DDD {

    var expect = chai.expect;

    describe("Entity", function() {

        var id_1: Identity<number> = new Identity(1);
        var id_2: Identity<number> = new Identity(2);

        var entity_1: Entity<Identity<number>> = new Entity(id_1);
        var entity_2: Entity<Identity<number>> = new Entity(id_2);

        it("should be entity_1 has id_1", function() {
            expect(entity_1.getIdentity()).to.equals(id_1);
        });

        it("should be entity_1 equals to entity_1", function() {
            expect(entity_1.equals(entity_1)).to.be.true;
        });

        it("should be entity_1 not equals to entity_2", function() {
            expect(entity_1.equals(entity_2)).to.not.be.true;
        });

    });

}
