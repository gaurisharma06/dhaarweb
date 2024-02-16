import React, { forwardRef, useEffect, useState } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ContactImg from "../../assets/images/contact-img.png";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    // console.log(name, val);
    setContactDetails({ ...contactDetails, [name]: val });
  };

  const validateEmail = (email) =>
    String(email)
      .toLowerCase()
      .match(
        // eslint-disable-next-line
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

  const validatePhone = (phone) =>
    String(phone)
      .toLowerCase()
      .match(
        // eslint-disable-next-line
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      );

  const handleSubmit = async () => {
    setError("");
    setSuccess("");
    const { name, email, phone, subject, message } = contactDetails;
    if (!email || !name || !phone || !subject || !message) {
      setError("Please fill all the details!!!");
    } else if (!validateEmail(email)) {
      setError("Enter a valid email");
    } else if (!validatePhone(phone)) {
      setError("Enter a valid phone number");
    } else {
      try {
        const userHtmlContent = `<html><head></head>
          <body>
            <p>Hi,</p>A new person has contacted:</p>
            <p>Name    : ${contactDetails.name}</p>
            <p>Email   : ${contactDetails.email}</p>
            <p>Phone   : ${contactDetails.phone}</p>
            <p>Subject : ${contactDetails.subject}</p>
            <p>Body    : ${contactDetails.message}</p>
          </body></html>`;
        const dhaarRes = axios.post(
          "https://api.sendinblue.com/v3/smtp/email",
          {
            sender: {
              name: contactDetails.name,
              email: contactDetails.email,
            },
            to: [
              {
                name: "DhaarLabs",
                email: "dhaar.hr@gmail.com",
              },
            ],
            subject: contactDetails.subject,
            htmlContent: userHtmlContent,
          },
          {
            headers: {
              "api-key":
                "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",
            },
          }
        );
        const userRes = axios.post(
          "https://api.sendinblue.com/v3/smtp/email",
          {
            sender: {
              name: "DhaarLabs",
              email: "contact@dhaarlabs.com",
            },
            to: [
              {
                name: contactDetails.name,
                email: contactDetails.email,
              },
            ],
            subject: contactDetails.subject,
            htmlContent: `<html><head></head><body><p>Hi,</p>Thank you for contacting Dhaar Labs. We will contact you soon.</p></body></html>`,
          },
          {
            headers: {
              "api-key":
                "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",
            },
          }
        );
        await Promise.all([dhaarRes, userRes]);
        setSuccess("Message sent successfully!!!");
        setContactDetails({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        setError(error.response.data.message);
      }
    }
    setSnackBarOpen(true);
  };

  // set the position of error snackbar
  const vertical = "top";
  const horizontal = "center";

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  useEffect(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dhaarlabs",
        {
          headers: {
            Authorization:
              "Bearer 299f15384e6dc9af9f5e6bdcf29cfd820de4bd33cd11a3ac366ee1c4eb3141ae3",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err.response);
      });
  }, []);

  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch With Us</h2>
          <div className="bar"></div>
          <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src={ContactImg} alt="contact person" />
          </div>

          <div className="col-lg-6 col-md-12">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      onChange={handleInput}
                      value={contactDetails.name}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your email address"
                      className="form-control"
                      onChange={handleInput}
                      value={contactDetails.email}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your phone number"
                      className="form-control"
                      onChange={handleInput}
                      value={contactDetails.phone}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      className="form-control"
                      onChange={handleInput}
                      value={contactDetails.subject}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="form-control"
                      onChange={handleInput}
                      value={contactDetails.message}
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <input
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                    value="Send Message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {success && (
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          style={{ marginTop: "40px", zIndex: 10000 }}
        >
          <Alert onClose={handleClose} severity="success">
            {success}
          </Alert>
        </Snackbar>
      )}
      {error && (
        <Snackbar
          open={snackBarOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          style={{ marginTop: "40px", zIndex: 10000 }}
        >
          <Alert onClose={handleClose} severity="error">
            {error}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};

export default ContactForm;
