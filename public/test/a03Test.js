QUnit.test('Testing my age calculator', function (assert) {
    assert.equal();
    assert.equal(checkBy(01/19/1997),"You are 21 years 9 months 17 days old","Success");
    assert.equal(checkBy(12/19/1996),"You are 21 years 9 months 17 days old","Success");
    assert.equal(checkBy(10/12/2000),"You are 21 years 9 months 17 days old","Success");
    assert.equal(checkBy(1/31/1888),"You are 21 years 9 months 17 days old","Success");

   // assert.equal(checkBirthDay(2.5, 2.5, 2.5, 2.5), 10, "works with four positive real numbers");
    //assert.equal(checkBirthDay(10, -10), 0, "works with a positive and a negative");
});