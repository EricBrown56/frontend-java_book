function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function() {
        console.log(`This book is called ${title} by ${author} and has 
            ${pages} pages.`);
    }
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
let theArtOfWar = new Book('The Art of War', 'Sun Tzu', 100);
let theGreatGatsby = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 200);
let Catch22 = new Book('Catch-22', 'Joseph Heller', 300);
let theHungerGames = new Book('The Hunger Games', 'Suzanne Collins', 400);
let theLordOfTheRings = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1000);
let harryPotter = new Book('Harry Potter', 'J.K. Rowling', 500);

theHobbit.info();

/* Create an array to store book objects and implement functions to add new books 
and search for books by title or author.*/

let library = [theHobbit, theArtOfWar, theGreatGatsby, Catch22, theHungerGames, 
    theLordOfTheRings, harryPotter];

function addBook() {
    let title = prompt('Enter the title of the book');
    let author = prompt('Enter the author of the book');
    let pages = prompt('Enter the number of pages in the book');
    let book = new Book(title, author, pages);
    library.push(book);
    console.log(`The book ${title} has been added to the library.`);
}

function searchByTitle(title) {
    let foundBook = library.find(book => book.title === title);
    if (foundBook) {
        console.log(`The book ${title} was found.`);
    } else {
        console.log(`The book ${title} was not found.`);
    }
}

function searchByAuthor(author) {
    let foundBook = library.find(book => book.author === author);
    if (foundBook) {
        console.log(`The author ${author} was found.`);
    } else {
        console.log(`The author ${author} was not found.`);
    }
}

/* Create functions that utilize the filter method to filter out books that contain 
more than 300 pages and the map method to add "Title: " and "Author: " to the 
book's title and author properties respectably. */

function filterBooks() {
    let filteredBooks = library.filter(book => book.pages > 300);
    console.log(filteredBooks);
}

function mapBooks() {
    let mappedBooks = library.map(book => `Title: ${book.title}, Author: ${book.author}`);
    console.log(mappedBooks);
}

filterBooks();
mapBooks();

/* Create a constructor function for the Account object with properties for 
accountNumber, balance, and owner.*/

function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

let account1 = new Account(123456, 1000, 'John Doe');
let account2 = new Account(654321, 500, 'Jane Doe');

/* Implement methods within the Account object to deposit and withdraw funds. */

Account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`$${amount} has been deposited into the account. 
        The new balance is $${this.balance}.`);

}

Account.prototype.withdraw = function(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`$${amount} has been withdrawn from the account. 
            The new balance is $${this.balance}.`);
    } else {
        console.log('Insufficient funds.');
    }
}

/*  Create a method to calculate compound yearly interest based on the balance 
and specified interest rate. */

Account.prototype.calculateInterest = function(interestRate) {
    let interest = this.balance * interestRate;
    this.balance += interest;
    console.log(`The interest earned after one year is $${interest}. The new 
        balance is $${this.balance}.`);
}

account1.deposit(500);
account1.withdraw(300);
account1.calculateInterest(0.1);

account2.deposit(1000);
account2.withdraw(600);
account2.calculateInterest(0.2);