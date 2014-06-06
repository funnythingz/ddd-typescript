/// <reference path="../../definitions/mocha.d.ts" />
/// <reference path="../../definitions/chai.d.ts" />

/// <reference path="../../src/ddd/entity.ts" />
/// <reference path="../../src/ddd/identity.ts" />

module DDD {

    var expect = chai.expect;

    describe("Entity", function() {

        var id1: Identity = new Identity('id1');
        var id2: Identity = new Identity('id2');

        var entity1: Entity<Identity> = new Entity(id1);
        var entity2: Entity<Identity> = new Entity(id2);

        it("should be entity1 has id1", function() {
            expect(entity1.getIdentity()).to.equals(id1);
        });

        it("should be entity1 equals to entity1", function() {
            expect(entity1.equals(entity1)).to.be.true;
        });

        it("should be entity1 not equals to entity2", function() {
            expect(entity1.equals(entity2)).to.not.be.true;
        });

    });

}
