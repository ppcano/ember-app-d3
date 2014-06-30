
moduleForView('tree', 'view:tree', {
  teardown: function() {
  }
});

test('can access to component property', function() {
  expect(1);
  var component = this.subject();
  equal(!!component, true);
});
