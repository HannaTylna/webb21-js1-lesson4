const library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];
const readBooks = [];
const unreadBooks = [];

library.forEach((book) => {
    if(book.readingStatus) readBooks.push(book);
    else if(!book.readingStatus) unreadBooks.push(book);
})
console.log(readBooks)
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -")
console.log(unreadBooks)
