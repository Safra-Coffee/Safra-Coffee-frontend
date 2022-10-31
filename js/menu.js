const imageItemVisualizer = document.querySelector('.item-image-visualizer');
const imageItem = imageItemVisualizer.querySelector('img');

function closeItemImageVisualizer() {
    if (imageItemVisualizer)
        imageItemVisualizer.style.display = 'none';
;}

function openItemImageVisualizer(imagePath) {
    if (imageItem)
        imageItem.src = imagePath;
            

    if (imageItemVisualizer)
        imageItemVisualizer.style.display = 'flex';
;}