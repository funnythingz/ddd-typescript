/// <reference path="../reference.ts" />

module DDD {

    export class Entity implements IEntity {

        constructor(
            private identity: Identity<any>
        ) {}

        getIdentity(): Identity<any> {
            return this.identity;
        }

        equals(other: Entity): boolean {
            if(this.getIdentity() === other.getIdentity()) {
                return true;
            }
            return false;
        }
    }

}
