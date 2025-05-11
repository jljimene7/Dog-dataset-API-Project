const API_KEY = import.meta.env.VITE_API_KEY;

document.addEventListener("DOMContentLoaded", () => {
    const imageButton = document.getElementById("fetch-image");
    const breedsButton = document.getElementById("fetch-breeds");
    const dogImageContainer = document.getElementById("dog-image");
    const dogBreedContainer = document.getElementById("dog-breeds");

    async function fetchDogImage() {
        try {
            const response = await fetch("https://api.thedogapi.com/v1/images/search", {
                headers: {
                    "x-api-key": API_KEY
                }
            });
            const data = await response.json();
            dogImageContainer.innerHTML = `<img src="${data[0].url}" width="300" />`;
            dogBreedContainer.innerHTML = "";
        } catch (error) {
            console.error("Error fetching dog image:", error);
        }
    }

    async function fetchDogBreeds() {
        try {
            const response = await fetch("https://api.thedogapi.com/v1/breeds", {
                headers: {
                    "x-api-key": API_KEY
                }
            });
            const data = await response.json();

            // dogBreedContainer.innerHTML = data.slice(0, 10).map(breed =>
            //    `<p><strong>${breed.name}</strong>: ${breed.temperament}</p>`
            //).join("");

            const tableRows = data.slice(0, 10).map(breed =>
                `<tr>
                   <td><strong>${breed.name}</strong></td>
                   <td>${breed.temperament || "N/A"}</td>
                 </tr>`
              ).join("");
              
              dogBreedContainer.innerHTML = `
                <table class="breed-table">
                  <thead>
                    <tr>
                      <th>Breed</th>
                      <th>Temperament</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${tableRows}
                  </tbody>
                </table>
              `;
              
              dogImageContainer.innerHTML = "";
                


            dogImageContainer.innerHTML = "";
        } catch (error) {
            console.error("Error fetching dog breeds:", error);
        }
    }

    imageButton.addEventListener("click", fetchDogImage);
    breedsButton.addEventListener("click", fetchDogBreeds);
});
