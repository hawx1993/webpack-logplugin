## Install

```javascript
$ npm install  webpack-logplugin -D
```

## Usage

with this plugin,you can make your webpack output info whenever your compile is done.
```javascript
//webpack.config.js
const LogPlugin = require('webpack-logPlugin');
module.exports = {
    plugins: [
        new LogPlugin( () => {
            console.log('Your app is running at http://localhost:3001')
        })
    ]
}
```