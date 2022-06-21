type MyAwaited<T> = T extends Promise<infer S> ? MyAwaited<S> : T

type X = Promise<Promise<string>>

type tt = MyAwaited<X>