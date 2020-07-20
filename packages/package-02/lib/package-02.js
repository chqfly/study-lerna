'use strict';
var package01 = require('package-01')
var package03 = require('package-03')

function package02() {
  package01()
  console.log('package02')
  package03()
}


package02()