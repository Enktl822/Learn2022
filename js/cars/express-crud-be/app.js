const express = require("express");
const cors = require("cors");

let cars = [
  {
    id: 0,
    model: "Prius 20",
    brand: "Toyota",
    Image:
      "https://global.toyota/pages/prius20th/innovation/tech/images/innovation_01_w567.jpg",
  },
  {
    id: 1,
    model: "Prius 30",
    brand: "Toyota",
    Image:
      "https://global.toyota/pages/news/older/images/2009/05/18/20090518_01_ogp.jpg",
  },
  {
    id: 2,
    model: "Prius Alpha",
    brand: "Toyota",
    Image:
      "https://autos.yahoo.com.tw/y/r/w880/iw/MMT/car/a9615748c1d539a1892cd37b5e321b1a_1200.jpg",
  },
  {
    id: 3,
    model: "Aqua",
    brand: "Toyota",
    Image:
      "https://global.toyota/pages/news/images/2021/07/19/1330/20210719_04_01_s.jpg",
  },
  {
    id: 4,
    model: "Prius 10",
    brand: "Toyota",
    Image: "https://static.pakwheels.com/2022/11/2023-Toyota-Prius-10-1.jpg",
  },
  {
    id: 5,
    model: "RX 450",
    brand: "Lexus",
    Image:
      "https://images.carandbike.com/car-images/colors/lexus/rx/lexus-rx-obsidian.png?v=1",
  },
  {
    id: 6,
    model: "RX 350",
    brand: "Lexus",
    Image:
      "https://toyotaassets.scene7.com/is/image/toyota/Lexus-RX-350-StyleSelector-750x471-LEX-RXG-MY23-0002.03?wid=750&hei=471&fmt=png-alpha",
  },
  {
    id: 7,
    model: "HS 250",
    brand: "Lexus",
    Image:
      "https://s1.cdn.autoevolution.com/images/news/lexus-hs-250-h-launched-in-japan-8845_1.jpg",
  },
];
let index = cars.length;

const app = express();
app.use(cors({ origin: "*" }));

app.get("/api/cars", (req, res) => {
  res.send(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const car = cars.filter((c) => c.id === Number(req.params.id));
  if (car.length > 0) {
    res.send(car[0]);
  } else {
    res.send("Car not found");
  }
});

app.post("/api/cars", (req, res) => {
  const car = { id: index, ...req.body };
  index++;
  cars.push(car);
  res.send(car);
});

app.delete("/api/cars", (req, res) => {
  cars = cars.filter((car) => car.id !== Number(req.body.id));
  res.send(`Car with given id: ${req.body.id} deleted successfully`);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
