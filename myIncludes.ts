import {Equal} from './utils'

// type MyIncludes<T extends readonly any[], U> = U extends T[number] ? true : false


type MyIncludes<T extends readonly any[], U> = T extends [infer A, ...infer B] ? Equal<U, A> extends true ? true : MyIncludes<B, U> : false

type aIncludes = [1 | 2]

type bIncludes = 1

type cIncludes = MyIncludes<aIncludes, bIncludes>

type testInclude = aIncludes[number]
