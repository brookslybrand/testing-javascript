const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner
utils.getWinner = (p1, p2) => p1

const winner = thumbWar('Brooks', 'Tripp')
assert.strictEqual(winner, 'Brooks')

utils.getWinner = originalGetWinner
