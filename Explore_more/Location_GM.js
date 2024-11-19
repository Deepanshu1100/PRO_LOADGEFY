function showMap(coordinates) {
    const mapUrl = `https://www.google.com/maps?q=${coordinates}`;
    window.open(mapUrl, '_blank');
}