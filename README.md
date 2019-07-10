express-dynamic-helpers-patch
==============================

**This is a 'patched' version of pavelvlasov's original library that uses more modern and faster JavaScript.** 

Dynamic helpers monkey patch for express 3.x and 4.x

### How to install?

**Using yarn:**
```bash
  yarn add @marvnet/express-dynamic-helpers-patch
```

**Using npm:**
```bash
  npm install @marvnet/express-dynamic-helpers-patch --save
```

### How to use It?

```js
  require('@marvnet/express-dynamic-helpers-patch')(app);
  // and now You can use 2.x express dynamicHelpers
  app.dynamicHelpers({
    user: function (req, res) {
      ...
    }
  });
```

### License
This project is licensed under the MIT license.
