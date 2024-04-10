let movies = [
  {
    id: 0,
    movie: "The Secret Garden",
    imdb: "5.6/10",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQiKaDNhZ0GHlbgr_ZKAq80TX7CE7hrJ1hA&usqp=CAU",
    releaseDate: "15 April 2020 (France)",
    director: "Marc Munden",
    description:
      "Mary, an orphan girl, moves to her uncle's isolated house in Yorkshire. Soon, she discovers a hidden fantasy world in the estate's garden.",
  },
  {
    id: 1,
    movie: "Alice in Wonderland",
    imdb: "6.4/10",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/alice-in-wonderland-et00004391-24-03-2017-20-03-30.jpg",
    releaseDate: "5 March 2010 (USA)",
    director: "Tim Burton",
    description:
      "Alice, now 19 years old, follows a rabbit in a blue coat to a magical wonderland from her dreams where she is reunited with her friends who make her realise her true destiny.",
  },
  {
    id: 2,
    movie: "The Lorax",
    imdb: "6.4/10",
    imageUrl:
      "https://hirshhorn.si.edu/wp-content/uploads/2023/03/0032287photo.jpeg",
    releaseDate: "18 May 2012 (India)",
    director: "Chris Renaud",
    description:
      "Ted, a 12-year-old boy, sets out to search the long-extinct Truffula tree to impress the girl of his dreams. However, in his journey, he has to overcome a number of obstacles.",
  },
  {
    id: 3,
    movie: "Rango",
    imdb: "7.2/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTc4NjEyODE1OV5BMl5BanBnXkFtZTcwMjYzNTkxNA@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "20 April 2011 (India)",
    director: "Gore Verbinski",
    description:
      "Rango, a pet chameleon who aspires to be a hero, lands in a drought-affected town plagued by bandits. He claims to be the saviour and makes an attempt to protect it.",
  },
  {
    id: 4,
    movie: "Sesame Street",
    imdb: "8.1/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODM4NDI3OTcxN15BMl5BanBnXkFtZTgwNjc3MjIwMTI@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "10 November 1969",
    director: "N/A",
    description:
      'A longtime favorite of children and adults, and a staple of PBS, "Sesame Street" bridges many cultural and educational gaps with a fun program. Big Bird leads a cast of characters teaching children numbers, colors and the alphabet. Bert and Ernie, Oscar the Grouch and Grover are just a few of the other creatures involved in this show, set on a city street full of valuable learning opportunities.',
  },
  {
    id: 5,
    movie: "Yo Gabba Gabba",
    imdb: "6.9/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNWUxMWU1MDQtYWJiNS00MjllLWI5ZTYtYzNlYjNlZGY5MTc5XkEyXkFqcGdeQXVyOTUyODA4MjE@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "20 August 2007",
    director: "Christian Jacobs, Scott Schultz",
    description:
      'DJ Lance Rock starts the fun each show with the magic words "Yo Gabba Gabba!" Five friendly monsters -- Muno, Brobee, Foofa, Toodee and Plex -- encourage kids to sing and dance along with the preschool series. Part animated and part live action, "Yo Gabba Gabba!" mixes cartoons and magical ideas into the musical episodes.',
  },
  {
    id: 6,
    movie: "The Twilight Zone",
    imdb: "6/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDcxZTQ1MjMtNTYzYy00N2UwLTgwODctNzdjODBhYjIyNGYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    releaseDate: "April 1, 2019",
    director: "Rod Serling",
    description:
      "Jordan Peele hosts and narrates tales of science fiction, fantasy and the occult, exploring humanity's hopes, despairs, prides and prejudices in metaphoric ways.",
  },
  {
    id: 7,
    movie: "Freaks and Geeks",
    imdb: "8.8/10",
    imageUrl: "https://flxt.tmsimg.com/assets/p7895272_b_v9_aa.jpg",
    releaseDate: "25 September 1999 (USA)",
    director: "Paul Feig",
    description:
      "Growing up circa 1980, a misfit high-school student and his pals are probably destined to become new media millionaires, but right now they're stuck in school, where all the girls are a foot taller and bullies terrorize the gym class. Meanwhile, his older sister is flirting with the dope-smoking bad boys, cutting classes and questioning the point of getting good grades",
  },
  {
    id: 8,
    movie: "Terminator 2",
    imdb: "8.6/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    releaseDate: "24 August 1991 (India)",
    director: "James Cameron",
    description:
      "A terminator is sent on a mission to kill Sarah's son, John Connor. However, another cyborg, who was once after Sarah's life, has now been assigned to protect him.",
  },
  {
    id: 9,
    movie: "The Nightmare before Christmas",
    imdb: "7.9/10",
    imageUrl:
      "https://lumiere-a.akamaihd.net/v1/images/p_thenightmarebeforechristmas_19754_abc0f5f5.jpeg",
    releaseDate: "13 October 1993 (USA)",
    director: "Henry Selick",
    description:
      "Jack Skellington, a being from Halloween Town, finds Christmas Town and is instantly enchanted. The situation becomes riveting when his obsession with Christmas leads him to abduct Santa Claus.",
  },
  {
    id: 10,
    movie: "ParaNorman",
    imdb: "7/10",
    imageUrl:
      "https://www.themoviedb.org/t/p/original/9DZPtuYTKYxt6vzHvZ5FLThG4fl.jpg",
    releaseDate: "26 October 2012 (India)",
    director: "Chris Butler, Sam Fell",
    description:
      "Norman Babcock is the resident of an ill-fated town that is reeling under a deadly curse. Norman, with his unique ability to talk to ghosts, and a few companions must together save the town.",
  },
  {
    id: 11,
    movie: "Black Hawk Down",
    imdb: "7.7/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYWMwMzQxZjQtODM1YS00YmFiLTk1YjQtNzNiYWY1MDE4NTdiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    releaseDate: "29 March 2002 (India)",
    director: "Ridley Scott",
    description:
      "Captain Mike Steele leads a team of nearly 100 US Army Rangers who travel to the capital city of Mogadishu to catch the top two lieutenants of a Somali warlord.",
  },
  {
    id: 12,
    movie: "Art of Flight",
    imdb: "8.2/10",
    imageUrl:
      "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/4/23/thoo1z6ubrtzdpism8vb/fo-1maaxmwcs2111-featuremedia",
    releaseDate: "8 September 2011 (USA)",
    director: "Curt Morgan",
    description:
      "The Art of Flight is a Red Bull sponsored documentary film about snowboarding and a successor to That's It, That's All. Directed by Curt Morgan, it premiered in New York City on September 8, 2011, at the Beacon Theatre.",
  },
  {
    id: 13,
    movie: "Family Guy",
    imdb: "8.2/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_.jpg",
    releaseDate: "January 31, 1999 - present",
    director: "Seth MacFarlane",
    description:
      "Peter Griffin and his family of two teenagers, a smart dog, a devilish baby and his wife find themselves in some of the most hilarious scenarios.",
  },
  {
    id: 14,
    movie: " Sherlock BBC",
    imdb: "9.1/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWEzNTFlMTQtMzhjOS00MzQ1LWJjNjgtY2RhMjFhYjQwYjIzXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
    releaseDate: "25 July 2010",
    director: "Mark Gatiss, Arthur Conan Doyle, Steven Moffat, Steve Thompson",
    description:
      "Dr Watson, a former army doctor, finds himself sharing a flat with Sherlock Holmes, an eccentric individual with a knack for solving crimes. Together, they take on the most unusual cases.",
  },
  {
    id: 15,
    movie: "Year of the Horse",
    imdb: "6.6/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWRhMTc2MzAtYTU4Yi00N2VkLWEyNGQtY2NlN2M2YjlmN2YwXkEyXkFqcGdeQXVyMTU1OTMyNDc5._V1_FMjpg_UX1000_.jpg",
    releaseDate: "May 8, 1997",
    director: "Jim Jarmusch",
    description:
      "This film documents Neil Young and Crazy Horse's 1996 concert tour. Jim Jarmusch interviews the band about their long history, and we see backstage footage from the 1970s and 1980s.",
  },
  {
    id: 16,
    movie: "The Evil Dead",
    imdb: "7.4/10",
    imageUrl:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10498_p_v8_ab.jpg",
    releaseDate: "October 15, 1981",
    director: "Sam Raimi",
    description:
      "Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.",
  },
  {
    id: 17,
    movie: "High school of the Dead",
    imdb: "7.2/10",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/34/Highschool_of_the_Dead_vol01.jpg",
    releaseDate: "August 9, 2006 - April 9, 2013",
    director: "Daisuke Satô",
    description:
      "High school students are overwhelmed with the start of the zombie apocalypse.",
  },
  {
    id: 18,
    movie: "The X-Files",
    imdb: "8.6/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDA0MmM4YzUtMzYwZC00OGI2LWE0ODctNzNhNTkwN2FmNTVhXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "September 10, 1993 - May 19, 2002",
    director: "Chris Carter",
    description:
      "Two F.B.I. Agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained, while hidden forces work to impede their efforts.",
  },
  {
    id: 19,
    movie: "Breaking Bad",
    imdb: "9.5/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
    releaseDate: "January 20, 2008 - September 29, 2013",
    director: "Vince Gilligan",
    description:
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
  },
  {
    id: 20,
    movie: "Once Upon a Time in the West",
    imdb: "8.5/10",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/Once_upon_a_Time_in_the_West.jpg",
    releaseDate: "December 20, 1968",
    director: "Sergio Leone",
    description:
      "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
  },
  {
    id: 21,
    movie: "True Grit",
    imdb: "7.6/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTU5MjU3MTI4OF5BMl5BanBnXkFtZTcwMTQxOTAxNA@@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "December 22, 2010",
    director: "Ethan Coen & Joel Coen",
    description:
      "A stubborn teenager enlists the help of a tough U.S. Marshal to track down her father's murderer.",
  },
  {
    id: 22,
    movie: "Top Gun",
    imdb: "6.9/10",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg",
    releaseDate: "May 12, 1986",
    director: "Tony Scott",
    description:
      "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
  },
  {
    id: 23,
    movie: "Cabin in the Woods",
    imdb: "7.0/10",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/84/The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg",
    releaseDate: "December 2011",
    director: "Drew Goddard",
    description:
      "Five college friends head out to a remote cabin for a getaway, but things don't go as planned when they start getting killed. They soon discover that there is more to the cabin than it seems.",
  },
  {
    id: 24,
    movie: "Fawlty Towers",
    imdb: "8.8/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNzJiYjAxNjUtNjFlNC00NWMwLTgxMTAtNjgyYmUzNWE0OWFjXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg",
    releaseDate: "19 September 1975 - 25 October 1979",
    director: "John Howard Davies, Bob Spiers",
    description:
      "Hotel owner Basil Fawlty's incompetence, short fuse, and arrogance form a combination that ensures accidents and trouble are never far away.",
  },
  {
    id: 25,
    movie: "Law & Order",
    imdb: "7.8/10",
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRVefG5-xu8fK5G1u5OT70ZvRuyH5tevOQWr7J9bs7Ehm5OzSrN",
    releaseDate: "September 13, 1990 - May 24, 2010",
    director: "Dick Wolf - Rick Eid",
    description:
      "New York's finest police detectives and prosecutors fight to make the city a safer place. With integrity as the guiding force from investigation to verdict, the teams weigh every perspective in their commitment to finding justice.",
  },
  {
    id: 26,
    movie: "Sons of Anarchy",
    imdb: "8.6/10",
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQw6azMOvNXdi7WBRAP1Hxw3eEa8GUwGzGS5h8m2QQ36Mk1918YAylN9o7LuxvmEC2tRItgUA",
    releaseDate: "September 3, 2008 - December 9, 2014",
    director: "Kurt Sutter",
    description:
      "A biker struggles to balance being a father and being involved in an outlaw motorcycle club.",
  },
  {
    id: 27,
    movie: "Star Trek: The Next Generation",
    imdb: "8.7/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BOWFhYjE4NzMtOWJmZi00NzEyLTg5NTctYmIxMTU1ZDIxMDAyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
    releaseDate: "September 28, 1987 - May 23, 1994",
    director: "Gene Roddenberry",
    description:
      "Set almost 100 years after Captain Kirk's 5-year mission, a new generation of Starfleet officers sets off in the U.S.S. Enterprise-D on its own mission to go where no one has gone before.",
  },
  {
    id: 28,
    movie: "Battlestar Galactica",
    imdb: "8.7/10",
    imageUrl: "",
    releaseDate: "December 8, 2003 - October 27, 2009",
    director: "Glen A. Larson, Ronald D. Moore",
    description:
      "When an old enemy, the Cylons, resurface and obliterate the 12 colonies, the crew of the aged Galactica protect a small civilian fleet - the last of humanity - as they journey toward the fabled 13th colony, Earth.",
  },
  {
    id: 29,
    movie: "Sliders",
    imdb: "7.4/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BODFkNTI0MGYtNjgxOS00MTk3LWEwNTQtZDMzMGRmMmE2NDU2XkEyXkFqcGdeQXVyMjczOTU2NTI@._V1_.jpg",
    releaseDate: "March 22, 1995 - December 29, 1999",
    director: "Tracy Tormé, Robert K. Weiss",
    description:
      "A boy genius and his comrades travel to different parallel universes, trying to find their way back home.",
  },
  {
    id: 30,
    movie: "The House of Cards",
    imdb: "8.6/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNmM4ODU1MzItODYyYi00Y2U0LWFjZjItYTRhZWIwOGMyZTRhXkEyXkFqcGdeQXVyNjc2NTQ4Nzk@._V1_.jpg",
    releaseDate: "February 1, 2013 - November 2, 2018",
    director: "Beau Willimon",
    description:
      "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
  },
  {
    id: 31,
    movie: "The West Wing",
    imdb: "8.9/10",
    imageUrl: "",
    releaseDate: "September 22, 1999 - May 14, 2006",
    director: "Aaron Sorkin",
    description:
      "Inside the lives of staffers in the West Wing of the White House.",
  },
  {
    id: 32,
    movie: "The Tudors",
    imdb: "8.1/10",
    imageUrl: "",
    releaseDate: "1 April 2007 - 20 June 2010",
    director: "Michael Hirst",
    description:
      "A dramatic series about the reign and marriages of King Henry VIII.",
  },
  {
    id: 33,
    movie: "Aeon Flux",
    imdb: "5.4/10",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/%C3%86on_Flux_%28film%29.png",
    releaseDate: "December 2, 2005",
    director: "Karyn Kusama",
    description:
      "Æon Flux is a mysterious assassin working for the Monicans, a group of rebels trying to overthrow the government. When she is sent on a mission to kill the Chairman, a whole new mystery is found.",
  },
  {
    id: 34,
    movie: "Shooter",
    imdb: "7.1/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMGRjMzY0OGItNDc4YS00OGNlLWI3MGYtZjRkNjdiNWUyNDY4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    releaseDate: "March 23, 2007",
    director: "Antoine Fuqua",
    description:
      "A marksman living in exile is coaxed back into action after hearing of a plot to kill the President. After being-double crossed for the attempt and on the run, he sets out for the real killer and the truth.",
  },
  {
    id: 35,
    movie: "Bones Brigade: An Autobiography",
    imdb: "8.0/10",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHnnlxE3FZDrR2_WzD-L3eUd2f52JUzCTn_4s4FMfNg&s",
    releaseDate: "2012",
    director: "Stacy Peralta",
    description:
      "When six teenage boys came together as a skateboarding team in the 1980s, they reinvented not only their chosen sport but themselves too - as they evolved from insecure outsiders to the most influential athletes in the field.",
  },
  {
    id: 36,
    movie: "Exit Through the Gift Shop",
    imdb: "7.9/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjE2NTg1NDM4Ml5BMl5BanBnXkFtZTcwMzMxOTkyMw@@._V1_.jpg",
    releaseDate: "24 January 2010",
    director: "Banksy",
    description:
      "Following the style of some of the world's most prolific street artists, an amateur filmmaker makes a foray into the art world.",
  },
  {
    id: 37,
    movie: "Religulous",
    imdb: "7.6/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTUyNjM5ODc3N15BMl5BanBnXkFtZTcwMDkwNzUyMg@@._V1_.jpg",
    releaseDate: "August 1, 2008 ",
    director: "Larry Charles",
    description: "Bill Maher's take on the current state of world religion.",
  },
  {
    id: 38,
    movie: "Session 9",
    imdb: "6.4/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWYyYzc4MTItOTdkOS00ZTIwLWE2N2MtZjA4N2YxMTI2NjViXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    releaseDate: "August 10, 2001",
    director: "Brad Anderson",
    description:
      "Tensions rise within an asbestos cleaning crew as they work in an abandoned mental hospital with a horrific past that seems to be coming back.",
  },
  {
    id: 39,
    movie: "Insidious",
    imdb: "6.8/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTYyOTAxMDA0OF5BMl5BanBnXkFtZTcwNzgwNTc1NA@@._V1_.jpg",
    releaseDate: "April 1, 2011",
    director: "James Wan",
    description:
      "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
  },
  {
    id: 40,
    movie: "Happy Gilmore",
    imdb: "7.0/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "February 16, 1996",
    director: "Dennis Dugan",
    description:
      "After his grandmothers house is repossessed by the IRS, bad tempered hockey player takes his talents to golf to earn the big bucks and get his grandmothers house back.",
  },
  {
    id: 41,
    movie: "Serenity",
    imdb: "7.8/10",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/Serenity_One_Sheet.jpg",
    releaseDate: "August 22, 2005",
    director: "Joss Whedon",
    description:
      "The crew of the ship Serenity try to evade an assassin sent to recapture telepath River",
  },
  {
    id: 42,
    movie: "The Ren & Stimpy Show",
    imdb: "7.5/10",
    imageUrl:
      "https://images.justwatch.com/poster/310099628/s718/the-ren-and-stimpy-show.jpg",
    releaseDate: "	August 11, 1991 ",
    director: "John Kricfalusi (seasons 1-2), Bob Camp (seasons 3-5)",
    description:
      "Ren, a psychotic Chihuahua, and Stimpson J. Cat, a dimwitted Manx cat who goes by the nickname Stimpy, have a host of unusual adventures.",
  },
  {
    id: 43,
    movie: "Archer",
    imdb: "8.6/10",
    imageUrl:
      "https://resizing.flixster.com/niXP--CaZDXw3MDq8-EZOe-6Xkw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvMWIwOWY5NjItNzEyOC00NTk0LWIzODktOWY1NzVhYTc1YTE1LmpwZw==",
    releaseDate: "September 17, 2009",
    director: "Adam Reed",
    description:
      "Covert black ops and espionage take a back seat to zany personalities and relationships between secret agents and drones.",
  },
  {
    id: 44,
    movie: "South Park",
    imdb: "8.7/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZjNhODYzZGItZWQ3Ny00ZjViLTkxMTUtM2EzN2RjYjU2OGZiXkEyXkFqcGdeQXVyMTI5MTc0OTIy._V1_.jpg",
    releaseDate: "August 13, 1997",
    director: "Trey Parker, Matt Stone, Brian Graden",
    description:
      "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
  },
  {
    id: 45,
    movie: "Futurama",
    imdb: "8.5/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BYWI3MTJkN2UtMTU0Zi00ZjE2LThjMWEtYmQ5YmFiZmU1N2JhXkEyXkFqcGdeQXVyMTMzOTQyOTk1._V1_FMjpg_UX1000_.jpg",
    releaseDate: "July 24, 2023",
    director: "David X. Cohen, Matt Groening",
    description:
      "Philip J. Fry, a pizza delivery boy, is accidentally frozen in 1999 and thawed out on New Year's Eve 2999.",
  },
  {
    id: 46,
    movie: "The Kids in the Hall",
    imdb: "8.4/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BZDFlODBjNjctNzZhYS00MjM0LTkwNmItYTdjMjAzZDllMzk5XkEyXkFqcGdeQXVyMTUyNjc3NDQ4._V1_.jpg",
    releaseDate: "1984",
    director: "Unknown",
    description:
      "The TV series of the Canadian sketch comedy troupe that, more often than not, puts bizarre, unique, and insane twists in their skits.",
  },
  {
    id: 47,
    movie: "Chappelle's Show",
    imdb: "8.8/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BOWNjYTg5NGMtOWRjNy00ZGNlLTg2MmYtZjQ5NTM0MTQxOGM2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    releaseDate: "January 22, 2003",
    director: "Dave Chappelle, Neal Brennan",
    description:
      "Comedian Dave Chappelle hosts this sketch-comedy show that parodies many of the nuances of race and culture.",
  },
  {
    id: 48,
    movie: "Frasier",
    imdb: "8.2/10",
    imageUrl:
      "https://m.media-amazon.com/images/I/61ihfdp87cL._AC_UF1000,1000_QL80_.jpg",
    releaseDate: "September 16, 1993",
    director: "David Angell, Peter Casey, David Lee",
    description:
      "Dr. Frasier Crane moves back to his hometown of Seattle, where he lives with his father and works as a radio psychiatrist.",
  },
  {
    id: 49,
    movie: "Twin Peaks",
    imdb: "8.8/10",
    imageUrl:
      "https://m.media-amazon.com/images/I/61TnKJjchLL._AC_UF1000,1000_QL80_.jpg",
    releaseDate: "	April 8, 1990",
    director: "Mark Frost, David Lynch",
    description:
      "An idiosyncratic FBI agent investigates the murder of a young woman in the even more idiosyncratic town of Twin Peaks.",
  },
  {
    id: 50,
    movie: "Mad Men",
    imdb: "8.7/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNTgxNDZlODQtNDcwOC00NWQ5LTljNWMtMDhjY2U5YTUzMTc4XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
    releaseDate: "July 19, 2007 ",
    director: "Matthew Weiner",
    description:
      "A drama about one of New York's most prestigious ad agencies at the beginning of the 1960s, focusing on one of the firm's most mysterious but extremely talented ad executives, Donald Draper.",
  },
  {
    id: 51,
    movie: "Woody Allen: A Documentary",
    imdb: "7.7/10",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BNDkxNjM3NDQ0OF5BMl5BanBnXkFtZTcwNzkyMjM5OA@@._V1_.jpg",
    releaseDate: "	November 19 - November 20, 2011",
    director: "Robert B. Weide",
    description:
      "A documentary on Woody Allen that trails him on his movie sets and follows him back to Brooklyn as he visits his childhood haunts.",
  },
  {
    id: 52,
    movie: "Clerks",
    imdb: "7.7/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/65/Clerks_movie_poster%3B_Just_because_they_serve_you_---_.jpg",
    releaseDate: "January 22, 1994",
    director: "Kevin Smith",
    description: "A day in the lives of two convenience clerks named Dante and Randal as they annoy customers, discuss movies, and play hockey on the store roof.",
  },
  {
    id: 53,
    movie: "Manhattan",
    imdb: "7.8/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZGE2NjI5MjAtODQwYy00OGJkLWJiZTEtMTU0NzVlMTkzNjFjXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_.jpg",
    releaseDate: "April 18, 1979",
    director: "Woody Allen",
    description: "The life of a divorced television writer dating a teenage girl is further complicated when he falls in love with his best friend's mistress.",
  },
  {
    id: 54,
    movie: "Reservoir Dogs",
    imdb: "8.3/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "January 21, 1992",
    director: "Quentin Tarantino",
    description: "When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
  },
  {
    id: 55,
    movie: "Trailer Park Boys",
    imdb: "8.5/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTA0NTAwMTc1MF5BMl5BanBnXkFtZTgwODk2NjY0ODE@._V1_.jpg",
    releaseDate: "April 22, 2001",
    director: "Mike Clattenburg",
    description: "Three petty felons have a documentary made about their life in a trailer park.",
  },
  {
    id: 56,
    movie: "Workaholics",
    imdb: "8.1/10",
    imageUrl: "https://images.paramount.tech/uri/mgid:arc:imageassetref:comedycentral.com:bda74b98-ff90-43ff-8655-17026a319105?quality=0.7&gen=ntrn",
    releaseDate: "April 6, 2011",
    director: "Blake Anderson, Adam Devine, Anders Holm",
    description: "A single-camera comedy featuring three friends who work together as telemarketers from 9 to 5, and live together from 5 to 9.",
  },
  {
    id: 57,
    movie: "The League",
    imdb: "8.3/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmQ1MjZkNTQtZjBmMC00YTljLTg1YWUtM2YyYzZhYTM4OTJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    releaseDate: "October 29, 2009",
    director: "Jackie Marcus SchafferJeff Schaffer",
    description: "An ensemble comedy that follows a group of old friends in a fantasy football league who care deeply about one another -- so deeply that they use every opportunity to make each other's lives miserable.",
  },
  {
    id: 58,
    movie: "Arrested Development",
    imdb: "8.7/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNTFlYTE2YTItZmQ1NS00ZWQ5LWI3OGUtYTQzNDMyZmEyYTZjXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "May 26, 2013",
    director: "Mitchell Hurwitz",
    description: "Level-headed son Michael Bluth takes over family affairs after his father is imprisoned. But the rest of his spoiled, dysfunctional family are making his job unbearable.",
  },
  {
    id: 59,
    movie: "Grizzly Man",
    imdb: "7.8/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e5/Grizzly_man_ver2.jpg",
    releaseDate: "August 12, 2005",
    director: "Werner Herzog",
    description: "A devastating and heart-rending take on grizzly bear activists Timothy Treadwell and Amie Huguenard, who were killed in October of 2003 while living among grizzly bears in Alaska.",
  },
  {
    id: 60,
    movie: "Man on Wire",
    imdb: "7.7/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTMxNTk3NDY1NV5BMl5BanBnXkFtZTcwNDk0ODg3MQ@@._V1_.jpg",
    releaseDate: "22 January 2008",
    director: "James Marsh",
    description: "A look at tightrope walker Philippe Petit's daring, but illegal, high-wire routine performed between New York City's World Trade Center's twin towers in 1974, what some consider, 'the artistic crime of the century'.",
  },
  {
    id: 61,
    movie: "Slap Shot",
    imdb: "7.3/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Slap_shot_movie_poster.jpg/220px-Slap_shot_movie_poster.jpg",
    releaseDate: "February 25, 1977",
    director: "George Roy Hill",
    description: "A failing ice hockey team finds success with outrageously violent hockey goonery.",
  },
  {
    id: 62,
    movie: "Butch Cassidy and the Sundance Kid",
    imdb: "8.0/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/fd/Butch_sundance_poster.jpg",
    releaseDate: "September 23, 1969",
    director: "George Roy Hill",
    description: "In 1890s Wyoming, Butch Cassidy and The Sundance Kid lead a band of outlaws. When a train robbery goes wrong, they find themselves on the run with a posse hard on their heels. After considering their options, they escape to South America.",
  },
  {
    id: 63,
    movie: "Trainspotting",
    imdb: "8.1/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMzA5Zjc3ZTMtMmU5YS00YTMwLWI4MWUtYTU0YTVmNjVmODZhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    releaseDate: "23 February 1996",
    director: "Danny Boyle",
    description: "Renton, deeply immersed in the Edinburgh drug scene, tries to clean up and get out despite the allure of drugs and the influence of friends.",
  },
  {
    id: 64,
    movie: "Vanilla Sky",
    imdb: "6.9/10",
    imageUrl: "https://i.pinimg.com/564x/1d/b7/58/1db75872310150f8a0d72e1c978c3b7d.jpg",
    releaseDate: "December 14, 2001",
    director: "Cameron Crowe",
    description: "A self-indulgent and vain publishing magnate finds his privileged life upended after a vehicular accident with a resentful lover.",
  },
  {
    id: 65,
    movie: "Good Will Hunting",
    imdb: "8.3/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    releaseDate: "December 2, 1997",
    director: "Gus Van Sant",
    description: "Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.",
  },
  {
    id: 66,
    movie: "It's Always Sunny in Philadelphia",
    imdb: "8.8/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZDc4NjU1MmMtZjIzNy00MWRhLWI4ZjUtYjY4YmFlY2NjMzA0XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    releaseDate: "August 4, 2005",
    director: "Rob McElhenney, Glenn Howerton",
    description: "Five friends with big egos and small brains are the proprietors of an Irish pub in Philadelphia",
  },
  {
    id: 67,
    movie: "Parks and Recreation",
    imdb: "8.6/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYWNkOTg0OTMtZTcyNy00MWU1LWJhZDQtYjQzMjU1NjBhYzI2XkEyXkFqcGdeQXVyOTE4NzcwNzI@._V1_.jpg",
    releaseDate: "April 9, 2009",
    director: "Greg Daniels, Michael Schur",
    description: "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
  },
  {
    id: 68,
    movie: "Louie",
    imdb: "8.5/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c0/Louie_season_1.png",
    releaseDate: "June 29, 2010",
    director: "Louis C.K.",
    description: "The life of Louie C.K., a divorced comedian living in New York with two kids.",
  },
  {
    id: 69,
    movie: "Cheers",
    imdb: "8.0/10",
    imageUrl: "https://m.media-amazon.com/images/I/61ay4-6XtDL._AC_UF1000,1000_QL80_.jpg",
    releaseDate: "September 30, 1982",
    director: "James Burrows, Glen Charles, Les Charles",
    description: "The regulars of the Boston bar 'Cheers' share their experiences and lives with each other while drinking or working at the bar where everybody knows your name.",
  },
  {
    id: 70,
    movie: "Lost in Translation",
    imdb: "7.7/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_.jpg",
    releaseDate: "August 29, 2003",
    director: "Sofia Coppola",
    description: "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
  },
  {
    id: 71,
    movie: "Big Fish",
    imdb: "8.0/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZTNlNTQzMGEtYjU4Yi00MzEzLThmMTQtNmM0NzcxZWI1MTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    releaseDate: "December 4, 2003",
    director: "Tim Burton",
    description: "A frustrated son tries to determine the fact from fiction in his dying father's life.",
  },
  {
    id: 72,
    movie: "Miller's Crossing",
    imdb: "7.7/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTY2Njk3MTAzM15BMl5BanBnXkFtZTgwMTY5Mzk4NjE@._V1_.jpg",
    releaseDate: "September 21, 1990",
    director: "Joel Coen, Ethan Coen",
    description: "Tom Reagan, an advisor to a Prohibition-era crime boss, tries to keep the peace between warring mobs but gets caught in divided loyalties.",
  },
  {
    id: 73,
    movie: "Clay Pigeons",
    imdb: "6.6/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMzhkYThkZDYtMDBhMC00MTdiLWIzMGQtN2IzZDE1MzI4MmQ3XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_.jpg",
    releaseDate: "September 25, 1998",
    director: "David Dobkin",
    description: "After hearing that his wife sleeps with Clay, Earl kills himself, making it look like Clay shot him. The widow doesn't like it when Clay starts sees another woman instead. Bodies start piling up.",
  },
  {
    id: 74,
    movie: "Hustle & Flow",
    imdb: "7.3/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/e9/Hustle_and_flow.jpg",
    releaseDate: "July 22, 2005",
    director: "Craig Brewer",
    description: "With help from his friends, a Memphis pimp in a mid-life crisis attempts to become a successful hip-hop emcee.",
  },
  {
    id: 75,
    movie: "Traffic",
    imdb: "7.6/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNDA2YjNkMjEtZjcwNy00ZTc5LWEzNDItMjE0ODlmMDAzNDFkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    releaseDate: "December 27, 2000",
    director: "Steven Soderbergh",
    description: "A conservative judge is appointed by the President to spearhead America's escalating war against drugs, only to discover that his teenage daughter is a crack addict. Two DEA agents protect an informant. A jailed drug baron's wife attempts to carry on the family business.",
  },
  {
    id: 76,
    movie: "Pi",
    imdb: "7.3/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk3MThhNGEtY2E4NS00MWMwLTg4MzQtMTk4ZTcwYzRlNDNiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    releaseDate: "July 10, 1998",
    director: "Darren Aronofsky",
    description: "A paranoid mathematician searches for a key number that will unlock the universal patterns found in nature.",
  },
  {
    id: 77,
    movie: "The Girl with the Dragon Tattoo",
    imdb: "7.8/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_.jpg",
    releaseDate: "December 12, 2011",
    director: "David Fincher",
    description: "Journalist Mikael Blomkvist is aided in his search for a woman who has been missing for 40 years by young computer hacker Lisbeth Salander.",
  },
  {
    id: 78,
    movie: "Tomboy",
    imdb: "7.4/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYzAxNmI0MzUtMjBmNy00OThmLWI0NGItNmM2ZWRhNzJiYTAxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    releaseDate: "20 April 2011",
    director: "Céline Sciamma",
    description: "A family moves into a new neighborhood, and a 10-year-old named Laure deliberately presents as a boy named Mikhael to the neighborhood children.",
  },
  {
    id: 79,
    movie: "The Girl Who Kicked the Hornets' Nest",
    imdb: "7.3/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTk0NTY3NjMwOV5BMl5BanBnXkFtZTcwNTI1MjQwNA@@._V1_.jpg",
    releaseDate: "2009",
    director: "Daniel Alfredson",
    description: "Lisbeth is recovering in a hospital and awaiting trial for three murders when she is released. Mikael must prove her innocence, but Lisbeth must be willing to share the details of her sordid experiences with the court.",
  },
  {
    id: 80,
    movie: "The Girl Who Played with Fire",
    imdb: "7.1/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjI0MjIxMDIwNF5BMl5BanBnXkFtZTcwODk5MDc1Mw@@._V1_.jpg",
    releaseDate: "18 September 2009",
    director: "Daniel Alfredson",
    description: "As computer hacker Lisbeth and journalist Mikael investigate a sex-trafficking ring, Lisbeth is accused of three murders, causing her to go on the run while Mikael works to clear her name.",
  },
  {
    id: 81,
    movie: "Midnight Cowboy",
    imdb: "7.8/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BZmFlZDZmMTYtZjczOS00M2M0LWIxYzItYmRjM2IxYTg4NDg2XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    releaseDate: "May 25, 1969",
    director: "John Schlesinger",
    description: "A naive hustler travels from Texas to New York City to seek personal fortune, finding a new friend in the process.",
  },
  {
    id: 82,
    movie: "The Machinist",
    imdb: "7.6/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjk1NzBlY2YtNjJmNi00YTVmLWI2OTgtNDUxNDE5NjUzZmE0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_FMjpg_UX1000_.jpg",
    releaseDate: "18 January 2004",
    director: "Brad Anderson",
    description: "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
  },
  {
    id: 83,
    movie: "Star Trek II: The Wrath of Khan",
    imdb: "7.7/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNmZiZmM2OTUtZDlmOC00YzYyLThkMGEtZWFkMjJmM2EwZDVkXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
    releaseDate: "June 4, 1982",
    director: "Nicholas Meyer",
    description: "With the assistance of the Enterprise crew, Admiral Kirk must stop an old nemesis, Khan Noonien Singh, from using the life-generating Genesis Device as the ultimate weapon.",
  },
  {
    id: 84,
    movie: "Super 8",
    imdb: "7.0/10",
    imageUrl: "https://m.media-amazon.com/images/I/91PNs9WTkwL._AC_UF1000,1000_QL80_.jpg",
    releaseDate: "June 9, 2011",
    director: "J.J. Abrams",
    description: "During the summer of 1979, a group of friends witness a train crash and investigate subsequent unexplained events in their small town.",
  },
  {
    id: 85,
    movie: "The Hunger Games",
    imdb: "7.2/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg",
    releaseDate: "2012",
    director: "Gary Ross",
    description: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
  },
  {
    id: 86,
    movie: "Duck Soup",
    imdb: "7.7/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BYmYxZGU2NWYtNzQxZS00NmEyLWIzN2YtMDk5MWM0ODc5ZTE4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    releaseDate: "November 17, 1933",
    director: "Leo McCarey",
    description: "Rufus T. Firefly is named the dictator of bankrupt Freedonia and declares war on neighboring Sylvania over the love of his wealthy backer Mrs. Teasdale, contending with two inept spies who can't seem to keep straight which side they're on.",
  },
  {
    id: 87,
    movie: "Ferris Bueller's Day Off",
    imdb: "7.8/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg",
    releaseDate: "June 11, 1986",
    director: "John Hughes",
    description: "A popular high school student, admired by his peers, decides to take a day off from school and goes to extreme lengths to pull it off, to the chagrin of his Dean, who'll do anything to stop him.",
  },
  {
    id: 88,
    movie: "Columbo",
    imdb: "8.3/10",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/34/ColumboSeasonOne.jpg",
    releaseDate: "February 20, 1968",
    director: "Richard Levinson, William Link",
    description: "Los Angeles homicide detective Lieutenant Columbo uses his humble ways and ingenuous demeanor to winkle out even the most well-concealed of crimes.",
  },
  {
    id: 89,
    movie: "The Rockford Files",
    imdb: "8.2/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BN2MwYWNiZTctMjc4MC00MDYzLWFjOWEtOTQyMWZkZjMzNzVlXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_.jpg",
    releaseDate: "September 13, 1974",
    director: "Stephen, J. CannellRoy, Huggins",
    description: "The cases of an easy-going ex-convict turned private investigator.",
  },
  {
    id: 90,
    movie: "Star Trek",
    imdb: "7.9/10",
    imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/star_trek_2009_poster.jpg",
    releaseDate: "2009",
    director: "J.J. Abrams",
    description: "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful Romulan from the future creates black holes to destroy the Federation one planet at a time.",
  },
  {
    id: 91,
    movie: "Firefly",
    imdb: "9.0/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTcwNzkwMDItZmM1OC00MmQ2LTgxYjgtOTNiNDgxZDAxMjk0XkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_.jpg",
    releaseDate: "December 20, 2002",
    director: "Joss Whedon",
    description: "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.",
  },
  {
    id: 92,
    movie: "The Walking Dead",
    imdb: "8.1/10",
    imageUrl: "https://m.media-amazon.com/images/I/81ju7zSjLwL._AC_UF1000,1000_QL80_.jpg",
    releaseDate: "October 31, 2010",
    director: "Frank Darabont",
    description: "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
  },
  {
    id: 93,
    movie: "Lost",
    imdb: "8.3/10",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    releaseDate: "September 22, 2004",
    director: "J.J. Abrams, Jeffrey Lieber, Damon Lindelof",
    description: "The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
  },
  {
    id: 94,
    movie: "",
    imdb: "",
    imageUrl: "",
    releaseDate: "",
    director: "",
    description: "",
  },
  {
    id: 95,
    movie: "",
    imdb: "",
    imageUrl: "",
    releaseDate: "",
    director: "",
    description: "",
  }
];

/* {
    id:1,
    movie:'',
    imdb:'',
    imageUrl:'',
    releaseDate: '',
    director:'',
    description:""
    } */

const mainCard = document.getElementById("mainCard");
const cardBody = document.getElementById("cardBody");
const startBtn = document.getElementById("btn");
const questionDiv = document.getElementById("questionDiv");
const valDiv = document.getElementById("valDiv");
const ans = document.querySelectorAll(".yesNo");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
startBtn.addEventListener("click", movieQ);

function suggestedMovie(movies, arr) {
  cardBody.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.className = "card";
  newDiv.innerHTML = `
  <img src="${movies[arr].imageUrl}" class="card-img-top" alt="..."> 
  <div class="card-body">
    <h5 class="card-title text-dark">${movies[arr].movie}</h5>
    <p class="card-text text-dark">${movies[arr].description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">IMDb rating: ${movies[arr].imdb}</li>
    <li class="list-group-item">Release Date: ${movies[arr].releaseDate}</li>
    <li class="list-group-item">Director: ${movies[arr].director}</li>
  </ul>
  <div class="card-body d-flex justify-content-center">
    <button class="btn btn-primary" onClick="location.reload()">Restart</button>
  </div>
  `;
  cardBody.append(newDiv);
}

const question = (q) => {
  btn1.textContent = "Yes";
  btn2.textContent = "No";
  questionDiv.innerHTML = "";
  questionDiv.innerHTML = `<p>${q}</p>`;
};

function movieQ() {
  startBtn.innerHTML = "";
  valDiv.style.display = "flex";
  question("Are you watching with your children?");
  valDiv.addEventListener("click", answer);
}

function answer(event) {
  console.log("button clicked");
  const val = event.target.value;
  if (val == "yes") {
    question("Do you have to watch it with them?");
    valDiv.removeEventListener("click", answer);
    valDiv.addEventListener("click", answer1);
  } else if(val=="no") {
    question("TV series or Movies");
    btn1.textContent = "TV series";
    btn2.textContent = "Movies";
    valDiv.removeEventListener("click", answer);
    valDiv.addEventListener("click", answer2);
  }
}

function answer1(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Feeling nostalgic?");
    valDiv.removeEventListener("click", answer1);
    valDiv.addEventListener("click", answer3);
  } else if(val=="no") {
    question("Girls Only");
    valDiv.removeEventListener("click", answer1);
    valDiv.addEventListener("click", answer4);
  }
}

function answer2(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("30 or 60 minutes?");
    btn1.textContent = "30";
    btn2.textContent = "60";
    valDiv.removeEventListener("click", answer2);
    valDiv.addEventListener("click", answer5);
  } else if(val=="no") {
    question("Want your night to be action packed?");
    valDiv.removeEventListener("click", answer2);
    valDiv.addEventListener("click", answer6);
  }
}

function answer3(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Old made new, or just Old?");
    btn1.textContent = "Old";
    btn2.textContent = "New";
    valDiv.removeEventListener("click", answer3);
    valDiv.addEventListener("click", answer7);
  } else if(val=="no") {
    question("Are the kids frightened easily?");
    valDiv.removeEventListener("click", answer3);
    valDiv.addEventListener("click", answer8);
  }
}

function answer4(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 0); //The secret Garden
  } else if(val=="no") {
    question("Muppets or Music?");
    btn1.textContent = "Muppets";
    btn2.textContent = "Music";
    valDiv.removeEventListener("click", answer4);
    valDiv.addEventListener("click", answer9);
  }
}

function answer5(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("You want to see things in B&W?");
    valDiv.removeEventListener("click", answer5);
    valDiv.addEventListener("click", answer10);
  } else if(val=="no") {
    question("Coming of Age story line?");
    valDiv.removeEventListener("click", answer5);
    valDiv.addEventListener("click", answer11);
  }
}

function answer6(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("have you seen the Terminator?");
    valDiv.removeEventListener("click", answer6);
    valDiv.addEventListener("click", answer12);
  } else if(val=="no") {
    question("What about a Documentary?");
    valDiv.removeEventListener("click", answer6);
    valDiv.addEventListener("click", answer13);
  }
}

function answer7(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 1); //Alice in the worderLand
  } else if(val=="no") {
    suggestedMovie(movies, 2); //The Lorax
  }
}

function answer8(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 3); //Rango
  } else if(val=="no") {
    question("Musical?");
    valDiv.removeEventListener("click", answer8);
    valDiv.addEventListener("click", answer14);
  }
}

function answer9(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 4); //sesame streets
  } else if(val=="no") {
    suggestedMovie(movies, 5); //Yo gabba gabba
  }
}

function answer10(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 6); //the twilight zone
  } else if(val=="no") {
    question("Animated?");
    valDiv.removeEventListener("click", answer10);
    valDiv.addEventListener("click", answer15);
  }
}

function answer11(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 7); //Freaks and Geeks
  } else if(val=="no") {
    question("Crime Drama?");
    valDiv.removeEventListener("click", answer11);
    valDiv.addEventListener("click", answer16);
  }
}

function answer12(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 8); //Terminator 2
  } else if(val=="no") {
    question("How about a War movie?");
    valDiv.removeEventListener("click", answer12);
    valDiv.addEventListener("click", answer17);
  }
}

function answer13(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you consider snowboard films to be documentaries ?");
    valDiv.removeEventListener("click", answer13);
    valDiv.addEventListener("click", answer18);
  } else if(val=="no") {
    question("Monster murderers and Madness?");
    valDiv.removeEventListener("click", answer13);
    valDiv.addEventListener("click", answer19);
  }
}

function answer14(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 9); //The nightmare before christmas
  } else if(val=="no") {
    suggestedMovie(movies, 10); //ParaNorman
  }
}

function answer15(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Dick, fart jokes, with random musical interludes?");
    valDiv.removeEventListener("click", answer15);
    valDiv.addEventListener("click", answer20);
  } else if(val=="no") {
    question("Do you want to remember laughter?");
    valDiv.removeEventListener("click", answer15);
    valDiv.addEventListener("click", answer21);
  }
}

function answer16(event) {
  const val = event.target.value;
  if (val === "yes") {
    question("Classic mystery or thriller/cliffhanger");
    btn1.textContent = "Mystery";
    btn2.textContent = "Thriller";
    valDiv.removeEventListener("click", answer16);
    valDiv.addEventListener("click", answer22);
  } else if(val=="no") {
    question("Escape with some fantasy/Sci-fi?");
    valDiv.removeEventListener("click", answer16);
    valDiv.addEventListener("click", answer23);
  }
}

function answer17(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 11); //Black hawk down
  } else if(val=="no") {
    question("Horses, boots and 10-gallons hats ?");
    valDiv.removeEventListener("click", answer17);
    valDiv.addEventListener("click", answer24);
  }
}

function answer18(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 12); // Art of Flight
  } else if(val=="no") {
    question("Do you want to have yout face melted off from the maximum rock?");
    valDiv.removeEventListener("click", answer18);
    valDiv.addEventListener("click", answer25);
  }
}

function answer19(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Should there be a blood-soaked chainsaw at some point");
    valDiv.removeEventListener("click", answer19);
    valDiv.addEventListener("click", answer26);
  } else if(val=="no") {
    question("Are you in the mood to laugh?");
    valDiv.removeEventListener("click", answer19);
    valDiv.addEventListener("click", answer27);
  }
}

function answer20(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 13); //family Guy
  } else if(val=="no") {
    question("Gratuitous cleavage and up-skirt shots");
    valDiv.removeEventListener("click", answer20);
    valDiv.addEventListener("click", answer28);
  }
}

function answer21(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you want to do as little thinking as possible ");
    valDiv.removeEventListener("click", answer21);
    valDiv.addEventListener("click", answer29);
  } else if(val=="no") {
    question("Do you like Paranormal ?");
    valDiv.removeEventListener("click", answer21);
    valDiv.addEventListener("click", answer30);
  }
}

function answer22(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 14); //Sherlock BBC
  } else if(val=="no") {
    question("Do you want the most intense show ever made ?");
    valDiv.removeEventListener("click", answer22);
    valDiv.addEventListener("click", answer31);
  }
}

function answer23(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Head to outer space?");
    valDiv.removeEventListener("click", answer23);
    valDiv.addEventListener("click", answer32);
  } else if(val=="no") {
    question("Politics and fast and talking?");
    valDiv.removeEventListener("click", answer23);
    valDiv.addEventListener("click", answer33);
  }
}

function answer24(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("You want to go to oldSchool or kepp it fresh?");
    valDiv.removeEventListener("click", answer24);
    btn1.textContent = "Old";
    btn2.textContent = "Fresh";
    valDiv.addEventListener("click", answer34);
  } else if(val=="no") {
    question("Do you want to keep it serious?");
    valDiv.removeEventListener("click", answer24);
    valDiv.addEventListener("click", answer35);
  }
}

function answer25(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 15); //Year of the Horse
  } else if(val=="no") {
    question("Take it to the streets?");
    valDiv.removeEventListener("click", answer25);
    valDiv.addEventListener("click", answer36);
  }
}

function answer26(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 16); //The Evil Dead
  } else if(val=="no") {
    question("Three parts classic horror, one part something new?");
    valDiv.removeEventListener("click", answer26);
    valDiv.addEventListener("click", answer37);
  }
}

function answer27(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you want some drama with your laughter?");
    valDiv.removeEventListener("click", answer27);
    valDiv.addEventListener("click", answer38);
  } else if(val=="no") {
    question("Do you hunger for adventure?");
    valDiv.removeEventListener("click", answer27);
    valDiv.addEventListener("click", answer39);
  }
}

function answer28(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 17); //Highschool of the dead
  } else if(val=="no") {
    question("A little more childish or a little more mature?");
    valDiv.removeEventListener("click", answer28);
    btn1.textContent = "Mature";
    btn2.textContent = "Childish";
    valDiv.addEventListener("click", answer40);
  }
}

function answer29(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Skit show?");
    valDiv.removeEventListener("click", answer29);
    valDiv.addEventListener("click", answer41);
  } else if(val=="no") {
    question("Do you dig British humour?");
    valDiv.removeEventListener("click", answer29);
    valDiv.addEventListener("click", answer42);
  }
}

function answer30(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 18); //The X-files
  } else if(val=="no") {
    question("Mystery or Spaces?");
    valDiv.removeEventListener("click", answer30);
    btn1.textContent = "Mystery";
    btn2.textContent = "Spaces";
    valDiv.addEventListener("click", answer43);
  }
}

function answer31(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 19); //Breaking Bad
  } else if(val=="no") {
    question("Focus on the Good  guys or Bad guys?");
    valDiv.removeEventListener("click", answer31);
    btn1.textContent = "Good";
    btn2.textContent = "Bad";
    valDiv.addEventListener("click", answer44);
  }
}

function answer32(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Explore or War?");
    valDiv.removeEventListener("click", answer32);
    btn1.textContent = "Explore";
    btn2.textContent = "War";
    valDiv.addEventListener("click", answer45);
  } else if(val=="no") {
    question("Less Science, more fiction?");
    valDiv.removeEventListener("click", answer32);
    valDiv.addEventListener("click", answer46);
  }
}

function answer33(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Kevin, Verbal Kent, Spacey?");
    valDiv.removeEventListener("click", answer33);
    valDiv.addEventListener("click", answer47);
  } else if(val=="no") {
    question("Steeped in History?");
    valDiv.removeEventListener("click", answer33);
    valDiv.addEventListener("click", answer48);
  }
}

function answer34(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 20); //Once Upon a Time in the West
  } else if(val=="no") {
    suggestedMovie(movies, 21); //True Grit
  }
}

function answer35(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Set in the Future or Present Day?");
    valDiv.removeEventListener("click", answer35);
    btn1.textContent = "Future";
    btn2.textContent = "Now";
    valDiv.addEventListener("click", answer49);
  } else if(val=="no") {
    suggestedMovie(movies, 22); //Top Gun
  }
}

function answer36(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Pain or Paint?");
    valDiv.removeEventListener("click", answer36);
    btn1.textContent = "Pain";
    btn2.textContent = "Paint";
    valDiv.addEventListener("click", answer50);
  } else if(val=="no") {
    question("Do you want to see just how ridiculous religion can be?");
    valDiv.removeEventListener("click", answer36);
    valDiv.addEventListener("click", answer51);
  }
}

function answer37(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 23); //Cabin in the Woods
  } else if(val=="no") {
    question("Do abandoned asylums scare the sense out of you?");
    valDiv.removeEventListener("click", answer37);
    valDiv.addEventListener("click", answer52);
  }
}

function answer38(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Are you adverse to black and white?");
    valDiv.removeEventListener("click", answer38);
    valDiv.addEventListener("click", answer53);
  } else if(val=="no") {
    question("Do you mind it when people break out singing?");
    valDiv.removeEventListener("click", answer38);
    valDiv.addEventListener("click", answer54);
  }
}

function answer39(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Were you a fan of Firefly?");
    valDiv.removeEventListener("click", answer39);
    valDiv.addEventListener("click", answer55);
  } else if(val=="no") {
    question("Care for some criminal intent?");
    valDiv.removeEventListener("click", answer39);
    valDiv.addEventListener("click", answer56);
  }
}

function answer40(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you want to watch the most fucked up show on Netflix?");
    valDiv.removeEventListener("click", answer40);
    valDiv.addEventListener("click", answer57);
  } else if(val=="no") {
    question("World-Class social commentry?");
    valDiv.removeEventListener("click", answer40);
    valDiv.addEventListener("click", answer58);
  }
}

function answer41(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you like things to get a little odd, little quirky?");
    valDiv.removeEventListener("click", answer41);
    valDiv.addEventListener("click", answer59);
  } else if(val=="no") {
    question("Are you really into weed and liquor?");
    valDiv.removeEventListener("click", answer41);
    valDiv.addEventListener("click", answer60);
  }
}

function answer42(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 24); //Fawlty Towers
  } else if(val=="no") {
    question("Do you reckon to be a bit of a sophisticate?");
    valDiv.removeEventListener("click", answer42);
    valDiv.addEventListener("click", answer61);
  }
}

function answer43(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Are you about the solution, or the process?");
    valDiv.removeEventListener("click", answer43);
    btn1.textContent="Process";
    btn2.textContent="Solution"
    valDiv.addEventListener("click", answer90);
  } else if(val=="no") {
    question("Are you extremely nostalgic?");
    valDiv.removeEventListener("click", answer43);
    valDiv.addEventListener("click", answer91);
  }
}

function answer44(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 25); //Law and Order
  } else if(val=="no") {
    suggestedMovie(movies, 26); //Sons of Anarchy
  }
}

function answer45(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 27); //Star Trek : TNG
  } else if(val=="no") {
    suggestedMovie(movies, 28); //BattleStar Galactica
  }
}

function answer46(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Braiiiiiiiins?");
    valDiv.removeEventListener("click", answer46);
    valDiv.addEventListener("click", answer92);
  } else if(val=="no") {
    suggestedMovie(movies, 29); //Sliders
  }
}

function answer47(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 30); //The House of Cards
  } else if(val=="no") {
    suggestedMovie(movies, 31); //The West Wing
  }
}

function answer48(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 32); //The Tudors
  } else if(val=="no") {
    question("Do you like things to be a little strange?");
    valDiv.removeEventListener("click", answer48);
    valDiv.addEventListener("click", answer62);
  }
}

function answer49(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 33); //Aeon Flux
  } else if(val=="no") {
    suggestedMovie(movies, 34); //Shooter
  }
}

function answer50(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 35); //Bones Brigade: An Autobiography
  } else if(val=="no") {
    suggestedMovie(movies, 36); //Exit through the Gift Shop
  }
}

function answer51(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 37); //Religuluos
  } else if(val=="no") {
    question("Are you Woody Alien fan? or would you like to become one?");
    valDiv.removeEventListener("click", answer51);
    valDiv.addEventListener("click", answer63);
  }
}

function answer52(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 38); //Session 9
  } else if(val=="no") {
    suggestedMovie(movies, 39); //Insidiuos
  }
}

function answer53(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you love Paul Newman? Do you want to?");
    valDiv.removeEventListener("click", answer53);
    valDiv.addEventListener("click", answer64);
  } else if(val=="no") {
    question("Do you like your humor to be more or less lewd");
    valDiv.removeEventListener("click", answer53);
    btn1.textContent="More";
    btn2.textContent="Less"
    valDiv.addEventListener("click", answer65);
  }
}

function answer54(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 40); //Happy Gillmore
  } else if(val=="no") {
    question("Do you find clever wordplay entertaining?");
    valDiv.removeEventListener("click", answer54);
    valDiv.addEventListener("click", answer89);
  }
}

function answer55(event) {``
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 41); //Serenity
  } else if(val=="no") {
    question("Do you like main rolls to be played by kids?");
    valDiv.removeEventListener("click", answer55);
    valDiv.addEventListener("click", answer87);
  }
}

function answer56(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you enjoy diatribes entirely unrelated to the plot?");
    valDiv.removeEventListener("click", answer56);
    valDiv.addEventListener("click", answer66);
  } else if(val=="no") {
    question("Ready for some romance?");
    valDiv.removeEventListener("click", answer56);
    valDiv.addEventListener("click", answer67);
  }
}

function answer57(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 42); //Ren & Stimpy Show
  } else if(val=="no") {
    suggestedMovie(movies, 43); //Archer
  }
}

function answer58(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 44); //Soutrh Park
  } else if(val=="no") {
    suggestedMovie(movies, 45); //Futurama
  }
}

function answer59(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 46); //The Kids in the Hall
  } else if(val=="no") {
    suggestedMovie(movies, 47); //Chappelle' Show
  }
}

function answer60(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Can you hear the shit hawks circling in the shit winds?");
    valDiv.removeEventListener("click", answer60);
    valDiv.addEventListener("click", answer68);
  } else if(val=="no") {
    question("Are you really into Football?");
    valDiv.removeEventListener("click", answer60);
    valDiv.addEventListener("click", answer69);
  }
}

function answer61(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 48); //Frasier
  } else if(val=="no") {
    question("Do you want a show with astounding rewatchability?");
    valDiv.removeEventListener("click", answer61);
    valDiv.addEventListener("click", answer70);
  }
}

function answer62(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 49); //Twin Peaks
  } else if(val=="no") {
    suggestedMovie(movies, 50); //Mad Men
  }
}

function answer63(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 51); //Woody Allen: A Documentary
  } else if(val=="no") {
    question("Do subtitles bother you?");
    valDiv.removeEventListener("click", answer63);
    valDiv.addEventListener("click", answer71);
  }
}

function answer64(event) {
  const val = event.target.value;
  if (val == "yes") {
    question("Do you want to watch something great, or legendary?");
    valDiv.removeEventListener("click", answer64);
    btn1.textContent = "Great";
    btn2.textContent = "Legendary";
    valDiv.addEventListener("click", answer72);
  } else if(val=="no") {
    question("Pretty or Gritty");
    valDiv.removeEventListener("click", answer64);
    btn1.textContent = "Pretty";
    btn2.textContent = "Gritty";
    valDiv.addEventListener("click", answer73);
  }
}

function answer65(event) {
  const val = event.target.value;
  if (val == "yes") {
    suggestedMovie(movies, 52); //Clerks
  } else if(val=="no") {
    suggestedMovie(movies, 53); //ManHattan
  }
}


function answer66(event) {
    const val = event.target.value;
    if (val == "yes") {
      suggestedMovie(movies, 54); //Reservoir Dogs
    } else if(val=="no") {
        question("Are you upset by seeing Drug use?");
        valDiv.removeEventListener("click", answer66);
        valDiv.addEventListener("click", answer74);    }
  }


  function answer67(event) {
    const val = event.target.value;
    if (val == "yes") {
        question("Tom Cruise Or Matt Damon?");
        valDiv.removeEventListener("click", answer67);
        btn1.textContent="Tom";
        btn2.textContent="Matt"
        valDiv.addEventListener("click", answer75);
    } else if(val=="no") {
        question("Hypothetically: would a long brutal rape scene ruin your night?");
        valDiv.removeEventListener("click", answer67);
        valDiv.addEventListener("click", answer76);  
    }
  }

  
  function answer68(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 55); //Trailer Park Boys
    } else if(val=="no") {
        suggestedMovie(movies, 56); //Workaholic
    }
  }


  function answer69(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 57); //The League
    } else if(val=="no") {
        question("Insanity or Satire?");
        valDiv.removeEventListener("click", answer69);
        btn1.textContent="Insanity";
        btn2.textContent="Satire"
        valDiv.addEventListener("click", answer77);
    }
  }



  function answer70(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 58); //Arrested Development
    } else if(val=="no") {
        question("Do you find awkward situations funny?");
        valDiv.removeEventListener("click", answer70);
        valDiv.addEventListener("click", answer78);
    }
  }

  function answer71(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 59); //Grizzly Man
    } else if(val=="no") {
        suggestedMovie(movies, 60); //Man on Wire
    }
  }


  function answer72(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 61); //Slap shot
    } else if(val=="no") {
        suggestedMovie(movies, 62); //Butch Cassidy and Sundance Kid
    }
  }


  function answer73(event) {
    const val = event.target.value;
    if (val == "yes") {
        question("Slow-paced quirky romantic indie?");
        valDiv.removeEventListener("click", answer73);
        valDiv.addEventListener("click", answer79);
    } else if(val=="no") {
        suggestedMovie(movies, 63); //Trainspotting
    }
  }


  function answer74(event) {
    const val = event.target.value;
    if (val == "yes") {
        question("Mob Story?");
        valDiv.removeEventListener("click", answer74);
        valDiv.addEventListener("click", answer80);
    } else if(val=="no") {
        question("Do you love Hip-Hop?");
        valDiv.removeEventListener("click", answer74);
        valDiv.addEventListener("click", answer81);
    }
  }


  function answer75(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 64); //Vanilla Sky
    } else if(val=="no") {
        suggestedMovie(movies, 65); //Good Will Hunting
    }
  }


  function answer76(event) {
    const val = event.target.value;
    if (val == "yes") {
        question("Do you want to be completely confused?");
        valDiv.removeEventListener("click", answer76);
        valDiv.addEventListener("click", answer82);
    } else if(val=="no") {
        question("Have you seen the original girl with dragon tattoo?");
        valDiv.removeEventListener("click", answer76);
        valDiv.addEventListener("click", answer83);
    }
  }


  function answer77(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 66); //Its always sunny in philadalphia
    } else if(val=="no") {
        suggestedMovie(movies, 67); //Parks and the Recreation
    }
  }


  function answer78(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 68); //Louie
    } else if(val=="no") {
        suggestedMovie(movies, 69); //Cheers
    }
  }

  function answer79(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 70); //Loss in Translation
    } else if(val=="no") {
        suggestedMovie(movies, 71); //Big Fish
    }
  }

  function answer80(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 72); //MIllers Crossing
    } else if(val=="no") {
        suggestedMovie(movies, 73); //Clay Pigeons
    }
  }


  function answer81(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 74); //Hustle and Flow
    } else if(val=="no") {
        suggestedMovie(movies, 75); //Traffic
    }
  }

  function answer82(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 76); //Pi
    } else if(val=="no") {
        question("Are subtitles going to be a problem?");
        valDiv.removeEventListener("click", answer82);
        valDiv.addEventListener("click", answer84);
    }
  }


  function answer83(event) {
    const val = event.target.value;
    if (val == "yes") {
        question("Have you seen the girl who played with fire?");
        valDiv.removeEventListener("click", answer83);
        valDiv.addEventListener("click", answer85);
    } else if(val=="no") {
        suggestedMovie(movies, 77); //The Girl with a Dragon tattoo
    }
  }

  function answer84(event) {
    const val = event.target.value;
    if (val == "yes") {
        question("Keep it mellow?");
        valDiv.removeEventListener("click", answer84);
        valDiv.addEventListener("click", answer86);
    } else if(val=="no") {
        suggestedMovie(movies, 78); //Tomboy
    }
  }

  function answer85(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 79); //The girl who kicked the hornet nest
    } else if(val=="no") {
        suggestedMovie(movies, 80); //The girl whi played with fire
    }
  }

  function answer86(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 81); //Midnight Cowboy
    } else if(val=="no") {
        suggestedMovie(movies, 82); //The Machinist
    }
  }



  function answer87(event) {
    const val = event.target.value;
    if (val == "yes") {
        question("Want some thrills with your Adventure?");
        valDiv.removeEventListener("click", answer87);
        valDiv.addEventListener("click", answer88);
    } else if(val=="no") {
        suggestedMovie(movies, 83); //Star Trek II: The Wrath of Khan
  }
}


function answer88(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 84); //Super 8
    } else if(val=="no") {
        suggestedMovie(movies, 85); //the hunger games
  }
}

function answer89(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 86); //Duck Soup
    } else if(val=="no") {
        suggestedMovie(movies, 87); //Ferris buellers day off
  }
}

function answer90(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 88); //Columbo
    } else if(val=="no") {
        suggestedMovie(movies, 89); //The Rockford Files
  }
}

function answer91(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 90); //Star Trek
    } else if(val=="no") {
        suggestedMovie(movies, 91); //Firefly
  }
}


function answer92(event) {
    const val = event.target.value;
    if (val == "yes") {
        suggestedMovie(movies, 92); //the Walking Dead
    } else if(val=="no") {
        suggestedMovie(movies, 93); //Lost
  }
}


