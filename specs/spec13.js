describe('Super Calculator Screen',function(){
    var obj=require("./spec3objects");
    it('Addition Testing and Assertions',function(){
        function add(a,b){
            obj.first1.sendkeys(a);
            obj.second2.sendkeys(b);
            obj.gobutton.click();
        };
        Browser.get('http://juliemr.github.io/protractor-demo/');
        add(5,9);
        add(7,2);
        add(3,6);
       
        obj.countRows();
        obj.loopAndAssert();
    });
});