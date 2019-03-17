import whind from "@candlefw/whind";

/**
 * wick internals.
 * @class      NR (name)
 */
class NR { //Notation Rule

    constructor() {

        this.r = [NaN, NaN];
        this.terms = [];
        this.prop = null;
        this.name = "";
        this.virtual = false;
    }

    seal() {

    }

    sp(value, rule) { //Set Property
        if (this.prop) {
            if (value)
                if (Array.isArray(value) && value.length === 1 && Array.isArray(value[0]))
                    rule[this.prop] = value[0];
                else
                    rule[this.prop] = value;
        }
    }

    isRepeating() {
        return !(isNaN(this.r[0]) && isNaN(this.r[1]));
    }

    parse(lx, rule, out_val) {
        if (typeof(lx) == "string")
            lx = whind(lx);

        let r = out_val || { v: null },
            start = isNaN(this.r[0]) ? 1 : this.r[0],
            end = isNaN(this.r[1]) ? 1 : this.r[1];


        return this.innerParser(lx, rule, out_val, r, start, end);
    }

    innerParser(lx, rule, out_val, r, start, end) {
        let bool = true;
        for (let j = 0; j < end && !lx.END; j++) {

            for (let i = 0, l = this.terms.length; i < l; i++) {
                if (!this.terms[i].parse(lx, rule, r)) {

                    this.sp(r.v, rule);

                    if (j < start && start > 0)
                        return false;
                    else
                        return true;
                }
            }
        }

        this.sp(r.v, rule);

        return true;
    }
}

class AND extends NR {
    innerParser(lx, rule, out_val, r, start, end) {

        outer: for (let j = 0; j < end && !lx.END; j++) {
            for (let i = 0, l = this.terms.length; i < l; i++){
                console.log(i)
                if (!this.terms[i].parse(lx, rule, r)) {
                    console.log("AAAPL", i)
                    return false;
                }
            }
        }

        this.sp(r.v, rule);

        return true;
    }
}

class OR extends NR {
    innerParser(lx, rule, out_val, r, start, end) {
        let bool = false;

        for (let j = 0; j < end && !lx.END; j++) {
            bool = false;

            for (let i = 0, l = this.terms.length; i < l; i++)
                if (this.terms[i].parse(lx, rule, r)) bool = true;

            if (!bool && j <= start) {
                this.sp(r.v, rule);
                return false;
            }
        }

        this.sp(r.v, rule);

        return true;
    }
}

class ONE_OF extends NR {
    innerParser(lx, rule, out_val, r, start, end) {
        let bool = false;

        console.log(start, bool, end)

        let j;
        for (j = 0; j < end && !lx.END; j++) {
            bool = false;

            for (let i = 0, l = this.terms.length; i < l; i++) {
                if (!this.terms[i]) console.log(this)
                bool = this.terms[i].parse(lx, rule, r);
                if (bool) break;
            }

            if (!bool) {
                if (j <= start && start > 0) {
                    this.sp(r.v, rule);
                    return false;
                } else {
                    return true;
                }
            }
        }

        if(lx.END && !bool){
            console.log("AA", j, start)
            if (j <= start && start > 0) {
                this.sp(r.v, rule);
                return false;
            } else {
                return true;
            }
        }

        this.sp(r.v, rule);

        return bool;
    }
}

export { NR, AND, OR, ONE_OF };
