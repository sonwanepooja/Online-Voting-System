import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useLocation } from "react-router-dom";

// ContactPage component for an online voting application
// - No external CSS file required (inline CSS-in-JS used)
// - Uses react-hook-form with `control` (user preference)
// - Sends form data to `/api/contact` (you can adapt to your API)

export default function ContactPage() {
  const location = useLocation();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "voter",
      subject: "",
      message: "",
    },
  });

  const [status, setStatus] = useState(null); // null | 'success' | 'error'

  async function onSubmit(data) {
    setStatus(null);
    try {
      // Replace with your real API endpoint
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      setStatus("success");
      reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  // Simple CSS-in-JS styles (keeps everything in one file as requested)
  const styles = {
    page: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f6f8fb",
    //   padding: "24px",
      boxSizing: "border-box",
      fontFamily: `Segoe UI, Roboto, -apple-system, 'Helvetica Neue', Arial`,
    },
    card: {
      width: "100%",
      maxWidth: "100%", // remove restriction
      minHeight: location?.pathname === "/personal-info/contact" && "100vh",
      padding: location?.pathname === "/personal-info/contact" ? "20px":"24px",

      //   background: "#fff",
      borderRadius: 0, // optional: remove rounded edges if you want edge-to-edge
      boxShadow: "none", // optional: remove shadow for cleaner full width
      //   padding: 28,
      boxSizing: "border-box",
      display: "flex", // use flex instead of grid for simpler layout
      flexDirection: "row", // side-by-side if you still want aside visible
      gap: 24,
    },

    header: { marginBottom: 8 },
    title: { fontSize: 22, margin: 0, color: "black" },
    subtitle: { margin: "6px 0 18px", color: "black", fontSize: 14 },

    form: { display: "flex", flexDirection: "column", gap: 12 },
    fieldRow: { display: "flex", gap: 110 },
    input: {
      padding: "10px 12px",
      borderRadius: 8,
      border: "1px solid #e6e9ef",
      fontSize: 14,
      outline: "none",
      boxSizing: "border-box",
    },
    textarea: {
      minHeight: 120,
      padding: "10px 12px",
      borderRadius: 8,
      border: "1px solid #e6e9ef",
      fontSize: 14,
      resize: "vertical",
      boxSizing: "border-box",
    },
    label: { fontSize: 13, color: "black", marginBottom: 6, marginRight: 10 },
    error: { color: "#dc2626", fontSize: 12, marginTop: 4 },

    asideBox: {
      background: "white",
      borderRadius: 10,
      padding: 16,
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    contactList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gap: 12,
    },
    contactItemTitle: { fontWeight: 600, fontSize: 14 },
    button: {
      marginTop: 8,
      padding: "10px 14px",
      borderRadius: 8,
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 14,
      background: "#0b69ff",
      color: "#fff",
    },
    smallMuted: { fontSize: 12, color: "black" },
  };

  return (
    <div style={styles.page}>
      <main style={styles.card}>
        <section>
          <header style={styles.header}>
            <h1 style={styles.title}>Contact Support</h1>
            <p style={styles.subtitle}>
              For questions about registration, voting or technical help — send
              us a message. We aim to reply within 24–48 hours.
            </p>
          </header>

          <form
            style={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div style={styles.fieldRow}>
              <div style={{ flex: 1 }}>
                <label style={styles.label} htmlFor="name">
                  Full name
                </label>
                <Controller
                  control={control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      id="name"
                      placeholder="e.g. Asha Patil"
                      style={styles.input}
                      {...field}
                    />
                  )}
                />
                {errors.name && (
                  <div style={styles.error}>{errors.name.message}</div>
                )}
              </div>

              <div>
                <label style={styles.label} htmlFor="role">
                  You are
                </label>
                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => (
                    <select id="role" style={styles.input} {...field}>
                      <option value="voter">Voter</option>
                      <option value="candidate">Candidate</option>
                      <option value="admin">Administrator</option>
                      <option value="other">Other</option>
                    </select>
                  )}
                />
              </div>
            </div>

            <div style={styles.fieldRow}>
              <div style={{ flex: 1 }}>
                <label style={styles.label} htmlFor="email">
                  Email address
                </label>
                <Controller
                  control={control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      id="email"
                      placeholder="you@example.com"
                      style={styles.input}
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <div style={styles.error}>{errors.email.message}</div>
                )}
              </div>

              <div>
                <label style={styles.label} htmlFor="phone">
                  Phone (optional)
                </label>
                <Controller
                  control={control}
                  name="phone"
                  rules={{
                    pattern: {
                      value: /^[0-9()+\-\s]{7,20}$/,
                      message: "Invalid phone number",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      id="phone"
                      placeholder="+91 98765 43210"
                      style={styles.input}
                      {...field}
                    />
                  )}
                />
                {errors.phone && (
                  <div style={styles.error}>{errors.phone.message}</div>
                )}
              </div>
            </div>

            <div>
              <label style={styles.label} htmlFor="subject">
                Subject
              </label>
              <Controller
                control={control}
                name="subject"
                rules={{ required: "Subject is required" }}
                render={({ field }) => (
                  <input
                    id="subject"
                    placeholder="e.g. Unable to vote"
                    style={styles.input}
                    {...field}
                  />
                )}
              />
              {errors.subject && (
                <div style={styles.error}>{errors.subject.message}</div>
              )}
            </div>

            <div>
              <label style={styles.label} htmlFor="message">
                Message
              </label>
              <Controller
                control={control}
                name="message"
                rules={{ required: "Message cannot be empty" }}
                render={({ field }) => (
                  <textarea
                    id="message"
                    placeholder="Tell us what's happening"
                    style={styles.textarea}
                    {...field}
                  />
                )}
              />
              {errors.message && (
                <div style={styles.error}>{errors.message.message}</div>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={styles.button}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              <div style={styles.smallMuted}>
                {status === "success" && (
                  <span style={{ color: "#059669" }}>
                    Message sent — we will contact you soon.
                  </span>
                )}
                {status === "error" && (
                  <span style={{ color: "#dc2626" }}>
                    Something went wrong. Try again later.
                  </span>
                )}
              </div>
            </div>
          </form>
        </section>

        <aside style={styles.asideBox} aria-label="contact details and help">
          <div>
            <h3 style={{ margin: 0, fontSize: 16 }}>Support & Info</h3>
            <p
              style={{
                marginTop: 8,
                marginBottom: 12,
                color: "black",
                fontSize: 13,
              }}
            >
              Use this form to contact election support for issues like voting
              access, registration problems, or technical errors.
            </p>

            <ul style={styles.contactList}>
              <li>
                <div style={styles.contactItemTitle}>Helpdesk</div>
                <div style={styles.smallMuted}>helpdesk@onlinevote.example</div>
              </li>

              <li>
                <div style={styles.contactItemTitle}>Phone</div>
                <div style={styles.smallMuted}>
                  +91 22 1234 5678 (Mon–Fri, 9:00–18:00)
                </div>
              </li>

              <li>
                <div style={styles.contactItemTitle}>
                  Emergency voting hotline
                </div>
                <div style={styles.smallMuted}>+91 80 9999 0000 (24/7)</div>
              </li>

              <li>
                <div style={styles.contactItemTitle}>FAQs</div>
                <div style={styles.smallMuted}>
                  Check the Help section for common issues before contacting.
                </div>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 12, color: "black", marginBottom: 6 }}>
              Security & privacy
            </div>
            <div style={{ fontSize: 13, color: "black" }}>
              We will never share your personal contact details. Your message
              will be used only for support and investigation purposes.
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
