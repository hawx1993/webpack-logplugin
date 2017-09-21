## Install

<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/gWs9P5H4YpntyAR6x1qG5EkX/hawx1993/webpack-logplugin'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/gWs9P5H4YpntyAR6x1qG5EkX/hawx1993/webpack-logplugin.svg' />
</a>


```javascript
$ npm install  webpack-logplugin -D
```


## Usage

with this plugin,you can make your webpack output info whenever your compile is done.
```javascript
//webpack.config.js
const LogPlugin = require('webpack-logplugin');
module.exports = {
    plugins: [
        new LogPlugin( () => {
            console.log('Your app is running at http://localhost:3001')
        })
    ]
}
```

## Author

webpack-logplugin © trigkit4, Released under the MIT License.

Authored and maintained by trigkit4 with help from contributors (list).
