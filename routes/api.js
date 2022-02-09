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

})
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
        return fil.isbn === id
    })
    res.send(isbn)
});

router.get('/:search?title=”js”', )



module.exports = router;
