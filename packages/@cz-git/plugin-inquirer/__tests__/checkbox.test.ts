import { beforeEach, describe, expect, it, vitest } from 'vitest'
import { SearchCheckbox } from '@cz-git/inquirer'
import inquirer from 'inquirer'
import ReadlineStub from './helpers/readline'

/**
 * @description: Test - inquirer plugin: SearchCheckbox
 */

describe('inquirer-SearchCheckbox', () => {
    let rl: any
    let source: any
    /** call the source */
    let resolve: any
    let prompt: SearchCheckbox
    let promise: any
    let promiseForAnswer: any
    let defaultChoices: any

    beforeEach(() => {
        defaultChoices = ['foo', new inquirer.Separator(), 'bar', 'bum']
        promise = new Promise((res) => {
            resolve = res
        })
        source = vitest.fn(() => promise)

        rl = new ReadlineStub()
        prompt = new SearchCheckbox(
            {
                message: 'test',
                name: 'name',
                source,
            } as any,
            rl,
            {},
        )
    })

    describe('basic feature', () => {
        describe('parameter', () => {
            it('name should be require', () => {
                expect(() => {
                    new SearchCheckbox(
                        {
                            message: 'test',
                            source,
                        } as any,
                        rl,
                        {},
                    )
                }).toThrowError(/name/)
            })

            it('source should be require', () => {
                expect(() => {
                    new SearchCheckbox(
                        {
                            name: 'foo',
                            message: 'foo',
                        } as any,
                        rl,
                        {},
                    )
                }).toThrowError(/source/)
            })
        })

    // validation
    // submit
    // filter
    // deafult
    })

    describe('main behaviour', () => {
        describe('default behaviour', () => {
            it('default chioes and enter should be the first to selected item', async () => {
                prompt = new SearchCheckbox(
                    {
                        message: 'test',
                        name: 'name',
                        source,
                    } as any,
                    rl,
                    {},
                )
                promiseForAnswer = getPromiseForAnswer()
                await resolve([9, 0, 'foo'])
                await promise.then()
                space()
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual([9])
            }, 1000)
        })

        describe('keyPress behaviour', () => {
            let promiseForAnswer: any
            beforeEach(() => {
                promiseForAnswer = getPromiseForAnswer()
                resolve(defaultChoices)
            })

            it('use keypress down andchioce should be normal', async () => {
                moveDown()
                space()
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual(['bar'])
            }, 1000)

            it('use keypress down and up should be normal', async () => {
                moveDown()
                moveDown()
                moveUp()
                space()
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual(['bar'])
            }, 1000)

            it('space cancel choices should be normal', async () => {
                moveUp()
                space()
                space()
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual([])
            }, 1000)

            it('use right key cancel choices should be normal', async () => {
                moveUp()
                moveRight()
                moveRight()
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual([])
            }, 1000)

            it('use loop choices down should be normal', async () => {
                tab()
                tab()
                moveDown()
                moveRight()
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual(['foo'])
            }, 1000)

            it('use loop choices up should be normal', async () => {
                moveUp()
                moveRight()
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual(['bum'])
            }, 1000)

            it('use tab and space. the cursor position should be right', async () => {
                tab()
                tab()
                space()
                expect(getCursor()).toEqual(0)
                enter()
                const answer = await promiseForAnswer.then()
                expect(answer).toEqual(['bum'])
            }, 1000)
        })

        describe('search behaviour', async () => {
            beforeEach(async () => {
                getPromiseForAnswer()
                source.mockReset()
                source.mockReturnValue(promise)
            })

            it('when user types should be call searche after each char', async () => {
                type('a')
                expect(source).toBeCalledWith({}, 'a')
                type('bba')
                expect(source).toBeCalledWith({}, 'ab')
                expect(source).toBeCalledWith({}, 'abb')
                expect(source).toBeCalledWith({}, 'abba')
                expect(source).toBeCalledTimes(4)
            }, 1000)

            it('if same searchterm (not input added) should be does not search again', async () => {
                type('ice')
                expect(source).toBeCalledTimes(3)
                source.mockReset()
                typeNonChar()
                expect(source).toBeCalledTimes(0)
            }, 1000)
        })
    })

    /** start prompt run */
    function getPromiseForAnswer() {
        return prompt.run()
    }

    function enter() {
        rl.emit('line')
    }

    function space() {
        rl.input.emit('keypress', '', {
            name: 'space',
        })
    }

    function typeNonChar() {
        rl.input.emit('keypress', '', {
            name: 'shift',
        })
    }

    function type(word: string) {
        word.split('').forEach((char) => {
            rl.line += char
            rl.input.emit('keypress', char)
        })
    }

    function moveUp() {
        rl.input.emit('keypress', '', {
            name: 'up',
        })
    }

    function moveRight() {
        rl.input.emit('keypress', '', {
            name: 'right',
        })
    }

    function moveDown() {
        rl.input.emit('keypress', '', {
            name: 'down',
        })
    }

    // function moveUpCtrl() {
    //   rl.input.emit("keypress", "", {
    //     name: "p",
    //     ctrl: true
    //   });
    // }

    // function moveDownCtrl() {
    //   rl.input.emit("keypress", "", {
    //     name: "n",
    //     ctrl: true
    //   });
    // }

    function getCursor() {
        return rl.cursor
    }

    function tab() {
        rl.input.emit('keypress', '', {
            name: 'tab',
        })
    }
})
