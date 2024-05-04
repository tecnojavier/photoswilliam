const imageUrls = [
    'photos/boda3.jpg',
    'photos/15f.jpg',
    'photos/15.jpg',
    'photos/boda.jpg',
    'photos/boda1.jpg',
];

function mostrarImagenAleatoria() {
    const gallery = document.getElementById('gallery');
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const imageUrl = imageUrls[randomIndex];
    gallery.innerHTML = `<img src="${imageUrl}" alt="Imagen aleatoria" width="350">`;
}

setInterval(mostrarImagenAleatoria, 2000);

/*-------------------------------------------------------------------------------------------*/

const imageUrls1 = [
    'photos1/photo.jpg',
    'photos1/photo1.jpg',
    'photos1/photo2.jpg',
    'photos1/photo3.jpg',
    'photos1/photo4.jpg',
];

function MostraImagenes() {
    const gallery = document.getElementById('gallery_1');
    const randomIndex = Math.floor(Math.random() * imageUrls1.length);
    const randomImageUrl = imageUrls1[randomIndex];
    gallery.innerHTML = `<img src="${randomImageUrl}" alt="Imagen aleatoria" width="350">`;
}
setInterval(MostraImagenes, 2000);

/*-------------------------------------------------------------------------------------------*/

const imageUrls2 = [
    'photos2/photo.jpg',
    'photos2/photo1.jpg',
    'photos2/photo2.jpg',
    'photos2/photo3.jpg',
    'photos2/photo4.jpg',
];

function MostrarImagenesExtra() {
    const gallery = document.getElementById('gallery_2');
    const randomIndex = Math.floor(Math.random() * imageUrls2.length);
    const randomImageUrl = imageUrls2[randomIndex];
    gallery.innerHTML = `<img src="${randomImageUrl}" alt="Imagen aleatoria" width="350">`;
}

setInterval(MostrarImagenesExtra, 2000);

/*-------------------------------------------------------------------------------------------*/