import { expect, test, describe } from 'vitest'
//como a exportação nao e default, vai utilizar curly brackts para importar
import { createElement } from '../utils/dom.js'


describe('createElement Function', () => {

    test('Case 1 - tagName and Id', () => {
        const tagName = 'div'
        const props = { 'id': 'container' }
        const element = createElement(tagName, props)

        expect(element).toBeInstanceOf(HTMLDivElement)
        expect(element.id).toBe(props.id)
    })

    test('Case 2 - tagName and class', () => {
        const tagName = 'h1'
        const props = { 'class': 'title' }
        const element = createElement(tagName, props)

        expect(element).toBeInstanceOf(HTMLHeadingElement)
        expect(element.id).toBe('')
        expect(element.className).toBe(props.class)
    })

    test('Case 3 - tagName, id and class', () => {
        const tagName = 'p'
        const props = { 'id': 'description', 'class': 'title', 'data-test': 'test' }
        const element = createElement(tagName, props)

        expect(element).toBeInstanceOf(HTMLParagraphElement)

        expect(element.id).toBe(props.id)
        expect(element.className).toBe(props.class)
        expect(element.dataset.test).toBe(props['data-test'])
    })

    test('Case 4 - tagName and no props', () => {
        const tagName = 'button'
        const element = createElement(tagName)

        expect(element).toBeInstanceOf(HTMLButtonElement)
        expect(element.id).toBe('')
    })

    describe('ERROR CASES', () => {
        test('Case no tagname', () => {
            expect(createElement).toThrow(new Error('tagName is required'))
        })
    
        test('Case props is not an object', () => {
                const tagName = 'p'
                const props = 'string'
                expect(() => createElement(tagName, props)).toThrow(new Error('props must be an object'))    
        })
    })    
})
