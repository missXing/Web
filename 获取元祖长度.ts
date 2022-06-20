type Length<T extends readonly any[]> = T['length']

const tesla = ['tesla', 'model 3', 3, 'model Y'] as const

type len = Length<typeof tesla>