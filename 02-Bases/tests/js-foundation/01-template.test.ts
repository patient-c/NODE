import { emailTemplate } from "../../src/js-foundation/01-template";

describe('js-foundation/01-template', () => {
    test('emailTemplate should containt a greeting', () => {
        expect( emailTemplate ).toContain('Hi, ') //  Esperamos que el emailTemplate contenga "Hi, "
    })

    test('emailTemplate should contain {{name}} and {{orderId}}',() => {
        expect(emailTemplate).toContain('{{name}}')
        expect(emailTemplate).toContain('{{orderId}}')
    })
})