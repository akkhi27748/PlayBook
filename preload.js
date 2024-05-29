const images = [
  "1.png",
  "2.png",
  "3.png",
  "4.gif",
  "5.gif",
  "6.gif",
  "7.gif",
  "8.gif",
  "9.jpg",
  "10.gif",
  "11.png",
  "12.gif",
  "13.png",
  "14.png",
  "15.gif",
  "16.gif",
  "17.gif",
  "18.png",
  "19.gif",
  "20.gif",
  "21.gif",
  "22.gif",
  "23.gif",
  "24.gif",
];

function preloadImages(srcs, callback) {
  let loaded = 0;
  const images = [];
  srcs.forEach((src, index) => {
    images[index] = new Image();
    images[index].src = src;
    images[index].onload = () => {
      loaded++;
      if (loaded === srcs.length && callback) {
        callback();
      }
    };
  });
}

preloadImages(images, () => {
  console.log("All images preloaded");
});
