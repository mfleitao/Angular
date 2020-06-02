describe('First test', () => { // global function with two parameters, a string and a function
    // it('true is', () => {
    //     expect(true).toBe(true);
    // })

    it('Compares ===', () => {
        var a = 12;
        var b = a;
        expect(a).toBe(b);
        expect(a).not.toBe(null);
        expect(a).toEqual(12);
    });

    it('Compares 2 objects', () => {
        var obj1 = { a: 12, b: 32 };
        var obj2 = { a: 12, b: 32 };
        expect(obj1).toEqual(obj2);
    });

    it("The 'toMatch' matcher is for regular expressions", function () {
        var message = "foo bar baz";
        expect(message).toMatch(/bar/);
        expect(message).toMatch("bar");
        expect(message).not.toMatch(/quux/);
    });

    it("The 'toBeDefined' matcher compares against `undefined`", function () {
        var a = {
            foo: "foo", bar: undefined
        };
    
        expect(a.foo).toBeDefined();
        expect(a.bar).not.toBeDefined();
    });

    it("The 'toBeTruthy' matcher is for boolean casting testing", function () {
        var a, foo = "foo";
    
        expect(foo).toBeTruthy();
        expect(a).not.toBeTruthy();
    });

    it("works for finding an item in an Array", function () {
        var a = ["foo", "bar", "baz"];
    
        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });
    
    it("also works for finding a substring", function () {
        var a = "foo bar baz";
    
        expect(a).toContain("bar");
        expect(a).not.toContain("quux");
    });

    it("The 'toBeLessThan' matcher is for mathematical comparisons", function () {
        var pi = 3.1415926,
            e = 2.78;
    
        expect(e).toBeLessThan(pi);
        expect(pi).not.toBeLessThan(e);

        expect(pi).toBeGreaterThan(e);
        expect(e).not.toBeGreaterThan(pi);

        expect(pi).not.toBeCloseTo(e, 2);
        expect(pi).toBeCloseTo(e, 0);
    });

    it("The 'toThrowError' matcher is for testing a specific thrown exception", function () {
        var foo = function () {
            throw new TypeError("foo bar baz");
        };
    
        expect(foo).toThrowError("foo bar baz");
        expect(foo).toThrowError(/bar/);
        expect(foo).toThrowError(TypeError);
        expect(foo).toThrowError(TypeError, "foo bar baz");
    });

    it('Name of Test', () => {
        var a = 3;
        var b = 4;
        expect(a).not.toBe(b);
        expect(a).toBeGreaterThan(b);
    });

});