import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  function myFormSubmissionFunction(data) {
    console.log("Form submitted.", data);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-md-5">
              <h1 className="h3 text-center text-dark mb-2">Bakehouse</h1>
              <p className="text-center text-muted mb-4">Contact Us</p>

              <form onSubmit={handleSubmit(myFormSubmissionFunction)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Enter your name"
                      {...register("name")}
                    />
                    {errors.name && <span className="text-danger">{errors.name.message}</span>}
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="name@example.com"
                      {...register("email")}
                    />
                    {errors.email && <span className="text-danger">{errors.email.message}</span>}
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="form-control"
                      placeholder="e.g. Order Inquiry, Feedback, Custom Order"
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <span className="text-danger">{errors.subject.message}</span>
                    )}
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message / Query
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Type your message here..."
                      {...register("message")}
                    ></textarea>
                    {errors.message && (
                      <span className="text-danger">{errors.message.message}</span>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn btn-dark w-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
