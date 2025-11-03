import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className="image-component"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "30px",
        padding: "20px",
      }}
    >
      {/* Elephant */}
      {blok.Image?.filename && (
        <div style={{ textAlign: "center" }}>
          <img
            src={blok.Image.filename}
            alt={blok.Name || "Elephant"}
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <h3 style={{ marginTop: "10px" }}>{blok.Name}</h3>
        </div>
      )}

      {/* Eagle */}
      {blok.eagle?.filename && (
        <div style={{ textAlign: "center" }}>
          <img
            src={blok.eagle.filename}
            alt={blok.Bird || "Eagle"}
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <h3 style={{ marginTop: "10px" }}>{blok.Bird}</h3>
        </div>
      )}

      {/* Turtle */}
      {blok.turtle?.filename && (
        <div style={{ textAlign: "center" }}>
          <img
            src={blok.turtle.filename}
            alt={blok.Reptile || "Turtle"}
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <h3 style={{ marginTop: "10px" }}>{blok.Reptile}</h3>
        </div>
      )}
    </div>
  );
};

export default Image;