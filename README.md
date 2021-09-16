![logo](assets/img/logo.jpg)

# La GuaGua

Another typescript bus event.


## Why?

Why not.

## Install

```
npm i laguagua --save
```

## Usage

### Import

```typescript
import { laGuaGua } from 'laguagua';
```

### Interface
Review and use to your implementations how the Laguagua interface looks

```typescript
export interface ILaGuaGua {
  publish: (message: string, data?: Object) => void;
  subscribe: (message: string, trigger: Handler) => void;
  clear: () => void;
}
```

### Publish
publish an event message.

```typescript
bus.publish('bus::stop');
```

### Subscribe
Subscribe into an event message.

```typescript
const eventHandler = (message, data) => console.log(message);
bus.subscribe('bus::stop', eventHandler);
```

### Clear
Clear all bus subscriptions.

```typescript
bus.clear();
```
