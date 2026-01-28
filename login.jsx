import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // login | signup
  const [showPassword, setShowPassword] = useState(false);
  const [enterAs, setEnterAs] = useState("");

  useEffect(() => {
    document.title =
      mode === "login"
        ? "Login | Property CRM"
        : "Sign Up | Property CRM";
  }, [mode]);

  const handleSubmit = () => {
    localStorage.setItem("enterAs", enterAs || "buyer");
    navigate("/dashboard");
  };

  return (
    <>
      <style>{cssAnimations}</style>

      {/* FULL SCREEN WRAPPER (THIS FIXES THE ISSUE) */}
      <div style={pageStyle}>
        <div key={mode} style={cardStyle}>
          <h2 style={titleStyle}>Property CRM</h2>

          <p style={subtitleStyle}>
            {mode === "login"
              ? "Sign in to manage your properties"
              : "Create your Property CRM account"}
          </p>

          {/* FORM CONTENT */}
          <div style={{ animation: "slideFade 0.35s ease" }}>
            {mode === "signup" && (
              <input type="text" placeholder="Full name" style={inputStyle} />
            )}

            <input
              type="email"
              placeholder="Email address"
              style={inputStyle}
            />

            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                style={{ ...inputStyle, paddingRight: "44px" }}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={eyeStyle}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {mode === "signup" && (
              <input
                type="password"
                placeholder="Confirm password"
                style={inputStyle}
              />
            )}

            {mode === "login" && (
              <>
                <select
                  style={inputStyle}
                  value={enterAs}
                  onChange={(e) => setEnterAs(e.target.value)}
                >
                  <option value="">Enter as</option>
                  <option value="buyer">Buyer</option>
                  <option value="broker">Broker</option>
                  <option value="owner">Owner</option>
                </select>

                <p style={helperTextStyle}>
                  This only affects what you see first. You can change it later.
                </p>
              </>
            )}
          </div>

          <button onClick={handleSubmit} style={buttonStyle}>
            {mode === "login" ? "Login" : "Create account"}
          </button>

          <p style={toggleStyle}>
            {mode === "login"
              ? "Don’t have an account?"
              : "Already have an account?"}
            <span
              onClick={() =>
                setMode(mode === "login" ? "signup" : "login")
              }
              style={toggleLinkStyle}
            >
              {mode === "login" ? " Sign up" : " Login"}
            </span>
          </p>

          <p style={footerStyle}>© 2026 Property CRM</p>
        </div>
      </div>
    </>
  );
}

/* ---------------- STYLES ---------------- */

const pageStyle = {
  minHeight: "100vh",
  width: "100vw",
  background: "linear-gradient(135deg, #0f766e, #115e59)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const cardStyle = {
  background: "white",
  borderRadius: "16px",
  padding: "40px",
  width: "100%",
  maxWidth: "420px",
  boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
  animation: "fadeScaleIn 0.6s ease forwards",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "10px",
  fontWeight: 600,
  color: "#0f766e",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#6b7280",
  marginBottom: "30px",
  fontSize: "14px",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "999px",
  border: "1px solid #e5e7eb",
  marginBottom: "16px",
  outline: "none",
  fontSize: "14px",
  transition: "all 0.2s ease",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "999px",
  border: "none",
  background: "#0f766e",
  color: "white",
  fontWeight: "600",
  fontSize: "15px",
  cursor: "pointer",
  marginTop: "6px",
};

const toggleStyle = {
  textAlign: "center",
  marginTop: "18px",
  fontSize: "13px",
  color: "#6b7280",
};

const toggleLinkStyle = {
  color: "#0f766e",
  fontWeight: "600",
  cursor: "pointer",
};

const footerStyle = {
  textAlign: "center",
  marginTop: "22px",
  fontSize: "13px",
  color: "#6b7280",
};

const helperTextStyle = {
  fontSize: "12px",
  color: "#6b7280",
  marginBottom: "12px",
  textAlign: "center",
};

const eyeStyle = {
  position: "absolute",
  right: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
  fontSize: "16px",
};

const cssAnimations = `
input:focus, select:focus {
  border-color: #0f766e;
  box-shadow: 0 0 0 3px rgba(15,118,110,0.15);
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(15,118,110,0.35);
}

@keyframes fadeScaleIn {
  from {
    opacity: 0;
    transform: scale(0.96) translateY(12px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes slideFade {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;
