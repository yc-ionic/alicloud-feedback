# alicloud-feedback

Ionic wrap for [cordova-plugin-alicloud-feedback](https://github.com/yccp/cordova-plugin-alicloud-feedback.git)

## Installation

1. Install the Cordova plugin [cordova-plugin-alicloud-feedback](https://github.com/yccp/cordova-plugin-alicloud-feedback.git)

2. Install the Ionic plugin
```
 npm i -S @yci/alicloud-feedback
```

3. Add it to your app’s NgModule.

```typescript
// Import your library
import { AlicloudFeedbackModule } from '@yci/alicloud-feedback';

@NgModule({

  ...

  imports: [

    ...

    // Specify your library as an import
    AlicloudFeedbackModule.forRoot()
  ],
  
  ...

})
export class AppModule { }
```

## Usage
Once your library is imported, you can use its service in your Angular application:

```ts
import { AlicloudFeedback } from '@yci/alicloud-feedback';

async constructor(private alicloudFeedback: AlicloudFeedback) {

  const extras = {
    // ... 
  };

  try {
    await this.alicloudFeedback.open(extras);
  } catch(e) {
    console.error(e);
  }

}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Yu Chen](mailto:yu.chen@live.ie)
