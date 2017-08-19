/**
 * Created by trigkit4 on 17/8/19.
 * A webpack plugin for log info after compilation is done
 */

'use strict'

module.exports = class LogPlugin {
  constructor(fn) {
    this.fn = fn;
  }
  static type(fn){
    return Object.prototype.toString.call(fn) === '[object Function]'
  }
  apply(compiler) {
    compiler.plugin('done', info => {
      setTimeout(function() {
        /*eslint-disable */
        console.log()
        if(LogPlugin.type(this.fn)){
          this.fn(info)
        }
      }.bind(this),0)
  })
  }
}
