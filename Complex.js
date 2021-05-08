class Complex {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    static fromModArg(mod, arg) {
        return new Complex(
            mod * Math.cos(arg),
            mod * Math.sin(arg)
        );
    }

    re() {
        return this.a;
    }
    im() {
        return this.b;
    }
    mod() {
        return Math.sqrt(this.a * this.a + this.b * this.b);
    }
    arg() {
        if (this.a == .0 && this.b == .0) {
            return .0;
        }
        if (this.a == .0) {
            return this.b > .0 ? Math.PI / 2 : -Math.PI / 2;
        }
        if (this.b == .0) {
            return this.a > 0 ? 0 : Math.PI;
        }
        if (this.a > .0 && this.b > .0) {
            return Math.atan2(this.b, this.a);
        }
        if (this.a < .0 && this.b > .0) {
            return Math.PI - Math.atan2(this.b, -this.a);
        }
        if (this.a < .0 && this.b < .0) {
            return -Math.PI + Math.atan2(-this.b, -this.a);
        }
        if (this.a > .0 && this.b < .0) {
            return - Math.atan2(-this.b, this.a);
        }
    }
}