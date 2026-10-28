import Contact from "../Models/Contact.js";

export async function addContact(req, res) {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function viewContacts(req, res) {
  try {
    const contacts = await Contact.find();
    res.send(contacts);
  } catch (error) {
    res.status(500).send(error);
  }
}

export async function deleteContact(req, res) {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.send(contact);
  } catch (error) {
    res.status(500).send(error);
  }
}
