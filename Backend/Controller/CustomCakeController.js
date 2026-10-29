import CustomCake from "../Models/CustomCake.js";

// ADD CUSTOM CAKE REQUEST
export const customCakeController = (req, res) => {
  const {
    customerName,
    flavor,
    size,
    frosting,
    toppings,
    message,
    price
  } = req.body;

  const newCustomCake = new CustomCake({
    customerName,
    flavor,
    size,
    frosting,
    toppings,
    message,
    price
  });

  newCustomCake.save()
    .then(() => res.status(201).send("Custom cake request saved successfully"))
    .catch((error) => res.status(500).send("Error saving request: " + error));
};

// VIEW CUSTOM CAKE REQUESTS
export const viewCustomCakesController = (req, res) => {
  CustomCake.find()
    .then((cakes) => res.status(200).json(cakes))
    .catch((error) => res.status(500).send("Error fetching requests: " + error));
};