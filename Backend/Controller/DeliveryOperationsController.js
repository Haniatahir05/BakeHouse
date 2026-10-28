import Delivery from "../Models/Delivery.js";

export async function addDelivery(req, res) {
  try {
    const delivery = new Delivery(req.body);
    await delivery.save();
    res.send(delivery);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function viewDeliveries(req, res) {
  try {
    const deliveries = await Delivery.find();
    res.send(deliveries);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateDeliveryStatus(req, res) {
  try {
    const delivery = await Delivery.findByIdAndUpdate(
      req.params.id,
      { deliveryStatus: req.body.deliveryStatus },
      { new: true }
    );
    res.send(delivery);
  } catch (error) {
    res.status(500).send(error);
  }
}
