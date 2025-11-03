import { storyblokEditable } from "@storyblok/react";
import "./Image.css";

const Image = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="image-component">
      {blok.Elephant?.filename && (
        <figure className="image-elephant image-card">
          <img
            src={blok.Elephant.filename}
            alt={blok.Elephant.alt || blok.Mammal || "Elephant"}
            className="image-card__img"
          />
          <figcaption className="image-card__caption">{blok.Mammal || "Elephant"}</figcaption>
        </figure>
      )}

      {blok.Eagle?.filename && (
        <figure className="image-center image-card">
          <img
            src={blok.Eagle.filename}
            alt={blok.Eagle.alt || blok.Bird || "Eagle"}
            className="image-card__img"
          />
          <figcaption className="image-card__caption">{blok.Bird || "Eagle"}</figcaption>
        </figure>
      )}

      {blok.Turtle?.filename && (
        <figure className="image-turtle image-card">
          <img
            src={blok.Turtle.filename}
            alt={blok.Turtle.alt || blok.Reptile || "Turtle"}
            className="image-card__img"
          />
          <figcaption className="image-card__caption">{blok.Reptile || "Turtle"}</figcaption>
        </figure>
      )}
    </div>
  );
};

export default Image;
