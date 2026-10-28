import Service from "../Models/Service.js";

export async function listServices(req, res) {
  const filter = req.user?.role === "admin" ? {} : { isAvailable: true };
  res.json(await Service.find(filter).sort({ createdAt: -1 }));
}

export async function getService(req, res) {
  const service = await Service.findById(req.params.id);
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
}

export async function createService(req, res) {
  const { name = req.body.productName, description = req.body.productDescription, price, image = "" } = req.body;
  if (!name || !description || price === undefined) return res.status(400).json({ message: "name, description and price are required" });
  res.status(201).json(await Service.create({ name, description, price, image }));
}

export async function updateService(req, res) {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.json(service);
}

export async function deleteService(req, res) {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) return res.status(404).json({ message: "Service not found" });
  res.status(204).end();
}
