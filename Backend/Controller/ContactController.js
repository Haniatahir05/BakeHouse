import Contact from "../Models/Contact.js";

// ADD CONTACT MESSAGE
export const contactController = (req, res) => {
  const { name, email, subject, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    subject,
    message
  });

  newContact.save()
    .then(() => res.status(201).send("Message sent successfully"))
    .catch((error) => res.status(500).send("Error sending message: " + error));
};

// VIEW CONTACT MESSAGES
export const viewContactsController = (req, res) => {
  Contact.find()
    .then((contacts) => res.status(200).json(contacts))
    .catch((error) => res.status(500).send("Error fetching messages: " + error));
};

// DELETE CONTACT MESSAGE
export const deleteContactController = (req, res) => {
  const { contactId } = req.params;

  Contact.findByIdAndDelete(contactId)
    .then((contact) => {
      if (!contact) {
        return res.status(404).send("Message not found");
      }

      res.status(200).send("Message deleted successfully");
    })
    .catch((error) => res.status(500).send("Error deleting message: " + error));
};