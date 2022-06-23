type MyConcat<T extends any[], U extends any[]> = [...T, ...U]

type aconcat = [number, string]

type bconcat = [number, boolean]

type cconcat = MyConcat<aconcat, bconcat>