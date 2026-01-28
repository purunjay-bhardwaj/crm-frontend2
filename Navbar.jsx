import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", to: "/dashboard" },
    { name: "Clients", to: "/clients" },
    { name: "Brokers", to: "/brokers" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: 0,
        width: "100%",
        zIndex: 1000,
        padding: "0 24px",
      }}
    >
      <div
        style={{
          background: "#0f766e",
          borderRadius: "14px",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
        }}
      >
        {/* LOGO */}
        <Link
          to="/dashboard"
          style={{
            color: "white",
            fontSize: "22px",
            fontWeight: "600",
            letterSpacing: "0.5px",
            textDecoration: "none",
          }}
        >
          Property CRM
        </Link>

        {/* NAV LINKS */}
        <div style={{ display: "flex", gap: "28px" }}>
          {links.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  position: "relative",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: isActive ? "600" : "500",
                  paddingBottom: "6px",
                  opacity: isActive ? 1 : 0.85,
                }}
              >
                {link.name}

                {/* ANIMATED UNDERLINE */}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    height: "2px",
                    width: isActive ? "100%" : "0%",
                    backgroundColor: "white",
                    transition: "width 0.3s ease",
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
