/// <reference path="identity.ts" />
/// <reference path="entity-interface.ts" />

module DDD {

    export class Entity<ID extends Identity> implements IEntity<IIdentity> {

        constructor(private identity: ID) {}

        getIdentity(): ID {
            return this.identity;
        }

        equals(other: Entity<ID>): boolean {
            return this.getIdentity() === other.getIdentity();
        }

    }

}
