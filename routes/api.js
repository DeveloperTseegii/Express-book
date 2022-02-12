const express = require("express");
const { all } = require("./admin");
const router = express.Router();
const { books } = require("../books.json");

router.get("/random", function (req, res) {
  let a = [];
    var random = Math.floor(Math.random() * books.length);
    for (let i = 1; i <=3; i++) {
      while (a.includes(random) > 0) {
        random = Math.floor(Math.random() * books.length);
      }
      a.push(books[random]);
    }
    res.send(a)
});
 
router.get("/published", (req, res)=>{
      publishDate = books.sort(function(a,b){
            return new Date(a.published) - new Date(b.published);
          });
     res.send(publishDate)

});

router.get("/authors", (req, res)=>{
    let name = [];
    books.map((authors)=>{
      name += authors.author
    })
   res.send(name)
});
router.get("/books", (req, res)=>{
   res.send(books)
});
router.get("/books/:isbn_id", (req, res)=>{
    const id = req.params.isbn_id
    const isbn = books.filter((fil)=>{
        return fil.isbn === id;
    })
    res.send(isbn)
});

router.get('/search', (req,res)=>{
   const search = req.query.title
   const bookNameSearch = books.filter((nameFilter)=>{
     return nameFilter.title === search;
   })
   res.send(bookNameSearch)
} );

router.get('/pagesMax', (req,res)=>{
     let page = [];
     for (let i = 0; i < books.length; i++) {
       page.push(books[i].pages)
      }
     const maxPage = Math.max(...page)
     books.map((p)=>{
       if(p.pages === maxPage){
         res.send(p)
       }
     })
} );

router.get('/pagesMinimum', (req,res)=>{
     let Page = [];
     for (let i = 0; i < books.length; i++) {
       Page.push(books[i].pages)
      }
     const minPage = Math.min(...Page)
     books.map((p)=>{
       if(p.pages === minPage){
         res.send(p)
       }
     })
});
router.get('/publisher', (req,res)=>{
    publishers= books.map((book)=>{
         return book.publisher;
    });
    var counter = {};
    publishers.forEach((i)=>{counter[i] = (counter[i]|| 0) +1 })
     
      res.send(counter)
});

router.delete('/books/:id', 
    function(req, res) {
        req.isbn = isbn;
        req.isbn.remove(function(err){
            if (err)
                res.status(500).send(err);
            else
                res.redirect('/')
        });
});








module.exports = router;
