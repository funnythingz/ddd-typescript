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
            return this.value;
        }
        return Identity;
    })();
    DDD.Identity = Identity;
})(DDD || (DDD = {}));
