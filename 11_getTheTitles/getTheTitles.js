const getTheTitles = function(books) {
    let authors = [];
    for (let i =0;i<books.length;i++){
        authors.push(books[i].title);
    }
    return authors;
};

// Do not edit below this line
module.exports = getTheTitles;
