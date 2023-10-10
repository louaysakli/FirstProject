document.getElementById("CarForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const CarName = document.getElementById("CarName").value;
  const CarLink = document.getElementById("CarLink").value;
  const CarImg = document.getElementById("CarImg").value;
  const NewCar = {
    name: CarName,
    link: CarLink,
    img: CarImg,
  };

  displayProduct(NewCar);
});

function displayProduct(NewCar) {
  const CarListDiv = document.getElementById("CarList");
  CarListDiv.innerHTML = `
      <a href="${NewCar.link}">${NewCar.name}</a> <br>
      <img src="${NewCar.img}" />
   `;
}
