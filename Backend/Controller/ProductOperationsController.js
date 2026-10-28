import Product from "./Product.js";

export async function addProduct(req, res) {
  try {
    const product = new Product(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function viewProducts(req, res) {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function updateProduct(req, res) {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteProduct(req, res) {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function addReview(req, res) {
  try {
    const product = await Product.collection.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { reviews: req.body } },
      { returnDocument: "after" }
    );
    res.send(product);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function viewReviews(req, res) {
  try {
    const product = await Product.collection.findOne({ _id: req.params.id });
    res.send(product?.reviews || []);
  } catch (error) {
    res.status(500).send(error);
  }
}
