var should = chai.should();
describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if (err) throw err;
        done();
      });
    })
  })
})
describe('Hello World', function(){
  describe('hello world()', function(){
    it('hello should start with h', function(){
      var hello = "Hello world";
       hello.indexOf(0).should.equal('H');
    })
  })
})