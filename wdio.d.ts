declare namespace WebdriverIO {
    interface Element {
        example: (selector: string) => ChainablePromiseElement<Promise<WebdriverIO.Element>>
    }
}