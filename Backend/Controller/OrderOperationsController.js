import Order from "../Models/Order.js";

export async function addOrder(req, res) {
  try {
    const order = new Order({
      ...req.body,
      deliveryAddress: req.body.deliveryAddress || req.body.address,
      totalAmount: req.body.totalAmount || 0,
    });
    await order.save();
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function viewOrders(req, res) {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateOrder(req, res) {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function cancelOrder(req, res) {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelled" },
      { new: true }
    );
    res.send(order);
  } catch (error) {
    res.status(500).send(error);
  }
}
