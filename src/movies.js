// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

const movies = require('./data');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(param) {
  const allDirectors = param.map((currentDirector) => {
    return currentDirector.director;
  });
  return allDirectors;
}
getAllDirectors(movies);

// version 2
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray
    .map((currentMovie) => {
      return currentMovie.director;
    })
    .filter((currentDirector, index, sourceArray) => {
      return sourceArray.indexOf(currentDirector) === index;
    });
  return allDirectors;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(param) {
  const howManySpielbergMovies = param
    .filter((currentDirector) => {
      return currentDirector.director.includes('Steven Spielberg');
    })
    .filter((currentDirector) => {
      return currentDirector.genre.includes('Drama');
    });
  return howManySpielbergMovies.length;
}
howManyMovies(movies);

// version 2
function howManyMovies(moviesArray) {
  const onlyDramaMovies = moviesArray.filter((currentMovie) => {
    return (
      currentMovie.genre.includes('Drama') &&
      currentMovie.director === 'Steven Spielberg'
    );
  });
  return onlyDramaMovies.length;
}
howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(param) {
  if (!param.length) {
    return 0;
  }
  const scores = param.map((currentAverage) => {
    return currentAverage.score;
  });
  const sum = scores.reduce((a, b) => a + b, 0);
  const average = Number((sum / scores.length).toFixed(2));
  return average;
}
scoresAverage(movies);

// version 2
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;

  const scores = moviesArray.map((currentMovie) => {
    if (!currentMovie.score) return 0;
    return currentMovie.score;
  });
  const sum = scores.reduce((a, b) => a + b);

  return Number((sum / scores.length).toFixed(2));
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(param) {
  const drama = param.filter((dramaScore) => {
    return dramaScore.genre.includes('Drama');
  });
  const scores = drama.map((everyScore) => {
    return everyScore.score;
  });
  const sum = scores.reduce((a, b) => a + b, 0);
  const average = Number((sum / scores.length).toFixed(2));
  if (average > 0) {
    return average;
  } else {
    return 0;
  }
  return average;
}
dramaMoviesScore(movies);

// version 2
function dramaMoviesScore(moviesArray) {
  const dramaScores = moviesArray.filter((currentMovie) => {
    return currentMovie.genre.includes("Drama");
  });

  return scoresAverage(dramaScores);
}
dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(param) {
  const ordered = param
    .map((currentTitleAndYear) => {
      return {
        title: currentTitleAndYear.title,
        year: currentTitleAndYear.year
      };
    })
    .sort((a, b) => a.year - b.year);

  const newOrder = ordered.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
  });
  return newOrder;
}
orderByYear(movies);

// version 2
function orderByYear(moviesArray) {
  const ordered = moviesArray
    .map((currentMovie) => {
      return currentMovie;
    })
    .sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  return ordered;
}
orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(param) {
  const alphaOrder = param
    .map((currentTitle) => {
      return currentTitle.title;
    })
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);

  return alphaOrder;
}
orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(param) {
  const duration = param.map((currentDuration) => {
    return currentDuration.duration;
  });

  let minutes = [];
  for (let i = 0; i < duration.length; i++) {
    const reg = /[\D_]/g;
    minutes.push(duration[i].toString().replace(reg, ''));
  }

  let result = [];
  for (let i = 0; i < minutes.length; i++) {
    if (minutes[i].length === 3) {
      result.push(
        Number(minutes[i][0]) * 60 +
          Number(minutes[i][1]) * 10 +
          Number(minutes[i][2] * 1)
      );
    } else if (minutes[i].length === 2) {
      result.push(Number(minutes[i][0]) * 60 + Number(minutes[i][1]) * 1);
    } else if (minutes[i].length === 1) {
      result.push(Number(minutes[i][0]) * 60);
    }
  }
  return result;
}
turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(param) {
  if (!param.length) {
    return null;
  }
  const newOrder = param
    .map((currentScoreAndYear) => {
      return {
        year: currentScoreAndYear.year,
        score: currentScoreAndYear.score
      };
    })
    .sort((a, b) => b.year - a.year);
  return console.log(newOrder);
}
bestYearAvg(movies);

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
