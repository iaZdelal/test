
const numberOfilms = +prompt('Сколько фильмов вы уже посмотрели? ' , '');

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренеых фильмов ?',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренеых фильмов ?',''),
      d = prompt('На сколько оцените его?','');


personalMovieDB.movies[a] = b;

console.log(personalMovieDB);
