export declare type Handler = (message: string, data?: Object) => void;
declare type Subscriptions = {
    [key: string]: Handler[];
};
export interface ILaGuaGua {
    publish: (message: string, data?: Object) => void;
    subscribe: (message: string, trigger: Handler) => void;
    clear: () => void;
}
declare class LaGuaGua implements ILaGuaGua {
    subscriptions: Subscriptions;
    constructor();
    publish(message: string, data?: Object): void;
    subscribe(message: string, trigger: Handler): void;
    clear(): void;
}
export default LaGuaGua;
export declare const laGuaGua: LaGuaGua;
