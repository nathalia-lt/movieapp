import { expect, test, describe } from 'vitest'

import { numberToMoney, dateStrToYear } from '../utils/parser.js'

describe('numberToMoney', () => {
    test('should return a string with the number formatted as money', () => {
        const result = numberToMoney(1000)
        expect(result).toBe('$ 1000.00')
    })
})


//quando eu coloco .todo, é para avisar que eu ainda estou fazendo a funcao a ser testada. ou se eu quiser desligar o test eu coloco .todo.
describe('dateStrToYear', () => {
    test('should return a number with the year of the date', () => {
        const result = dateStrToYear('2020-02-01')
        expect(result).toBe(2020)
    })

    test('should return current year when a date is not given', () => {
        const result = dateStrToYear()
        expect(result).toBe(2023)
    })
})