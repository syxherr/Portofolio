import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    from: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

        emailjs
      .send(
        "service_cwp80n9",
        "template_tz5soj5",
        {
          from_email: form.from,
          subject: form.subject,
          message: form.message,
        },
        "7AxpGHA_PnLuiZbW3"
      )
      .then(() => {
        setStatus("sent");
        setForm({ from: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      });
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.card}>
        <h2 className={styles.title}>
          Want to discuss further? <span className={styles.highlight}>Contact</span> me!
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inlineField}>
              <label className={styles.label}>To</label>
              <div className={styles.toBadge}>shaskiapdv@gmail.com</div>
            </div>

            <div className={styles.inlineField}>
              <label className={styles.label} htmlFor="from">From</label>
              <input
                id="from"
                name="from"
                type="email"
                placeholder="Your email"
                className={styles.plainInput}
                value={form.from}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What's this about?" className={styles.plainInput}
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.messageField}>
            <label className={styles.label} htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              className={styles.plainTextarea}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={styles.button} disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && <p className={styles.success}>Message sent!</p>}
          {status === "error" && <p className={styles.errorMsg}>Failed to send, please try again.</p>}
        </form>
      </div>
    </section>
  );
}