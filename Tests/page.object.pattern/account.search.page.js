
var AccountSearchPage = function (chromeless, options) {
    this.chromeless = chromeless
    this.options = options

    this.searchLocator = 'input[id="Query"]'
    this.submitButtonLocator = 'form input[type="submit"]'
    this.inputWithValidationErrorLocator = 'input.input-validation-error'
    this.page = '/account/search/'
    
    this.resultsTableId = 'results'
    this.resultsTableLocator = 'table[id="' + this.resultsTableId + '"]'

    this.noResultsTableId = 'noResults'
    this.noResultsTableLocator = 'div[id="' + this.noResultsTableId + '"]'
};

AccountSearchPage.prototype.visit = async function (id) {
    await this.chromeless
        .goto(this.options.url + this.page + id)
        .setViewport({ width: 800, height: 600, scale: 1 })
}

AccountSearchPage.prototype.checkWeAreOnTheSearchPage = async function (id) {
    const href = await this.chromeless
        .wait(this.searchLocator)
        .evaluate(href => window.location.href)

    return href.slice(-(this.page + id).length) === (this.page + id)
}

AccountSearchPage.prototype.fillInSearchBox = async function (query) {
    await this.chromeless
        .clearInput(this.searchLocator)
        .type(query, this.searchLocator)
        .click(this.submitButtonLocator)
}


AccountSearchPage.prototype.submitTheForm = async function () {
    await this.chromeless
        .click(this.submitButtonLocator)
}

AccountSearchPage.prototype.getTableResultsLength = async function () {
   return await this.chromeless
        .wait(this.resultsTableLocator)
        .evaluate(
            (locator) => { 
                return document.getElementById(locator)
                .getElementsByTagName("tbody")[0]
                .getElementsByTagName("tr").length
            }
        , this.resultsTableId)
}

AccountSearchPage.prototype.checkNoResultsAlertIsShown = async function () {
    
        return await this.chromeless
        .wait(this.noResultsTableLocator)
            .evaluate(
                (locator) => { 
                    return document.getElementById(locator).innerHTML
                }, this.noResultsTableId)
    }

AccountSearchPage.prototype.checkValidationMessageShown = async function () {
    return await this.chromeless
        .wait(this.inputWithValidationErrorLocator)
        .evaluate(() =>
            document.getElementsByClassName('field-validation-error')[0]
                .innerHTML === 'Enter a search term'
        )
}

module.exports = AccountSearchPage