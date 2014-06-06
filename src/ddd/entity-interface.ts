/// <reference path="identity.ts" />

module DDD {

    export interface IEntity<T extends IIdentity> {

        getIdentity(): T;

        equals(other: IEntity<T>): boolean;

    }

}
