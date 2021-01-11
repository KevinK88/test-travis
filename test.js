const { doesNotThrow } = require("should");
const supertest = require("supertest");
const server = supertest.agent("https://localhost:5000");

describe("Sample unit test",()=>{
    it("should return home page", (done)=>{
        server
            .get("/")
            .expect("Content-type",/text/)
            .expect(200)
            .end(function(err,res){
                done();
            });
    });
});