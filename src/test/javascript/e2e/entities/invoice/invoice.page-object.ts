import { element, by, ElementFinder } from 'protractor';

export class InvoiceComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    title = element.all(by.css('jhi-invoice div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class InvoiceUpdatePage {
    pageTitle = element(by.id('jhi-invoice-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    dateInput = element(by.id('field_date'));
    codeInput = element(by.id('field_code'));
    detailsInput = element(by.id('field_details'));
    statusSelect = element(by.id('field_status'));
    paymentMethodSelect = element(by.id('field_paymentMethod'));
    paymentDateInput = element(by.id('field_paymentDate'));
    paymentAmountInput = element(by.id('field_paymentAmount'));
    orderSelect = element(by.id('field_order'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async setDateInput(date) {
        await this.dateInput.sendKeys(date);
    }

    async getDateInput() {
        return this.dateInput.getAttribute('value');
    }

    async setCodeInput(code) {
        await this.codeInput.sendKeys(code);
    }

    async getCodeInput() {
        return this.codeInput.getAttribute('value');
    }

    async setDetailsInput(details) {
        await this.detailsInput.sendKeys(details);
    }

    async getDetailsInput() {
        return this.detailsInput.getAttribute('value');
    }

    async setStatusSelect(status) {
        await this.statusSelect.sendKeys(status);
    }

    async getStatusSelect() {
        return this.statusSelect.element(by.css('option:checked')).getText();
    }

    async statusSelectLastOption() {
        await this.statusSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async setPaymentMethodSelect(paymentMethod) {
        await this.paymentMethodSelect.sendKeys(paymentMethod);
    }

    async getPaymentMethodSelect() {
        return this.paymentMethodSelect.element(by.css('option:checked')).getText();
    }

    async paymentMethodSelectLastOption() {
        await this.paymentMethodSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async setPaymentDateInput(paymentDate) {
        await this.paymentDateInput.sendKeys(paymentDate);
    }

    async getPaymentDateInput() {
        return this.paymentDateInput.getAttribute('value');
    }

    async setPaymentAmountInput(paymentAmount) {
        await this.paymentAmountInput.sendKeys(paymentAmount);
    }

    async getPaymentAmountInput() {
        return this.paymentAmountInput.getAttribute('value');
    }

    async orderSelectLastOption() {
        await this.orderSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async orderSelectOption(option) {
        await this.orderSelect.sendKeys(option);
    }

    getOrderSelect(): ElementFinder {
        return this.orderSelect;
    }

    async getOrderSelectedOption() {
        return this.orderSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}
