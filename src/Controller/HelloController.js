module.exports = class HelloController {
    constructor(helloService){
        this.helloService = helloService;
    }
    
    getIndex(req, res) {
        res.send("Hello");
    }

    sayHello(req, res) {
        const msg = this.helloService.sayHello(req.query.name);
        res.send(msg);
    }
};