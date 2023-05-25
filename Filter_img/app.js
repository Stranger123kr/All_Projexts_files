// select all filter buttons and filterable card

const filter_buttons = document.querySelectorAll(".filter_buttons button");
const filterable_Cards = document.querySelectorAll(".filterable_Cards .card");
console.log(filterable_Cards);

// Define the filter_cards functions

const filleter_Card = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  // Iterates over each filterable cards

  filterable_Cards.forEach((card) => {
    // add hide class to hide the card initially

    // check if the cards matches the selected filter or "all" is selected
    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    } else {
      card.classList.add("hide");
    }
  });
};

// Add click Event listener to each filter buttons

filter_buttons.forEach((button) =>
  button.addEventListener("click", filleter_Card)
);
