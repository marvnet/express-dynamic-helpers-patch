express-dynamic-helpers-patch
==============================

This is a 'patched' version of pavelvlasov's original library that uses more modern JavaScript syntax. 

Dynamic helpers monkey patch for express 3.x and 4.x

### How to install?

```js
  npm install express-dynamic-helpers-patch --save
```

### How to use It?

```js
  require('express-dynamic-helpers-patch')(app);
  // and now You can use 2.x express dynamicHelpers
  app.dynamicHelpers({
    user: function (req, res) {
      ...
    }
  });
```

License: MIT
