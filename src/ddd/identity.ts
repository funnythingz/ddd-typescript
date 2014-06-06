/// <reference path="identity-interface.ts" />

module DDD {

    export class Identity implements IIdentity {

        constructor(private value: string) {}

        getValue(): string {
            return this.value;
        }

    }

}
