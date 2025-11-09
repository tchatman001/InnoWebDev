// JSON object with favorite singers
const singers = [
  {
    name: "Jazmine Sullivan",
    bestSong: "Mona Lisa",
    detail: "Philadelphia, Pennsylvania (April 9, 1987)",
  },
  {
    name: "Lalah Hathaway",
    bestSong: "Angel",
    detail: "Chicago, Illinois (Dec. 16, 1968)",
  },
  {
    name: "Jill Scott",
    bestSong: "The Way",
    detail: "Philadelphia, Pennsylvania (Apr 4, 1972)",
  },
  {
    name: "Chris Brown",
    bestSong: "Run It!",
    detail: "Tappahannock, Virgina (May 5, 1989)",
  },
];

// Function to populate the table
window.addEventListener("load", () => {
  const tableBody = document.querySelector("#singerTable tbody");

  singers.forEach((singer) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${singer.name}</td>
            <td>${singer.bestSong}</td>
            <td>${singer.detail}</td>
        `;

    tableBody.appendChild(row);
  });
});
