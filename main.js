// Store the API key from the .env file securely (using Vite's built-in system)
const API_KEY = import.meta.env.VITE_API_KEY;

// Run this code only after the HTML content is fully loaded 
document.addEventListener("DOMContentLoaded", () => {

    // Get reference to the buttons and display containers in the HTML
    const imageButton = document.getElementById("fetch-image");
    const breedsButton = document.getElementById("fetch-breeds");
    const dogImageContainer = document.getElementById("dog-image");
    const dogBreedContainer = document.getElementById("dog-breeds");

    // Function to fetch a random dog image from the Dog API 
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
            // Show error in the browser console 
            console.error("Error fetching dog image:", error);
        }
    }
// Function to fetch a list of dog breeds and display them in a table  
    async function fetchDogBreeds() {
        try {
            const response = await fetch("https://api.thedogapi.com/v1/breeds", {
                headers: {
                    // Securely send the API key from a .env file
                    "x-api-key": API_KEY 
                }
            });

            // Convert response to JSON
            const data = await response.json();

            // dogBreedContainer.innerHTML = data.slice(0, 10).map(breed =>
            //    `<p><strong>${breed.name}</strong>: ${breed.temperament}</p>`
            //).join("");

            // Create table rows for each breed with name and dog temperament
            const tableRows = data.slice(0, 10).map(breed =>
                `<tr>
                   <td><strong>${breed.name}</strong></td>
                   <td>${breed.temperament || "N/A"}</td>
                 </tr>`
              ).join(""); // Combine all rows into one string 

              // Build a table with headers and insert it into the page
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
              
              //dogImageContainer.innerHTML = "";

            // Clear the dog image when breed table is shown 
            dogImageContainer.innerHTML = "";
        } catch (error) {
            console.error("Error fetching dog breeds:", error);
        }
    }

   // Attach click events to the buttons to call the appropriate functions  
    imageButton.addEventListener("click", fetchDogImage);
    breedsButton.addEventListener("click", fetchDogBreeds);
});
