/// <reference path="../reference.ts" />

module DDD {

    export class Identity<T> {

        constructor(private value: T) {
            return this.value;
        }

    }

}
