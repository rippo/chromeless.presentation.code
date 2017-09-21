var RippoPage = function () {
    console.log('ctor called')
};

RippoPage.prototype.visit = function() {
    console.log("visit called")
}

module.exports = RippoPage