const movieArray =   [
    {
      id: 1,
      title: "Whiplash",
      director: "Damien Chazelle",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWnMdiMja9kUvqglkkSHcy2h8yyGfpdoy0enOPqWW2n5t0Tb7",
      rank: "5"
    },
    { id: 2,
      title: "Shutter Island",
      director: "Martin Scorsese",
      image: "https://images-na.ssl-images-amazon.com/images/I/51MsI8xR-NL.jpg",
      rank: "5"
    },
    {
      id: 3,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      image: "https://s3.amazonaws.com/moviemonitor/images/movies/original/19713.jpg?1354330880",
      rank: "5"
    },
    {
      id: 4,
      title: "The Ritual",
      director: "David Bruckner",
      image: "https://i.pinimg.com/originals/ed/9a/82/ed9a823ac6cc69d00498c40f065179fb.jpg",
      rank: "5"
    },
    {
      id: 5,
      title: "Inglourious Basterds",
      director: "Quentin Tarantino",
      image: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      rank: "5"
    },
    {
      id: 6,
      title: "The Hateful Eight",
      director: "Quentin Tarantino",
      image: "https://mobithailand.files.wordpress.com/2016/03/the-hateful-eight-uk-poster-834x1024.jpg?w=834",
      rank: "3"
    },
    {
      id: 7,
      title: "Django Unchained",
      director: "Quentin Tarantino",
      image: "https://images-na.ssl-images-amazon.com/images/I/51dNfU53lNL.jpg",
      rank: "3"
    },
    {
      id: 8,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      image: "https://i.ebayimg.com/images/i/132250196349-0-1/s-l1000.jpg",
      rank: "3"
    },
    {
      id: 9,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      image: "https://images-na.ssl-images-amazon.com/images/I/81AJdOIEIhL._SY679_.jpg",
      rank: "3"
    },
    {
      id: 10,
      title: "Schindler's List",
      director: "Steven Spielberg",
      image: "https://images-na.ssl-images-amazon.com/images/I/517nCQA7%2B%2BL.jpg",
      rank: "3"
    },
    {
      id: 11,
      title: "Fight Club",
      director: "David Fincher",
      image: "https://m.media-amazon.com/images/M/MV5BMjJmYTNkNmItYjYyZC00MGUxLWJhNWMtZDY4Nzc1MDAwMzU5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
      rank: "3"
    },
    {
      id: 12,
      title: "Forest Gump",
      director: "Robert Zemeckis",
      image: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
      rank: "3"
    },
    {
      id: 13,
      title: "Goodfellas",
      director: "Martin Scorsese",
      image: "https://ae01.alicdn.com/kf/HTB1dWB5MpXXXXalXXXXq6xXFXXXc/hot-GOODFELLAS-CLASSIC-MOVIE-POSTER-PRINT-Fabric-silk-poster-and-printing-Home-Deco.jpg_640x640.jpg",
      rank: "4"
    },
    {
      id: 14,
      title: "Seven Samurai",
      director: "Akira Kurosawa",
      image: "https://images-na.ssl-images-amazon.com/images/I/91OOTyd4ToL._SY679_.jpg",
      rank: "2"
    },
    {
      id: 15,
      title: "Interstellar",
      director: "Christopher Nolan",
      image: "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",
      rank: "4"
    },
    {
      id: 16,
      title: "Life Is Beautiful",
      director: "Roberto Benigni",
      image: "https://i.pinimg.com/originals/d8/dc/56/d8dc56c3c459b74c9739c0612f49cde7.jpg",
      rank: "2"
    },
    {
      id: 17,
      title: "Se7en",
      director: "David Fincher",
      image: "https://i.pinimg.com/originals/47/ac/71/47ac71fb010c6544f3b8465ec5ffb5aa.jpg",
      rank: "2"
    },
    {
      id: 18,
      title: "The Silence of the Lambs",
      director: "Jonathan Demme",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79e28f35757089.5702d31785370.jpg",
      rank: "3"
    },
    {
      id: 19,
      title: "It's a Wonderful Life",
      director: "Frank Capra",
      image: "https://play-lh.googleusercontent.com/w43BNj5l8wt-POMAyiM-HOj0nsLB9F0fn-UPVQtAnquLew7OlSQrF_pxHkHNXa2v0sIXaJ1DrTvdgid_OUo=w200-h300-rw",
      rank: "2"
    },
    {
      id: 20,
      title: "The Prestige",
      director: "Christopher Nolan",
      image: "https://i.pinimg.com/originals/68/6a/db/686adb0d588374a722d6f8d7f364728b.jpg",
      rank: "3"
    },
    {
      id: 21,
      title: "The Departed",
      director: "Martin Scorsese",
      image: "https://i.pinimg.com/originals/f2/47/75/f2477527d8e2412aa9a84cfda5e4e30f.jpg",
      rank: "4"
    },
    {
      id: 22,
      title: "The Gladiator",
      director: "Ridley Scott",
      image: "https://dtvimages.hs.llnwd.net/e1//db_photos/movies/AllPhotosAPGI/24674/24674_aa.jpg",
      rank: "3"
    },
    {
      id: 23,
      title: "The Lion King",
      director: "Roger Allers",
      image: "https://www.movieartarena.com/imgs/lionkingdvd.jpg",
      rank: "3"
    },
    {
      id: 24,
      title: "Casablanca",
      director: "Michael Curtiz",
      image: "https://www.hometheaterseattle.com/assets/images/movies/casablanca-movie-1942.jpg",
      rank: "3"
    },
    {
      id: 25,
      title: "The Shining",
      director: "Stanley Kubrick",
      image: "http://i.ebayimg.com/00/s/NTAwWDM1Mw==/z/s0wAAOxy7nNTWITn/$_3.JPG?set_id=2",
      rank: "3"
    },
    {
      id: 26,
      title: "Inside Out",
      director: "Pete Docter",
      image: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_.jpg",
      rank: "2"
    },
    {
      id: 27,
      title: "Casino",
      director: "Martin Scorsese",
      image: "https://images-na.ssl-images-amazon.com/images/I/513wxpquZKL.jpg",
      rank: "3"
    },
    {
      id: 28,
      title: "Sunrise",
      director: "F.W. Murnau",
      image: "https://i.pinimg.com/originals/19/ab/83/19ab832c6a32703e8b17b04b86984aee.jpg",
      rank: "2"
    },
    {
      id: 29,
      title: "Logan",
      director: "James Mangold",
      image: "https://i.pinimg.com/originals/ad/64/a2/ad64a2e8914ad082d58c3a453c128b10.jpg",
      rank: "2"
    },
    {
      id: 30,
      title: "The Grand Budapest Hotel",
      director: "Wes Anderson",
      image: "https://images-na.ssl-images-amazon.com/images/I/713kiC-8JhL._SY679_.jpg",
      rank: "3"
    },
    {
      id: 31,
      title: "Gone Girl",
      director: "David Fincher",
      image: "https://images-na.ssl-images-amazon.com/images/I/41xNMpj9IgL.jpg",
      rank: "3"
    },
    {
      id: 32,
      title: "Into the Wild ",
      director: "Sean Penn",
      image: "https://i.pinimg.com/originals/d9/3e/70/d93e70cca7e3303666727f0e80997f41.jpg",
      rank: "3"
    },
    {
      id: 33,
      title: "No Country for Old Men",
      director: "Ethan Coen",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rank: "2"
    },
    {
      id: 34,
      title: "Donnie Darko",
      director: "Richard Kelly",
      image: "https://i.pinimg.com/originals/dc/28/c4/dc28c4a46789f1b85057c0116a72627b.jpg",
      rank: "2"
    },
    {
      id: 35,
      title: "Hot Fuzz",
      director: "Edgar Wright",
      image: "https://images-na.ssl-images-amazon.com/images/I/51nv39wuS4L.jpg",
      rank: "2"
    },
    {
      id: 36,
      title: "Superbad",
      director: "Greg Mottola",
      image: "https://images-na.ssl-images-amazon.com/images/I/51aHfqvu3-L._AC_.jpg",
      rank: "3"
    },
    {
      id: 37,
      title: "Monty Python",
      director: "Terry Gilliam",
      image: "https://images-na.ssl-images-amazon.com/images/I/51NB7Q8RbUL.jpg",
      rank: "3"
    },
    {
      id: 38,
      title: "Step Brothers",
      director: "Adam Mckay",
      image: "https://i.pinimg.com/originals/26/c0/8a/26c08aa5720e821d09b416423799a048.jpg",
      rank: "2"
    },
    {
      id: 39,
      title: "The Hangover",
      director: "Todd Phillips",
      image: "https://i.pinimg.com/originals/7f/7a/71/7f7a715c84d914ebe1310d434cd73ca1.jpg",
      rank: "2"
    },
    {
      id: 40,
      title: "Alien",
      director: "Ridley Scott",
      image: "https://images-na.ssl-images-amazon.com/images/I/51aSwmzxmdL.jpg",
      rank: "2"
    },
    {
      id: 41,
      title: "Ex Machina",
      director: "Alex Garland",
      image: "https://static1.squarespace.com/static/50d144f6e4b05aff8e5b9c8c/t/556808d2e4b07a367ae8c39b/1432881394412/",
      rank: "5"
    },
    {
      id: 42,
      title: "Arrival",
      director: "Denis Villeneuve",
      image: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
      rank: "5"
    },
    {
      id: 43,
      title: "Annihilation",
      director: "Alex Garland",
      image: "https://i.pinimg.com/originals/7e/4b/ca/7e4bca27828401db3594a6fbfd930c96.jpg",
      rank: "3"
    },
    {
      id: 44,
      title: "Gravity",
      director: "Alfonso Cuarón",
      image: "https://i0.wp.com/cupofmoe.com/wp-content/uploads/2017/11/Gravity-movie-poster.jpg?fit=736%2C1049",
      rank: "1"
    },
    {
      id: 45,
      title: "Hereditary",
      director: "Ari Aster",
      image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
      rank: "4"
    },
    {
      id: 46,
      title: "Get Out",
      director: "Jordan Peele",
      image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
      rank: "3"
    },
    {
      id: 47,
      title: "IT",
      director: "Andrés Muschietti",
      image: "https://i.pinimg.com/originals/56/38/56/563856fa028fcdb8c18ccd3732bda0e7.jpg",
      rank: "3"
    },
    {
      id: 48,
      title: "The Witch",
      director: "Robert Eggers",
      image: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/the-witch-poster.jpg",
      rank: "3"
    },
    {
      id: 49,
      title: "Hellboy",
      director: "Neil Marshall",
      image: "https://i.pinimg.com/originals/b9/3c/c3/b93cc30f388ef29c8eef6bc0c343ee7c.jpg",
      rank: "2"
    },
    {
      id: 51,
      title: "The Lion King",
      director: "Jon Favreau",
      image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
      rank: "5"
    },
    {
      id: 52,
      title: "Toy Story 4",
      director: "Josh Cooley",
      image: "http://cdn.collider.com/wp-content/uploads/2018/11/toy-story-4-poster1.jpg",
      rank: "4"
    }
  ]

  export const useMovie = () => {
    return movieArray.slice()
}