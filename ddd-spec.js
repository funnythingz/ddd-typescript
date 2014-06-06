var DDD;
(function (DDD) {
    var Identity = (function () {
        function Identity(value) {
            this.value = value;
        }
        Identity.prototype.getValue = function () {
            return this.value;
        };
        return Identity;
    })();
    DDD.Identity = Identity;
})(DDD || (DDD = {}));
var DDD;
(function (DDD) {
    var Entity = (function () {
        function Entity(identity) {
            this.identity = identity;
        }
        Entity.prototype.getIdentity = function () {
            return this.identity;
        };

        Entity.prototype.equals = function (other) {
            return this.getIdentity() === other.getIdentity();
        };
        return Entity;
    })();
    DDD.Entity = Entity;
})(DDD || (DDD = {}));
var DDD;
(function (DDD) {
    var expect = chai.expect;

    describe("Entity", function () {
        var id1 = new DDD.Identity('id1');
        var id2 = new DDD.Identity('id2');

        var entity1 = new DDD.Entity(id1);
        var entity2 = new DDD.Entity(id2);

        it("should be entity1 has id1", function () {
            expect(entity1.getIdentity()).to.equals(id1);
        });

        it("should be entity1 equals to entity1", function () {
            expect(entity1.equals(entity1)).to.be.true;
        });

        it("should be entity1 not equals to entity2", function () {
            expect(entity1.equals(entity2)).to.not.be.true;
        });
    });
})(DDD || (DDD = {}));
var DDD;
(function (DDD) {
    var expect = chai.expect;

    describe("Identity", function () {
        it("should be identity has `id_hoge`", function () {
            var identity = new DDD.Identity('id_hoge');
            expect(identity.getValue()).be.equal('id_hoge');
        });
    });
})(DDD || (DDD = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var DDD;
(function (DDD) {
    var expect = chai.expect;

    var Pokemon = (function (_super) {
        __extends(Pokemon, _super);
        function Pokemon(identity) {
            _super.call(this, identity);
        }
        return Pokemon;
    })(DDD.Entity);
    DDD.Pokemon = Pokemon;

    var PokemonID = (function (_super) {
        __extends(PokemonID, _super);
        function PokemonID(value) {
            _super.call(this, value);
        }
        return PokemonID;
    })(DDD.Identity);
    DDD.PokemonID = PokemonID;

    describe("Pokemon", function () {
        var id_001 = new PokemonID('001');
        var pokemon_1 = new Pokemon(id_001);

        var id_002 = new PokemonID('002');
        var pokemon_2 = new Pokemon(id_002);

        it("should be pokemon_1 has id_001", function () {
            expect(pokemon_1.getIdentity().getValue()).to.equals(id_001.getValue());
        });

        it("should be pokemon_1 equals to pokemon_1", function () {
            expect(pokemon_1.equals(pokemon_1)).to.be.true;
        });

        it("should be pokemon_1 not equals to pokemon_2", function () {
            expect(pokemon_1.equals(pokemon_2)).to.not.be.true;
        });
    });
})(DDD || (DDD = {}));
//# sourceMappingURL=ddd-spec.js.map
