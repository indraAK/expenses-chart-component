import data from "./data.json" assert { type: "json" };

const currentDay = new Date()
  .toLocaleDateString("en-US", { weekday: "short" })
  .toLocaleLowerCase();

data.forEach((item, idx) => {
  const chartItemElement = document.createElement("div");
  chartItemElement.classList.add("chart-item");
  chartItemElement.style.width = `${100 / data.length}%`;
  chartItemElement.innerHTML = `
    <div class="bar-chart ${
      currentDay === item.day && "active"
    }" tabindex="${idx}" style="height: ${item.amount * 2.8}px;"></div>
        <div class="tooltip">$${item.amount}</div>
    <p class="month">${item.day}</p>
    `;

  document.querySelector("#chartContainer").appendChild(chartItemElement);
});
