export default function PageHero({ title, image }) {
  return (
    <>
      {/* HERO + TITLE ANIMATIONS */}
      <style>{`
        @keyframes heroFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes titleSlideUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        style={{
          width: "100vw",
          height: "60vh",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "heroFadeIn 0.7s ease forwards",
        }}
      >
        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />

        {/* TITLE WITH DELAY */}
        <h1
          className="heading"
          style={{
            position: "relative",
            zIndex: 2,
            color: "white",
            fontWeight: 600,
            fontSize: "42px",
            textAlign: "center",
            opacity: 0,
            animation: "titleSlideUp 0.6s ease forwards",
            animationDelay: "0.3s",
          }}
        >
          {title}
        </h1>
      </div>
    </>
  );
}
