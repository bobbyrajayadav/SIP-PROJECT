// User Authentication
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let watchlists = JSON.parse(localStorage.getItem('watchlists')) || {};

const movieCategories = {
  popular: [
    {
      title: 'Stranger Things',
      poster: 'https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      year: '2016',
      rating: '8.7',
      duration: '4 Seasons',
      description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
      cast: 'Millie Bobby Brown, Finn Wolfhard, Winona Ryder',
      genres: ['Drama', 'Fantasy', 'Horror'],
      videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU'
    },
    {
      title: 'Money Heist',
      poster: 'https://image.tmdb.org/t/p/original/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
      year: '2017',
      rating: '8.3',
      duration: '5 Seasons',
      description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
      cast: 'Úrsula Corberó, Álvaro Morte, Itziar Ituño',
      genres: ['Crime', 'Drama', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/TFJwUwnShnA'
    },
    {
      title: 'Breaking Bad',
      poster: 'https://image.tmdb.org/t/p/original/3x1UIs1fheRwdaaFBktmLDbCfZQ.jpg',
      year: '2008',
      rating: '9.5',
      duration: '5 Seasons',
      description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future.',
      cast: 'Bryan Cranston, Aaron Paul, Anna Gunn',
      genres: ['Crime', 'Drama', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/HhesaQXLuRY'
    },
    {
      title: 'The Witcher',
      poster: 'https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg',
      year: '2019',
      rating: '8.2',
      duration: '2 Seasons',
      description: 'Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.',
      cast: 'Henry Cavill, Anya Chalotra, Freya Allan',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/ndl1W4ltcmg'
    },
    {
      title: 'The Last of Us',
      poster: 'https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      year: '2023',
      rating: '8.8',
      duration: '1 Season',
      description: 'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone.',
      cast: 'Pedro Pascal, Bella Ramsey, Gabriel Luna',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/uLtkt8BonwM'
    },
    {
      title: 'House of the Dragon',
      poster: 'https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg',
      year: '2022',
      rating: '8.5',
      duration: '1 Season',
      description: 'The story of the Targaryen civil war that took place about 200 years before events portrayed in "Game of Thrones."',
      cast: 'Emma D\'Arcy, Matt Smith, Olivia Cooke',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/DotnJ7tTA34'
    },
    {
      title: 'Wednesday',
      poster: 'https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      year: '2022',
      rating: '8.4',
      duration: '1 Season',
      description: 'Follows Wednesday Addams\' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the supernatural mystery.',
      cast: 'Jenna Ortega, Gwendoline Christie, Riki Lindhome',
      genres: ['Comedy', 'Crime', 'Family'],
      videoUrl: 'https://www.youtube.com/embed/Q73UhUTs6y0'
    },
    {
      title: 'The Bear',
      poster: 'https://image.tmdb.org/t/p/original/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg',
      year: '2022',
      rating: '8.6',
      duration: '2 Seasons',
      description: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
      cast: 'Jeremy Allen White, Ebon Moss-Bachrach, Ayo Edebiri',
      genres: ['Comedy', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/YrZfqM7QyME'
    }
  ],
  trending: [
    {
      title: 'Squid Game',
      poster: 'https://image.tmdb.org/t/p/original/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
      year: '2021',
      rating: '8.7',
      duration: '1 Season',
      description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games. Inside, a tempting prize awaits — with deadly high stakes.',
      cast: 'Lee Jung-jae, Park Hae-soo, Wi Ha-jun',
      genres: ['Action', 'Drama', 'Mystery'],
      videoUrl: 'https://www.youtube.com/embed/oqxAJKy0ii4'
    },
    {
      title: 'Dark',
      poster: 'https://image.tmdb.org/t/p/original/3LTPRjY3Kf6yQ8zT0bGz4p5hM1U.jpg',
      year: '2017',
      rating: '8.8',
      duration: '3 Seasons',
      description: 'A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.',
      cast: 'Louis Hofmann, Lisa Vicari, Maja Schöne',
      genres: ['Crime', 'Drama', 'Mystery'],
      videoUrl: 'https://www.youtube.com/embed/ESEUoa-mz2c'
    },
    {
      title: 'The Crown',
      poster: 'https://image.tmdb.org/t/p/original/ltz4JfWb1xkLQGd6h1F2l3rG2UO.jpg',
      year: '2016',
      rating: '8.7',
      duration: '5 Seasons',
      description: 'This drama follows the political rivalries and romance of Queen Elizabeth II\'s reign and the events that shaped the second half of the 20th century.',
      cast: 'Claire Foy, Olivia Colman, Imelda Staunton',
      genres: ['Biography', 'Drama', 'History'],
      videoUrl: 'https://www.youtube.com/embed/JWtnJjn6ng0'
    },
    {
      title: 'Narcos',
      poster: 'https://image.tmdb.org/t/p/original/rTmal9fDbwh5F0waol2hq35U4ah.jpg',
      year: '2015',
      rating: '8.8',
      duration: '3 Seasons',
      description: 'The true story of Colombia\'s infamously violent and powerful drug cartels fuels this gritty gangster drama series.',
      cast: 'Wagner Moura, Boyd Holbrook, Pedro Pascal',
      genres: ['Biography', 'Crime', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/U7elNhHwgBU'
    },
    {
      title: 'Yellowjackets',
      poster: 'https://image.tmdb.org/t/p/original/5DUMPBSnHOZsbBv81GFXZXvDGr6.jpg',
      year: '2021',
      rating: '7.9',
      duration: '2 Seasons',
      description: 'A team of wildly talented high school girls soccer players who become the (un)lucky survivors of a plane crash deep in the Canadian wilderness.',
      cast: 'Melanie Lynskey, Tawny Cypress, Christina Ricci',
      genres: ['Drama', 'Horror', 'Mystery'],
      videoUrl: 'https://www.youtube.com/embed/1V1uW_Vfn6w'
    },
    {
      title: 'Succession',
      poster: 'https://image.tmdb.org/t/p/original/5kAGbi9Mzcj8a83sNXwhP1NqO1E.jpg',
      year: '2018',
      rating: '8.8',
      duration: '4 Seasons',
      description: 'Follows the Roy family, known for controlling the biggest media and entertainment company in the world.',
      cast: 'Brian Cox, Jeremy Strong, Sarah Snook',
      genres: ['Drama'],
      videoUrl: 'https://www.youtube.com/embed/OzYxJV_rmE8'
    },
    {
      title: 'The Mandalorian',
      poster: 'https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
      year: '2019',
      rating: '8.7',
      duration: '3 Seasons',
      description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
      cast: 'Pedro Pascal, Carl Weathers, Gina Carano',
      genres: ['Action', 'Adventure', 'Fantasy'],
      videoUrl: 'https://www.youtube.com/embed/aOC8E8z_ifw'
    },
    {
      title: 'Game of Thrones',
      poster: 'https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
      year: '2011',
      rating: '8.8',
      duration: '8 Seasons',
      description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      cast: 'Emilia Clarke, Peter Dinklage, Kit Harington',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/gcTkNV5Vg1E'
    }
  ],
  action: [
    {
      title: 'John Wick',
      poster: 'https://image.tmdb.org/t/p/original/5vHssUeVe25bMrof1HyaPyWgaP.jpg',
      year: '2014',
      rating: '7.4',
      duration: '2h 1m',
      description: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
      cast: 'Keanu Reeves, Michael Nyqvist, Alfie Allen',
      genres: ['Action', 'Crime', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/2AUmvWm5ZDQ'
    },
    {
      title: 'Mission Impossible',
      poster: 'https://image.tmdb.org/t/p/original/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg',
      year: '1996',
      rating: '7.1',
      duration: '1h 50m',
      description: 'An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.',
      cast: 'Tom Cruise, Jon Voight, Emmanuelle Béart',
      genres: ['Action', 'Adventure', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/Ohws8y572KE'
    },
    {
      title: 'The Matrix',
      poster: 'https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
      year: '1999',
      rating: '8.7',
      duration: '2h 16m',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      cast: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
      genres: ['Action', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/m8e-FF8MsqU'
    },
    {
      title: 'Die Hard',
      poster: 'https://image.tmdb.org/t/p/original/yFihWxQhq8SvrgIhYfN3OaTd8XY.jpg',
      year: '1988',
      rating: '8.2',
      duration: '2h 12m',
      description: 'An action classic about a New York cop who single-handedly takes on a group of terrorists who have taken hostages in a Los Angeles office building.',
      cast: 'Bruce Willis, Alan Rickman, Bonnie Bedelia',
      genres: ['Action', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/2TQ-pOvI6Xo'
    },
    {
      title: 'Mad Max: Fury Road',
      poster: 'https://image.tmdb.org/t/p/original/hA2ple9q4qnwxp3hKVNhroR2dfP.jpg',
      year: '2015',
      rating: '8.1',
      duration: '2h',
      description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners.',
      cast: 'Tom Hardy, Charlize Theron, Nicholas Hoult',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/hA2ple9q4qnwxp3hKVNhroR2dfP'
    },
    {
      title: 'The Dark Knight',
      poster: 'https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      year: '2008',
      rating: '9.0',
      duration: '2h 32m',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.',
      cast: 'Christian Bale, Heath Ledger, Aaron Eckhart',
      genres: ['Action', 'Crime', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY'
    },
    {
      title: 'Inception',
      poster: 'https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      year: '2010',
      rating: '8.8',
      duration: '2h 28m',
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/YoHD9XEInc0'
    },
    {
      title: 'The Avengers',
      poster: 'https://image.tmdb.org/t/p/original/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
      year: '2012',
      rating: '8.0',
      duration: '2h 23m',
      description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army.',
      cast: 'Robert Downey Jr., Chris Evans, Scarlett Johansson',
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/eOrNdBpGMv8'
    }
  ],
  drama: [
    {
      title: 'The Godfather',
      poster: 'https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      year: '1972',
      rating: '9.2',
      duration: '2h 55m',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      cast: 'Marlon Brando, Al Pacino, James Caan',
      genres: ['Crime', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/sY1S34973zA'
    },
    {
      title: 'Shawshank Redemption',
      poster: 'https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      year: '1994',
      rating: '9.3',
      duration: '2h 22m',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      cast: 'Tim Robbins, Morgan Freeman, Bob Gunton',
      genres: ['Drama'],
      videoUrl: 'https://www.youtube.com/embed/6hB3S9bIaco'
    },
    {
      title: 'Forrest Gump',
      poster: 'https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      year: '1994',
      rating: '8.8',
      duration: '2h 22m',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man.',
      cast: 'Tom Hanks, Robin Wright, Gary Sinise',
      genres: ['Drama', 'Romance'],
      videoUrl: 'https://www.youtube.com/embed/bLvqoHBptjg'
    },
    {
      title: 'The Green Mile',
      poster: 'https://image.tmdb.org/t/p/original/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
      year: '1999',
      rating: '8.6',
      duration: '3h 9m',
      description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape.',
      cast: 'Tom Hanks, Michael Clarke Duncan, David Morse',
      genres: ['Crime', 'Drama', 'Fantasy'],
      videoUrl: 'https://www.youtube.com/embed/Ki4haFrqSrw'
    },
    {
      title: 'The Silence of the Lambs',
      poster: 'https://image.tmdb.org/t/p/original/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg',
      year: '1991',
      rating: '8.6',
      duration: '1h 58m',
      description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
      cast: 'Jodie Foster, Anthony Hopkins, Lawrence A. Bonney',
      genres: ['Crime', 'Drama', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/W6Mm8Sbe__o'
    },
    {
      title: 'Pulp Fiction',
      poster: 'https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
      year: '1994',
      rating: '8.9',
      duration: '2h 34m',
      description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      cast: 'John Travolta, Uma Thurman, Samuel L. Jackson',
      genres: ['Crime', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY'
    },
    {
      title: 'Fight Club',
      poster: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      year: '1999',
      rating: '8.8',
      duration: '2h 19m',
      description: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
      cast: 'Brad Pitt, Edward Norton, Helena Bonham Carter',
      genres: ['Drama'],
      videoUrl: 'https://www.youtube.com/embed/SUXWAEX2jlg'
    },
    {
      title: 'The Departed',
      poster: 'https://image.tmdb.org/t/p/original/n4H2vuvYsZVczfx7JCztl8Wg1e.jpg',
      year: '2006',
      rating: '8.5',
      duration: '2h 31m',
      description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
      cast: 'Leonardo DiCaprio, Matt Damon, Jack Nicholson',
      genres: ['Crime', 'Drama', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/auYbpnEwBBg'
    }
  ],
  scifi: [
    {
      title: 'Interstellar',
      poster: 'https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      year: '2014',
      rating: '8.6',
      duration: '2h 49m',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
      genres: ['Adventure', 'Drama', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/2LqzF5WauAw'
    },
    {
      title: 'Blade Runner',
      poster: 'https://image.tmdb.org/t/p/original/63N9uy8nd9j7Eog2cPQi6vwf5wQ.jpg',
      year: '1982',
      rating: '8.1',
      duration: '1h 57m',
      description: 'A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.',
      cast: 'Harrison Ford, Rutger Hauer, Sean Young',
      genres: ['Action', 'Drama', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/eogpIG53Cis'
    },
    {
      title: 'Star Wars',
      poster: 'https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
      year: '1977',
      rating: '8.6',
      duration: '2h 1m',
      description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station.',
      cast: 'Mark Hamill, Harrison Ford, Carrie Fisher',
      genres: ['Action', 'Adventure', 'Fantasy'],
      videoUrl: 'https://www.youtube.com/embed/vZ734NWnAHA'
    },
    {
      title: 'Dune',
      poster: 'https://image.tmdb.org/t/p/original/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg',
      year: '2021',
      rating: '8.0',
      duration: '2h 35m',
      description: 'Feature adaptation of Frank Herbert\'s science fiction novel about the son of a noble family entrusted with the protection of the most valuable asset in the galaxy.',
      cast: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/n9xhJrPXop4'
    },
    {
      title: 'The Martian',
      poster: 'https://image.tmdb.org/t/p/original/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg',
      year: '2015',
      rating: '8.0',
      duration: '2h 24m',
      description: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
      cast: 'Matt Damon, Jessica Chastain, Kristen Wiig',
      genres: ['Adventure', 'Drama', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/ej3ioOneTy8'
    },
    {
      title: 'Arrival',
      poster: 'https://image.tmdb.org/t/p/original/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg',
      year: '2016',
      rating: '7.9',
      duration: '1h 56m',
      description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.',
      cast: 'Amy Adams, Jeremy Renner, Forest Whitaker',
      genres: ['Drama', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/tFMo3UJ4B4g'
    },
    {
      title: 'Ex Machina',
      poster: 'https://image.tmdb.org/t/p/original/btbRB7BrD887j5NrvjxceRDmaot.jpg',
      year: '2014',
      rating: '7.7',
      duration: '1h 48m',
      description: 'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.',
      cast: 'Alicia Vikander, Domhnall Gleeson, Oscar Isaac',
      genres: ['Drama', 'Sci-Fi', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/XYGzRB4Pnq8'
    },
    {
      title: 'Annihilation',
      poster: 'https://image.tmdb.org/t/p/original/dkqaDvhv6sgqn1TPpNuipTq4LcW.jpg',
      year: '2018',
      rating: '6.8',
      duration: '1h 55m',
      description: 'A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don\'t apply.',
      cast: 'Natalie Portman, Jennifer Jason Leigh, Tessa Thompson',
      genres: ['Adventure', 'Drama', 'Horror'],
      videoUrl: 'https://www.youtube.com/embed/89OP78l9oF0'
    }
  ],
  tvPopular: [
    {
      title: 'Game of Thrones',
      poster: 'https://image.tmdb.org/t/p/original/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
      year: '2011',
      rating: '8.8',
      duration: '8 Seasons',
      description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      cast: 'Emilia Clarke, Peter Dinklage, Kit Harington',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/gcTkNV5Vg1E'
    },
    {
      title: 'The Mandalorian',
      poster: 'https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
      year: '2019',
      rating: '8.7',
      duration: '3 Seasons',
      description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.',
      cast: 'Pedro Pascal, Carl Weathers, Gina Carano',
      genres: ['Action', 'Adventure', 'Fantasy'],
      videoUrl: 'https://www.youtube.com/embed/aOC8E8z_ifw'
    },
    {
      title: 'The Last of Us',
      poster: 'https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      year: '2023',
      rating: '8.8',
      duration: '1 Season',
      description: 'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone.',
      cast: 'Pedro Pascal, Bella Ramsey, Gabriel Luna',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/uLtkt8BonwM'
    },
    {
      title: 'House of the Dragon',
      poster: 'https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg',
      year: '2022',
      rating: '8.5',
      duration: '1 Season',
      description: 'The story of the Targaryen civil war that took place about 200 years before events portrayed in "Game of Thrones."',
      cast: 'Emma D\'Arcy, Matt Smith, Olivia Cooke',
      genres: ['Action', 'Adventure', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/DotnJ7tTA34'
    },
    {
      title: 'The Boys',
      poster: 'https://image.tmdb.org/t/p/original/mYjSejQzBJvDFdxgYNNlLPLuXmg.jpg',
      year: '2019',
      rating: '8.7',
      duration: '3 Seasons',
      description: 'A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.',
      cast: 'Karl Urban, Jack Quaid, Antony Starr',
      genres: ['Action', 'Comedy', 'Crime'],
      videoUrl: 'https://www.youtube.com/embed/MiQr8sUwXqk'
    },
    {
      title: 'Westworld',
      poster: 'https://image.tmdb.org/t/p/original/6aj09UTMQNyfSfk0ZXm1axiEW0U.jpg',
      year: '2016',
      rating: '8.5',
      duration: '4 Seasons',
      description: 'Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.',
      cast: 'Evan Rachel Wood, Jeffrey Wright, Ed Harris',
      genres: ['Drama', 'Mystery', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/Iu-R5-wdF1k'
    },
    {
      title: 'Black Mirror',
      poster: 'https://image.tmdb.org/t/p/original/7PRddOThN7Qo5yNfcJ3MpckH2F.jpg',
      year: '2011',
      rating: '8.8',
      duration: '5 Seasons',
      description: 'An anthology series exploring a twisted, high-tech multiverse where humanity\'s greatest innovations and darkest instincts collide.',
      cast: 'Various',
      genres: ['Drama', 'Sci-Fi', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/jDiYGjp5iFg'
    },
    {
      title: 'The Walking Dead',
      poster: 'https://image.tmdb.org/t/p/original/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
      year: '2010',
      rating: '8.2',
      duration: '11 Seasons',
      description: 'Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.',
      cast: 'Andrew Lincoln, Norman Reedus, Melissa McBride',
      genres: ['Drama', 'Horror', 'Thriller'],
      videoUrl: 'https://www.youtube.com/embed/R1v0uFms68U'
    }
  ],
  tvNew: [
    {
      title: 'Wednesday',
      poster: 'https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      year: '2022',
      rating: '8.4',
      duration: '1 Season',
      description: 'Follows Wednesday Addams\' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the supernatural mystery.',
      cast: 'Jenna Ortega, Gwendoline Christie, Riki Lindhome',
      genres: ['Comedy', 'Crime', 'Family'],
      videoUrl: 'https://www.youtube.com/embed/Q73UhUTs6y0'
    },
    {
      title: 'The Bear',
      poster: 'https://image.tmdb.org/t/p/original/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg',
      year: '2022',
      rating: '8.6',
      duration: '2 Seasons',
      description: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
      cast: 'Jeremy Allen White, Ebon Moss-Bachrach, Ayo Edebiri',
      genres: ['Comedy', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/YrZfqM7QyME'
    },
    {
      title: 'Yellowjackets',
      poster: 'https://image.tmdb.org/t/p/original/5DUMPBSnHOZsbBv81GFXZXvDGr6.jpg',
      year: '2021',
      rating: '7.9',
      duration: '2 Seasons',
      description: 'A team of wildly talented high school girls soccer players who become the (un)lucky survivors of a plane crash deep in the Canadian wilderness.',
      cast: 'Melanie Lynskey, Tawny Cypress, Christina Ricci',
      genres: ['Drama', 'Horror', 'Mystery'],
      videoUrl: 'https://www.youtube.com/embed/1V1uW_Vfn6w'
    },
    {
      title: 'Succession',
      poster: 'https://image.tmdb.org/t/p/original/5kAGbi9Mzcj8a83sNXwhP1NqO1E.jpg',
      year: '2018',
      rating: '8.8',
      duration: '4 Seasons',
      description: 'Follows the Roy family, known for controlling the biggest media and entertainment company in the world.',
      cast: 'Brian Cox, Jeremy Strong, Sarah Snook',
      genres: ['Drama'],
      videoUrl: 'https://www.youtube.com/embed/OzYxJV_rmE8'
    },
    {
      title: 'Severance',
      poster: 'https://image.tmdb.org/t/p/original/5MiUW9G4BewDQkQw3QWS9jtPJEl.jpg',
      year: '2022',
      rating: '8.7',
      duration: '1 Season',
      description: 'Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives.',
      cast: 'Adam Scott, Zach Cherry, Britt Lower',
      genres: ['Drama', 'Mystery', 'Sci-Fi'],
      videoUrl: 'https://www.youtube.com/embed/xEQP4VVuyrY'
    },
    {
      title: 'The White Lotus',
      poster: 'https://image.tmdb.org/t/p/original/5UZ8bDo3FbZQgcQRhIZU6SWW1FB.jpg',
      year: '2021',
      rating: '7.6',
      duration: '2 Seasons',
      description: 'Follows the exploits of various employees and guests at an exclusive tropical resort over the span of a week.',
      cast: 'Jennifer Coolidge, Murray Bartlett, Connie Britton',
      genres: ['Comedy', 'Drama'],
      videoUrl: 'https://www.youtube.com/embed/TGLqJzGzV2w'
    },
    {
      title: 'Euphoria',
      poster: 'https://image.tmdb.org/t/p/original/jtnfNzqZwN4E32FGGxx1YZaBWWf.jpg',
      year: '2019',
      rating: '8.4',
      duration: '2 Seasons',
      description: 'A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.',
      cast: 'Zendaya, Hunter Schafer, Jacob Elordi',
      genres: ['Drama'],
      videoUrl: 'https://www.youtube.com/embed/6XGnv7Z5KwI'
    },
    {
      title: 'Ted Lasso',
      poster: 'https://image.tmdb.org/t/p/original/34OGjFEbHj0E3lE2w0iTUVq0CBz.jpg',
      year: '2020',
      rating: '8.8',
      duration: '3 Seasons',
      description: 'Follows US American football coach Ted Lasso heading to the UK to manage a struggling London football team in the top flight of English football.',
      cast: 'Jason Sudeikis, Hannah Waddingham, Jeremy Swift',
      genres: ['Comedy', 'Drama', 'Sport'],
      videoUrl: 'https://www.youtube.com/embed/3u7EIiohs6U'
    }
  ]
};

// Function to get current user's watchlist
function getCurrentUserWatchlist() {
  if (!currentUser) return [];
  return watchlists[currentUser.email] || [];
}

// Function to save watchlist
function saveWatchlist() {
  if (currentUser) {
    watchlists[currentUser.email] = getCurrentUserWatchlist();
    localStorage.setItem('watchlists', JSON.stringify(watchlists));
  }
}

// Function to show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

// Function to toggle movie in watchlist
function toggleWatchlist(movie) {
  if (!currentUser) {
    showNotification('Please login to add movies to your list');
    return;
  }

  const userWatchlist = getCurrentUserWatchlist();
  const index = userWatchlist.findIndex(m => m.title === movie.title);
  
  if (index === -1) {
    userWatchlist.push(movie);
    showNotification(`${movie.title} added to My List`);
  } else {
    userWatchlist.splice(index, 1);
    showNotification(`${movie.title} removed from My List`);
  }

  watchlists[currentUser.email] = userWatchlist;
  saveWatchlist();
  
  // Refresh all movie sections
  refreshAllMovieSections();
}

// Function to update watchlist display
function updateWatchlistDisplay() {
  const watchlistContainer = document.getElementById('watchlist');
  if (!watchlistContainer) return;
  
  const userWatchlist = getCurrentUserWatchlist();
  
  if (!currentUser) {
    watchlistContainer.innerHTML = `
      <div class="empty-watchlist">
        <i class="fas fa-user-lock"></i>
        <p>Please login to view your watchlist</p>
        <button class="auth-btn" onclick="document.getElementById('login-btn').click()">Login</button>
      </div>
    `;
    return;
  }
  
  if (userWatchlist.length === 0) {
    watchlistContainer.innerHTML = `
      <div class="empty-watchlist">
        <i class="fas fa-film"></i>
        <p>Your watchlist is empty</p>
        <p>Add movies and shows to your list to watch them later</p>
      </div>
    `;
    return;
  }

  watchlistContainer.innerHTML = '';
  userWatchlist.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';
    // Create a safe string representation of the movie object
    const movieData = {
      title: movie.title,
      poster: movie.poster,
      year: movie.year || '',
      rating: movie.rating || '',
      duration: movie.duration || '',
      description: movie.description || '',
      cast: movie.cast || '',
      genres: movie.genres || [],
      videoUrl: movie.videoUrl || ''
    };
    movieDiv.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <button class="play-btn" onclick="showMovieDetails(${JSON.stringify(movieData).replace(/"/g, '&quot;')})">
          <i class="fas fa-play"></i> Play
        </button>
        <button class="remove-btn" onclick="toggleWatchlist(${JSON.stringify(movieData).replace(/"/g, '&quot;')})">
          <i class="fas fa-times"></i> Remove
        </button>
      </div>
    `;
    watchlistContainer.appendChild(movieDiv);
  });
}

// Function to render movies in a specific container
function renderMovies(containerId, movies) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  movies.forEach(movie => {
    const movieDiv = document.createElement('div');
    movieDiv.className = 'movie';
    
    // Create a safe string representation of the movie object
    const movieData = {
      title: movie.title,
      poster: movie.poster,
      year: movie.year || '',
      rating: movie.rating || '',
      duration: movie.duration || '',
      description: movie.description || '',
      cast: movie.cast || '',
      genres: movie.genres || [],
      videoUrl: movie.videoUrl || ''
    };

    // Check if movie is in watchlist
    const isInWatchlist = currentUser && getCurrentUserWatchlist().some(m => m.title === movie.title);
    
    // Create movie card HTML
    movieDiv.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" onerror="this.onerror=null; this.src='https://via.placeholder.com/200x300/1a1a1a/666666?text=No+Image'; this.classList.add('error');">
      <div class="movie-info">
        <div class="movie-title">${movie.title}</div>
        <button class="play-btn" onclick="showMovieDetails(${JSON.stringify(movieData).replace(/"/g, '&quot;')})">
          <i class="fas fa-play"></i> Play
        </button>
        <button class="add-list-btn ${isInWatchlist ? 'in-list' : ''}" 
                onclick="toggleWatchlist(${JSON.stringify(movieData).replace(/"/g, '&quot;')})">
          <i class="fas ${isInWatchlist ? 'fa-check' : 'fa-plus'}"></i> 
          ${isInWatchlist ? 'In My List' : 'My List'}
        </button>
      </div>
    `;
    container.appendChild(movieDiv);
  });
}

// Function to show movie details in modal
function showMovieDetails(movie) {
  const modal = document.getElementById('movie-modal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalPoster = modal.querySelector('.modal-poster');
  const modalYear = modal.querySelector('.modal-year');
  const modalRating = modal.querySelector('.modal-rating');
  const modalDuration = modal.querySelector('.modal-duration');
  const modalDescription = modal.querySelector('.modal-description');
  const modalCast = modal.querySelector('.cast-list');
  const modalGenres = modal.querySelector('.genre-tags');
  const modalVideo = modal.querySelector('.modal-video');

  // Add styles for scrollable modal content
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    overflow-y: auto;
  `;

  const modalContent = modal.querySelector('.modal-content');
  if (modalContent) {
    modalContent.style.cssText = `
      background: #1a1a1a;
      padding: 20px;
      border-radius: 8px;
      max-width: 90%;
      width: 800px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      margin: 20px auto;
    `;
  }

  modalTitle.textContent = movie.title;
  modalPoster.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`;
  modalYear.textContent = movie.year || 'N/A';
  modalRating.textContent = movie.rating ? `⭐ ${movie.rating}` : 'N/A';
  modalDuration.textContent = movie.duration || 'N/A';
  modalDescription.textContent = movie.description || 'No description available';
  modalCast.textContent = movie.cast || 'Cast information not available';
  modalGenres.innerHTML = (movie.genres && movie.genres.length > 0) 
    ? movie.genres.map(genre => `<span class="genre-tag">${genre}</span>`).join('')
    : '<span class="genre-tag">No genres available</span>';

  // Add video player if available
  if (movie.videoUrl) {
    modalVideo.innerHTML = `
      <div class="video-container">
        <div class="video-controls">
          <button class="fullscreen-btn" onclick="toggleFullscreen(this)">
            <i class="fas fa-expand"></i>
          </button>
        </div>
        <iframe 
          width="100%" 
          height="400" 
          src="${movie.videoUrl}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    `;
  } else {
    modalVideo.innerHTML = '<p>Video not available</p>';
  }

  modal.style.display = 'flex';
}

// Function to close modal
function closeModal() {
  const modal = document.getElementById('movie-modal');
  // Stop any playing video
  const videoIframe = modal.querySelector('iframe');
  if (videoIframe) {
    // Remove the src attribute to stop the video
    videoIframe.src = '';
  }
  modal.style.display = 'none';
}

// Add fullscreen toggle functionality
function toggleFullscreen(button) {
  const videoContainer = button.closest('.video-container');
  const iframe = videoContainer.querySelector('iframe');
  const icon = button.querySelector('i');

  if (!document.fullscreenElement) {
    // Enter fullscreen
    if (videoContainer.requestFullscreen) {
      videoContainer.requestFullscreen();
    } else if (videoContainer.webkitRequestFullscreen) {
      videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
      videoContainer.msRequestFullscreen();
    }
    icon.classList.remove('fa-expand');
    icon.classList.add('fa-compress');
    iframe.style.height = '100vh';
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    icon.classList.remove('fa-compress');
    icon.classList.add('fa-expand');
    iframe.style.height = '400px';
  }
}

// Add event listener for fullscreen change
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

function handleFullscreenChange() {
  const videoContainers = document.querySelectorAll('.video-container');
  videoContainers.forEach(container => {
    const button = container.querySelector('.fullscreen-btn');
    const icon = button.querySelector('i');
    const iframe = container.querySelector('iframe');
    
    if (!document.fullscreenElement && 
        !document.webkitFullscreenElement && 
        !document.mozFullScreenElement && 
        !document.msFullscreenElement) {
      // Exited fullscreen
      icon.classList.remove('fa-compress');
      icon.classList.add('fa-expand');
      iframe.style.height = '400px';
    }
  });
}

// Function to handle navigation
function handleNavigation() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  function showSection(sectionId) {
    sections.forEach(section => {
      section.classList.remove('active');
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    const targetSection = document.getElementById(sectionId);
    const targetLink = document.querySelector(`[href="#${sectionId}"]`);
    
    if (targetSection) targetSection.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId);
    });
  });

  const initialHash = window.location.hash.substring(1) || 'home';
  showSection(initialHash);
}

// Search functionality
function handleSearch() {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const allMovies = Object.values(movieCategories).flat();
    const filteredMovies = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(searchTerm)
    );

    // Show search results in a new section
    const searchSection = document.createElement('section');
    searchSection.className = 'section';
    searchSection.id = 'search-results';
    searchSection.innerHTML = `
      <section class="movie-row">
        <h2>Search Results</h2>
        <div class="movies" id="search-movies"></div>
      </section>
    `;

    // Remove existing search results
    const existingSearch = document.getElementById('search-results');
    if (existingSearch) existingSearch.remove();

    if (searchTerm) {
      document.querySelector('main').appendChild(searchSection);
      renderMovies('search-movies', filteredMovies);
      showSection('search-results');
    } else {
      showSection('home');
    }
  });
}

// Function to handle user authentication
function handleAuth() {
  const loginModal = document.getElementById('login-modal');
  const signupModal = document.getElementById('signup-modal');
  const loginBtn = document.getElementById('login-btn');
  const signupBtn = document.getElementById('signup-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const userInfo = document.getElementById('user-info');
  const authButtons = document.getElementById('auth-buttons');
  const userName = document.querySelector('.user-name');

  // Show/hide auth modals
  loginBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
  });

  signupBtn.addEventListener('click', () => {
    signupModal.classList.add('active');
  });

  // Close modals
  document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      loginModal.classList.remove('active');
      signupModal.classList.remove('active');
    });
  });

  // Switch between login and signup
  document.getElementById('switch-to-signup').addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    signupModal.classList.add('active');
  });

  document.getElementById('switch-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.classList.remove('active');
    loginModal.classList.add('active');
  });

  // Handle signup
  document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists
    if (users.find(user => user.email === email)) {
      showNotification('Email already registered');
      return;
    }

    // Create new user
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Initialize empty watchlist for new user
    watchlists[email] = [];
    saveWatchlist();

    // Auto login after signup
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateAuthUI();
    signupModal.classList.remove('active');
    showNotification('Account created successfully!');
    
    // Refresh all movie sections
    refreshAllMovieSections();
  });

  // Handle login
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      updateAuthUI();
      loginModal.classList.remove('active');
      showNotification('Logged in successfully!');
      
      // Refresh all movie sections
      refreshAllMovieSections();
    } else {
      showNotification('Invalid email or password');
    }
  });

  // Handle logout
  logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateAuthUI();
    showNotification('Logged out successfully!');
    
    // Refresh all movie sections
    refreshAllMovieSections();
  });

  // Update UI based on auth state
  function updateAuthUI() {
    if (currentUser) {
      userInfo.style.display = 'block';
      authButtons.style.display = 'none';
      userName.textContent = currentUser.name;
    } else {
      userInfo.style.display = 'none';
      authButtons.style.display = 'block';
    }
  }

  // Initial UI update
  updateAuthUI();
}

// Function to refresh all movie sections
function refreshAllMovieSections() {
  // Map category names to container IDs
  const categoryMap = {
    'popular': 'popular-movies',
    'trending': 'trending-movies',
    'action': 'action-movies',
    'drama': 'drama-movies',
    'scifi': 'scifi-movies',
    'tvPopular': 'tv-popular',
    'tvNew': 'tv-new'
  };

  // Render each category
  Object.entries(categoryMap).forEach(([category, containerId]) => {
    if (movieCategories[category]) {
      renderMovies(containerId, movieCategories[category]);
    }
  });

  // Update watchlist display
  updateWatchlistDisplay();
}

// Add this function after the movieCategories object
function createFeaturedCarousel() {
  const featuredMovies = [
    {
      title: 'Stranger Things',
      description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
      poster: 'https://image.tmdb.org/t/p/original/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      videoUrl: 'https://www.youtube.com/embed/b9EkMc79ZSU'
    },
    {
      title: 'The Last of Us',
      description: 'Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone.',
      poster: 'https://image.tmdb.org/t/p/original/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
      videoUrl: 'https://www.youtube.com/embed/uLtkt8BonwM'
    },
    {
      title: 'House of the Dragon',
      description: 'The story of the Targaryen civil war that took place about 200 years before events portrayed in "Game of Thrones."',
      poster: 'https://image.tmdb.org/t/p/original/etj8E2o0Bud0HkONVQPjyCkIvpv.jpg',
      videoUrl: 'https://www.youtube.com/embed/DotnJ7tTA34'
    },
    {
      title: 'Wednesday',
      description: 'Follows Wednesday Addams\' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the supernatural mystery.',
      poster: 'https://image.tmdb.org/t/p/original/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
      videoUrl: 'https://www.youtube.com/embed/Q73UhUTs6y0'
    },
    {
      title: 'The Bear',
      description: 'A young chef from the fine dining world returns to Chicago to run his family\'s sandwich shop.',
      poster: 'https://image.tmdb.org/t/p/original/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg',
      videoUrl: 'https://www.youtube.com/embed/YrZfqM7QyME'
    }
  ];

  const featuredSection = document.querySelector('.featured');
  if (!featuredSection) return;

  let currentSlide = 0;

  // Create carousel structure
  featuredSection.innerHTML = `
    <div class="featured-carousel">
      ${featuredMovies.map((movie, index) => `
        <div class="featured-slide ${index === 0 ? 'active' : ''}" style="background-image: url('${movie.poster}')">
          <div class="featured-content">
            <h1>${movie.title}</h1>
            <p>${movie.description}</p>
            <div class="featured-buttons">
              <button class="play-btn" onclick="showMovieDetails(${JSON.stringify(movie).replace(/"/g, '&quot;')})">
                <i class="fas fa-play"></i> Play
              </button>
              <button class="add-list-btn" onclick="toggleWatchlist(${JSON.stringify(movie).replace(/"/g, '&quot;')})">
                <i class="fas fa-plus"></i> My List
              </button>
            </div>
          </div>
        </div>
      `).join('')}
      <button class="carousel-btn prev" onclick="changeSlide(-1)">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="carousel-btn next" onclick="changeSlide(1)">
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="carousel-dots">
        ${featuredMovies.map((_, index) => `
          <span class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></span>
        `).join('')}
      </div>
    </div>
  `;

  // Auto-advance slides every 5 seconds
  setInterval(() => changeSlide(1), 5000);
}

// Add these functions for carousel control
function changeSlide(direction) {
  const slides = document.querySelectorAll('.featured-slide');
  const dots = document.querySelectorAll('.dot');
  const currentSlide = document.querySelector('.featured-slide.active');
  const currentIndex = Array.from(slides).indexOf(currentSlide);
  
  let newIndex = currentIndex + direction;
  if (newIndex >= slides.length) newIndex = 0;
  if (newIndex < 0) newIndex = slides.length - 1;
  
  currentSlide.classList.remove('active');
  dots[currentIndex].classList.remove('active');
  
  slides[newIndex].classList.add('active');
  dots[newIndex].classList.add('active');
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.featured-slide');
  const dots = document.querySelectorAll('.dot');
  const currentSlide = document.querySelector('.featured-slide.active');
  const currentIndex = Array.from(slides).indexOf(currentSlide);
  
  currentSlide.classList.remove('active');
  dots[currentIndex].classList.remove('active');
  
  slides[index].classList.add('active');
  dots[index].classList.add('active');
}

// Initialize the page
function init() {
  // Initialize navigation
  handleNavigation();

  // Initialize search
  handleSearch();

  // Initialize featured carousel
  createFeaturedCarousel();

  // Initialize modal close button
  const modal = document.getElementById('movie-modal');
  const closeBtn = modal.querySelector('.close-modal');
  closeBtn.addEventListener('click', closeModal);

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Initialize authentication
  handleAuth();

  // Initial render of all movie sections
  refreshAllMovieSections();

  // Create footer
  createFooter();
}

// Add footer creation function
function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="footer-content">
      <div class="footer-section">
        <h3>Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#movies">Movies</a></li>
          <li><a href="#tv-shows">TV Shows</a></li>
          <li><a href="#my-list">My List</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Categories</h3>
        <ul>
          <li><a href="#action">Action</a></li>
          <li><a href="#drama">Drama</a></li>
          <li><a href="#sci-fi">Sci-Fi</a></li>
          <li><a href="#trending">Trending</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Help</h3>
        <ul>
          <li><a href="#account">Account</a></li>
          <li><a href="#help-center">Help Center</a></li>
          <li><a href="#terms">Terms of Use</a></li>
          <li><a href="#privacy">Privacy</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Connect With Us</h3>
        <div class="social-links">
          <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
          <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-link"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 MovieFlix. All rights reserved.</p>
    </div>
  `;
  document.body.appendChild(footer);
}

// Start the application
init(); 