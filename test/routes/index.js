describe("Routes: Index", () => {
    describe("GET /", () => {
        it('should return the API status', done => {
            request.get("/").expect(200).end((err,res) => {
                const expected = {status: "Ntask API"};
                expect(res.body).to.eql(expected);
                done(err);
            })
        });
    })
})