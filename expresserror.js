class ExpressError extends Error {
    constructor(msg, status){
        super();
        this.msg=msg;
        this.status = status;
        console.log('had an error')
    }

}
module.exports = ExpressError;