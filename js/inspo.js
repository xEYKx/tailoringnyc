// Array of image URLs
const imageUrls = [
    "/inspo_image/1.jpg", 
    "/inspo_image/2.jpg", 
    "/inspo_image/3.jpg", 
    "/inspo_image/4.jpg", 
    "/inspo_image/5.jpg",
    "/inspo_image/6.jpg", 
    "/inspo_image/7.jpg", 
    "/inspo_image/8.jpg", 
    "/inspo_image/9.jpg", 
    "/inspo_image/10.jpg",
    "/inspo_image/11.jpg", 
    "/inspo_image/12.jpg", 
    "/inspo_image/13.jpg", 
    "/inspo_image/14.jpg", 
    "/inspo_image/15.jpg",
    "/inspo_image/16.jpg", 
    "/inspo_image/17.jpg", 
    "/inspo_image/18.jpg", 
    "/inspo_image/19.jpg", 
    "/inspo_image/20.jpg",
    "/inspo_image/21.jpg", 
    "/inspo_image/22.jpg", 
    "/inspo_image/23.jpg", 
    "/inspo_image/24.jpg", 
    "/inspo_image/25.jpg",
    "/inspo_image/26.jpg", 
    "/inspo_image/27.jpg", 
    "/inspo_image/28.jpg", 
    "/inspo_image/29.jpg", 
    "/inspo_image/30.jpg",
    "/inspo_image/31.jpg", 
    "/inspo_image/32.jpg", 
    "/inspo_image/33.jpg", 
    "/inspo_image/34.jpg", 
    "/inspo_image/35.jpg",
    "/inspo_image/36.jpg", 
    "/inspo_image/37.jpg", 
    "/inspo_image/38.jpg", 
    "/inspo_image/39.jpg", 
    "/inspo_image/40.jpg",
    "/inspo_image/41.jpg", 
    "/inspo_image/42.jpg", 
    "/inspo_image/43.jpg", 
    "/inspo_image/44.jpg", 
    "/inspo_image/45.jpg",
    "/inspo_image/46.jpg", 
    "/inspo_image/47.jpg", 
    "/inspo_image/48.jpg", 
    "/inspo_image/49.jpg", 
    "/inspo_image/50.jpg",
    "/inspo_image/51.jpg", 
    "/inspo_image/52.jpg", 
    "/inspo_image/53.jpg", 
    "/inspo_image/54.jpg", 
    "/inspo_image/55.jpg",
    "/inspo_image/56.jpg", 
    "/inspo_image/57.jpg", 
    "/inspo_image/58.jpg", 
    "/inspo_image/59.jpg", 
    "/inspo_image/60.jpg",
    "/inspo_image/61.jpg", 
    "/inspo_image/62.jpg", 
    "/inspo_image/63.jpg", 
    "/inspo_image/64.jpg", 
    "/inspo_image/65.jpg",
    "/inspo_image/66.jpg", 
    "/inspo_image/67.jpg", 
    "/inspo_image/68.jpg", 
    "/inspo_image/69.jpg", 
    "/inspo_image/70.jpg",
    "/inspo_image/80.jpg",
    "/inspo_image/81.jpg",
    "/inspo_image/82.jpg",
    "/inspo_image/83.jpg",
    "/inspo_image/84.jpg",
    "/inspo_image/85.jpg",
    "/inspo_image/86.jpg",
    "/inspo_image/87.jpg",
    "/inspo_image/88.jpg",
    "/inspo_image/89.jpg",
   
 
  ];
  
  // Function to create and append images to the DOM
  function displayImages() {
    const imageContainer = document.getElementById("imageContainer");
  
    for (const imageUrl of imageUrls) {
      // Create a div element with the "img" class
      const imgDiv = document.createElement("div");
      imgDiv.classList.add("img");
  
      // Create an image element
      const imgElement = document.createElement("img");
      imgElement.src = imageUrl;
      imgElement.alt = "Image"; // Set the alt attribute to describe the image (you can customize this)
  
      // Append the image element to the div
      imgDiv.appendChild(imgElement);
  
      // Append the div to the imageContainer
      imageContainer.appendChild(imgDiv);
    }
  }
  
  // Call the function to display the images
  displayImages();
  