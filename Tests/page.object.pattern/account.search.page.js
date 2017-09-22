
var AccountSearchPage = function (chromeless, options) {
    this.chromeless = chromeless
    this.options = options

    this.searchLocator = 'input[id="Query"]'
    this.submitButtonLocator = 'form input[type="submit"]'
    this.inputWithValidationErrorLocator = 'input.input-validation-error'
    this.resultsTableLocator = 'table[id="results"]'
    this.page = '/account/search/'
};


AccountSearchPage.prototype.checkWeAreOnTheSearchPage = async function (id) {
    const href = await this.chromeless
        .wait(this.searchLocator)
        .evaluate(href => window.location.href)

    return href.slice(-(this.page + id).length) === (this.page + id)
}

AccountSearchPage.prototype.fillInSearchBox = async function (query) {
    await this.chromeless
        .type(query, this.searchLocator)
}


AccountSearchPage.prototype.submitTheForm = async function () {
    await this.chromeless
        .click(this.submitButtonLocator)
}

AccountSearchPage.prototype.checkResultsLength = async function (expectedLength) {
    return await this.chromeless
        .wait(this.resultsTableLocator)
        .evaluate(() => 
                document.getElementsByClassName('table')[0].innerHTML)
}

// document.getElementsByClassName('field-validation-error')[0]
//     .innerHTML === 'User could not be found'
// )


AccountSearchPage.prototype.checkValidationMessageShown = async function () {
    return await this.chromeless
        .wait(this.inputWithValidationErrorLocator)
        .evaluate(() =>
            document.getElementsByClassName('field-validation-error')[0]
                .innerHTML === 'Enter a search term'
        )
}

module.exports = AccountSearchPage