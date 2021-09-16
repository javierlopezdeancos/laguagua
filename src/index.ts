import * as colog from 'cologrinchis';

export type Handler = (message: string, data?: Object) => void;

type Subscriptions = {
  [key: string]: Handler[];
};
export interface ILaGuaGua {
  publish: (message: string, data?: Object) => void;
  subscribe: (message: string, trigger: Handler) => void;
  clear: () => void;
}

class LaGuaGua implements ILaGuaGua {
  subscriptions: Subscriptions;

  constructor() {
    colog.info('bus', 'New bus');
    this.subscriptions = {} as Subscriptions;
  }

  public publish(message: string, data?: Object): void {
    colog.info('bus', 'Publish ' + message);

    const handlers = this.subscriptions[message];

    if (handlers) {
      handlers.forEach((h: Handler): void => {
        if (message) {
          colog.info('bus', `Reached trigger for ${message}`);
        }

        if (handlers?.length) {
          colog.log('bus', `with count: ${handlers.length}`);
        }

        if (data) {
          colog.log('bus', `and data:  ${data}`);
        }

        h(message, data);
      });
    }
  }

  public subscribe(message: string, trigger: Handler) {
    colog.info('bus', `Subscribe ${message}`);

    if (this?.subscriptions[message] === undefined) this.subscriptions[message] = [];

    colog.info('bus', `Pushing trigger for ${message}`);
    this.subscriptions[message].push(trigger);
  }

  public clear() {
    colog.info('bus', 'Clear');
    this.subscriptions = {} as Subscriptions;
  }
}

export default LaGuaGua;

export const laGuaGua = new LaGuaGua();
