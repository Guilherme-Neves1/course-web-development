import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // const d = new Date("July 21, 1983 01:15:00"); // DIA DA SEMANA
  const d = new Date();
  let day = d.getDay();

  if (day > 0 && day < 6) {
    res.render("index.ejs",
    {day: "Hey! It's a weekday, it's time to work hard"}
    );
  } else {
    res.render("index.ejs",
    {day: "Hey! It's the weekend, it's time to have fun!"}
    );
  }
  
  // res.render("index.ejs",
  // {day}
  // );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
