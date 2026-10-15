const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
function engine() {
  const file = path.join(__dirname, 'Tu-Decides.html');
  assert.ok(fs.existsSync(file), 'Falta el juego Tu-Decides.html');
  const html = fs.readFileSync(file, 'utf8');
  const match = html.match(/<script id="game-engine">([\s\S]*?)<\/script>/);
  assert.ok(match, 'Falta el motor de decisiones');
  const context = { module: { exports: {} } };
  vm.runInNewContext(match[1], context);
  return context.module.exports;
}
test('cada elección produce su propio final y reiniciar recupera el inicio', () => {
  const e = engine();
  const initial = e.transition(undefined, 'reset');
  assert.equal(initial.phase, 'intro');
  const playing = e.transition(initial, 'start');
  assert.equal(playing.phase, 'choice');
  const clean = e.transition(playing, 'recycle');
  assert.equal(clean.phase, 'ending');
  assert.equal(clean.world, 'clean');
  assert.equal(clean.choice, 'recycle');
  const dirty = e.transition(playing, 'litter');
  assert.equal(dirty.world, 'dirty');
  assert.equal(dirty.choice, 'litter');
  assert.equal(e.transition(clean, 'reset').phase, 'intro');
  assert.equal(e.transition(dirty, 'reset').world, 'neutral');
});
