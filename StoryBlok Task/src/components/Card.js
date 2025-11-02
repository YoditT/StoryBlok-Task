import React from "react";
import { storyblokEditable } from "@storyblok/react";

export default function Card({ blok }) {
  // Extract fields safely based on your JSON structure
  const { Titles, images } = blok || {};

  return (
    <div
      {...storyblokEditable(blok)}
      className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      {images?.filename && (
        <img
          src={images.filename}
          alt={images.alt || Titles || "Card image"}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-5">
        {Titles && (
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {Titles}
          </h2>
        )}
        <p className="text-gray-600 text-sm">
          This is a Storyblok card component.
        </p>
      </div>
    </div>
  );
}
