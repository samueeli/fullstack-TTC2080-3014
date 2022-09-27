//T1
const carouselOutput = document.getElementById('carouselOutput');

const images = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/818261/pexels-photo-818261.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

window.onload = () => {
  carouselOutput.innerHTML = `<img src="${images[0].src}" alt="img1" >`;
};

const setImage = () => {
  const checked = document.querySelector('input[name="img"]:checked').id;
  const selectedImage = images.find((img) => img.id == checked);
  carouselOutput.innerHTML = `<img src="${selectedImage.src}" alt="img${checked}" >`;
};
