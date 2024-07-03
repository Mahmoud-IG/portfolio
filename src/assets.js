// src/assets.js

// Create a context for images including subdirectories
const images = require.context('../imgs', true, /\.(png|jpe?g|svg)$/);

// Create a context for videos including subdirectories
const videos = require.context('../vids', true, /\.(mp4|webm)$/);

// Function to get all images
export const getImages = () => {
  return images.keys().map((key) => {
    const src = images(key).default || images(key);
    return { type: "image", src, alt: `Image ${key}` };
  });
};

// Function to get all videos
export const getVideos = () => {
  return videos.keys().map((key) => {
    const src = videos(key).default || videos(key);
    return { type: "video", src, alt: `Video ${key}` };
  });
};
