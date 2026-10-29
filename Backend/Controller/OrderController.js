import Order from "../Models/Order.js";

// ADD ORDER
export const createOrderController = (req, res) => {
  const {
    customerId,
    riderId,
    serviceId,
    quantity,
    deliveryAddress,
    phone,
    paymentMethod,
    totalAmount
  } = req.body;

  const newOrder = new Order({
    customerId,
    riderId,
    serviceId,
    quantity,
    deliveryAddress,
    phone,
    paymentMethod,
    totalAmount
  });

  newOrder.save()
    .then(() => res.status(201).send("Order placed successfully"))
    .catch((error) => res.status(500).send("Error placing order: " + error));
};

// VIEW ORDERS
export const viewOrdersController = (req, res) => {
  Order.find()
    .then((orders) => res.status(200).json(orders))
    .catch((error) => res.status(500).send("Error fetching orders: " + error));
};

// UPDATE ORDER STATUS
export const updateOrderStatusController = (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  Order.findByIdAndUpdate(orderId, { status }, { new: true })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.status(200).send("Order status updated successfully");
    })
    .catch((error) => res.status(500).send("Error updating order: " + error));
};

// ASSIGN RIDER
export const assignRiderController = (req, res) => {
  const { orderId } = req.params;
  const { riderId } = req.body;

  Order.findByIdAndUpdate(orderId, { riderId }, { new: true })
    .then((order) => {
      if (!order) {
        return res.status(404).send("Order not found");
      }

      res.status(200).send("Rider assigned successfully");
    })
    .catch((error) => res.status(500).send("Error assigning rider: " + error));
};