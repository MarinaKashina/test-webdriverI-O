import { assert } from 'chai';

describe('Registration', function () {

    it('getWorks', function () {
        browser.url('/');
        $('#registration').click();
        $('#fname').setValue('Ivan');
        $('#lname').setValue('Ivanov');
        $('#email').setValue('testreacttestt@gmail.com');
        $('#email_confirm').setValue('testreacttestt@gmail.com');
        $('#pass').setValue('testTest');
        $('#pass_confirm').setValue('testTest');
        $('#registration').click();
        let newBug = $('#new_bug');
        newBug.waitForDisplayed(2000);
        assert.isTrue(newBug.isDisplayed());
    })

});

describe('Login', function () {

    it('Works', function () {
        browser.url('/');
        $('#email').setValue('testreacttest@gmail.com');
        $('#pass').setValue('testTest');
        $('#login').click();
        let newBug = $('#new_bug');
        newBug.waitForDisplayed(2000);
        assert.isTrue(newBug.isDisplayed());
    })

});

describe('AddBug', function () {

    it('newBug', function () {
        browser.url('/');
        Bug.waitForDisplayed(2000);
        assert.isTrue(Bug.isDisplayed());
    })

});
$('#new_bug').click();
$('#summary').setValue('vvvvvvvvvvvvvv');
$('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/textarea').setValue('vvvvvvvvvvvvv');
$('#actual').setValue('vvvvvvvvvvvvvvvvvvvvvv');
$('#expected').setValue('vvvvvvvvvvvvvvv');
$('//*[@id="root"]/div/div[2]/div/div[2]/div[6]/div[1]/div/div[1]').selectByAttribute(attribute, 'Minor');
$('//*[@id="root"]/div/div[2]/div/div[2]/div[7]/div[1]/div/div[1]').selectByAttribute(attribute, 'Marina Kashina');
$('//*[@id="root"]/div/div[2]/div/div[2]/div[6]/div[2]/div[1]/div[1]').selectByAttribute(attribute, 'Low');
$('//*[@id="root"]/div/div[2]/div/div[2]/div[7]/div[2]/div[1]/div[1]').selectByAttribute(attribute, 'Always');
$('#todo_add').click();
let Bug = $('#badge');