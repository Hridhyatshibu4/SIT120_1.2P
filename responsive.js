// responsive.js
const movies = [
    { title: "Jurassic Park", year: 1993 },
    { title: "Jurassic Park: The Lost World", year: 1997 },
    { title: "Jurassic Park III", year: 2001 },
    { title: "Jurassic World", year: 2015 },
    { title: "Jurassic World: Fallen Kingdom", year: 2018 },
    { title: "Jurassic World Dominion", year: 2022 },
];

function displayMovies() {
    const movieList = document.querySelector(".movie-list");
    movieList.innerHTML = "";

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.innerHTML = `
            <h2>${movie.title}</h2>
            <p>Year: ${movie.year}</p>
        `;
        movieList.appendChild(movieCard);
    });

    // Implement JavaScript methods
    const exampleString = "This is an example string";
    console.log("Uppercase:", exampleString.toUpperCase());
    console.log("Length:", exampleString.length);

    const exampleNumber = 42.789;
    console.log("Rounded:", exampleNumber.toFixed(2));
    console.log("Absolute value:", Math.abs(-5));

    const exampleArray = [1, 2, 3, 4, 5];
    console.log("First element:", exampleArray[0]);
    console.log("Array length:", exampleArray.length);

    // String methods
    console.log("Substring:", exampleString.substring(0, 7));
    console.log("Replace:", exampleString.replace("example", "sample"));
    console.log("Split:", exampleString.split(" "));
    console.log("Character at index 5:", exampleString.charAt(5));
    console.log("Index of 'example':", exampleString.indexOf("example"));

    // Number methods
    console.log("Max:", Math.max(10, 20, 30, 40, 50));
    console.log("Min:", Math.min(10, 20, 30, 40, 50));
    console.log("Square root:", Math.sqrt(25));
    console.log("Random number between 0 and 1:", Math.random());

    // Array methods
    const array1 = [1, 2, 3];
    const array2 = [4, 5];
    console.log("Concatenation:", array1.concat(array2));
    console.log("Array includes 3:", array1.includes(3));
    console.log("Array index of 2:", array1.indexOf(2));
    console.log("Array join:", array1.join("-"));
    console.log("Array reversed:", array1.reverse());

    // Date methods
    const currentDate = new Date();
    console.log("Current date:", currentDate.toDateString());
    console.log("Current month:", currentDate.getMonth());
    console.log("Current day:", currentDate.getDate());
    console.log("Current year:", currentDate.getFullYear());
    console.log("Current time:", currentDate.toLocaleTimeString());

    // Function methods
    function exampleFunction(a, b) {
        return a + b;
    }
    console.log("Function result:", exampleFunction(3, 7));

    function greetingFunction(name) {
        return `Hello, ${name}!`;
    }
    console.log("Greeting:", greetingFunction("John"));
}

displayMovies();
