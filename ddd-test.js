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
            if (this.getIdentity() === other.getIdentity()) {
                return true;
            }
            return false;
        };
        return Entity;
    })();
    DDD.Entity = Entity;
})(DDD || (DDD = {}));
;var DDD;
(function (DDD) {
    var Identity = (function () {
        function Identity(value) {
            this.value = value;
        }
        Identity.prototype.getValue = function () {
            return this.value.toString();
        };

        Identity.prototype.getIdentity = function () {
            return this.value;
        };
        return Identity;
    })();
    DDD.Identity = Identity;
})(DDD || (DDD = {}));
;var DDD;
(function (DDD) {
    var expect = chai.expect;

    describe("Identity", function () {
        it("should be string identity has `id_hoge`", function () {
            var stringIdentity = new DDD.Identity('id_hoge');
            expect(stringIdentity.getValue()).be.equal('id_hoge');
        });

        it("should be number identity has `123`", function () {
            var numberIdentity = new DDD.Identity(123);
            expect(numberIdentity.getIdentity()).be.equal(123);
        });
    });
})(DDD || (DDD = {}));
