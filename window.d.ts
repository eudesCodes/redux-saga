/* eslint-disable no-undef */

/**
 * To add a new property and prevent any compile error,
 * you can use an interface to describe the Window with your
 * new property. In TypeScript, interfaces fill the role of naming types,
 * and are a powerful way of defining contracts within your code as well as
 * contracts with code outside of your project.
 */
interface Window {
    env: any;
    // eslint-disable-next-line no-unused-vars
    attachEvent(event: string, listener: EventListener): boolean;
    // eslint-disable-next-line no-unused-vars
    detachEvent(event: string, listener: EventListener): void;
}

// eslint-disable-next-line no-unused-vars
declare const window: Window; /// we can use const something = "env" => i2vwindow[something]

/**
 * On the other hand, if you don't care about the typings of external
 * libraries and want all libraries , you can add this line of code:
 */

declare module '*';
