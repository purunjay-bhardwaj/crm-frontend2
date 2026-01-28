import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  const role = localStorage.getItem("enterAs") || "buyer";

  const heroImages = [
    "/images/hero_bg_1.jpg",
    "/images/hero_bg_2.jpg",
    "/images/hero_bg_3.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [message, setMessage] = useState("");

  const summaryMap = {
    buyer: [
      { label: "Saved Properties", value: 8 },
      { label: "Viewed Homes", value: 24 },
      { label: "Contacted Brokers", value: 3 },
    ],
    broker: [
      { label: "Clients", value: 12 },
      { label: "Listings", value: 9 },
      { label: "Deals Closed", value: 5 },
    ],
    owner: [
      { label: "Owned Properties", value: 6 },
      { label: "Active Rentals", value: 4 },
      { label: "Monthly Revenue", value: "$42k" },
    ],
  };

  useEffect(() => {
    document.title = "Dashboard | Property CRM";

    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /* 🔹 SEND MESSAGE TO FLASK */
  const sendMessage = async () => {
    if (!message.trim()) return;

    await fetch("http://127.0.0.1:5000/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    setMessage("");
  };

  return (
    <>
      <Navbar />

      {/* HERO SLIDESHOW */}
      <div style={heroWrapper}>
        {heroImages.map((img, index) => (
          <div
            key={img}
            style={{
              ...heroSlide,
              backgroundImage: `url(${img})`,
              opacity: index === currentImage ? 1 : 0,
            }}
          />
        ))}

        <div style={overlay} />

        {/* HERO CONTENT (fade once on load) */}
        <div style={heroContent}>
          <div className="hero-fade-up">
            <h1 className="heading" style={{ color: "white" }}>
              Easiest way to manage your properties
            </h1>

            <p style={{ marginTop: "10px", opacity: 0.9 }}>
              {role === "buyer" && "Find your perfect home"}
              {role === "broker" && "Manage clients & close deals faster"}
              {role === "owner" && "Track and grow your property portfolio"}
            </p>

            {/* 🔥 HERO SEARCH = FLASK MESSENGER */}
            <div className="hero-search">
              <input
                type="text"
                placeholder="Send a message to backend…"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={searchInput}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />

              <button style={searchButton} onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="container my-5">
        <div className="row text-center">
          {summaryMap[role].map((item) => (
            <div key={item.label} className="col-md-4 mb-3">
              <div className="p-4 shadow rounded bg-white">
                <h4>{item.label}</h4>
                <h2 className="text-primary">{item.value}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />

      {/* HERO ANIMATION */}
      <style>
        {`
          .hero-fade-up {
            animation: fadeUp 0.8s ease forwards;
          }

          .hero-search {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 24px;
            flex-wrap: wrap;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
}

/* ---------- STYLES ---------- */

const heroWrapper = {
  width: "100vw",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
};

const heroSlide = {
  position: "absolute",
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "opacity 1.2s ease-in-out",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  zIndex: 1,
};

const heroContent = {
  position: "relative",
  zIndex: 2,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "white",
  padding: "20px",
};

const searchInput = {
  padding: "14px 20px",
  borderRadius: "999px",
  border: "none",
  width: "320px",
  outline: "none",
  background: "white",
  color: "#111827",
  boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
};

const searchButton = {
  padding: "14px 26px",
  borderRadius: "999px",
  border: "none",
  background: "#0f766e",
  color: "white",
  fontWeight: "500",
};
