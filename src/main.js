console.log("connected");

const selecteEl = document.querySelector("select");
const carouselContainerEl = document.querySelector(".carousel-inner");

console.log(selecteEl, carouselContainerEl);

const BASE_URL = "https://dog.ceo/api/";

// ===Mark fetch
//Gets the lits of api
async function getDogsList() {
  try {
    const response = await fetch(`${BASE_URL}breeds/list/all`);
    const data = await response.json();
    return Object.keys(data.message);
  } catch (error) {
    console.log(error);
  }
}
getDogsList();

//Get list of 10 images on breed
async function getDogsImages(breed) {
  try {
    const res = await fetch(`${BASE_URL}breed/${breed}/images`);
    const data = await response.json();
    return data.message.slice(0, 10);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

console.log(getDogsList);

//=== Mark: Render
async function RenderOption() {
  const breedList = await getDogsList();

  for (breed of breedList) {
    // ek option ke under breed ka naam
    const option = document.createElement("option");

    option.textContent = breed[0].toUpperCase() + breed.slice(1).toLowerCase();
    option.value = breed;

    selecteEl.appendChild(option);
  }
}

RenderOption();

async function RenderCarousel(breed) {
  const images = await getDogsImages(breed);
  console.log(images);
}

selecteEl.addEventListener("change", function (e) {
  console.log(e.target.value);
});
