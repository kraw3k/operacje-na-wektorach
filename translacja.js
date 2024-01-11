// Funkcja do translacji wektora 3D
function translateVector3D(vector, translation) {
    // Upewnij się, że wektor i wektor translacji mają odpowiednią liczbę elementów
    if (vector.length !== 3 || translation.length !== 3) {
        console.error("Wektor i wektor translacji muszą mieć trzy współrzędne.");
        return null;
    }

    // Dodaj odpowiednie współrzędne wektorowi
    const translatedVector = [
        vector[0] + translation[0],
        vector[1] + translation[1],
        vector[2] + translation[2]
    ];

    return translatedVector;
}

// Przykładowe użycie
const originalVector3D = [2, 3, 4];
const translationVector = [10, 10, 10];

const translatedVector3D = translateVector3D(originalVector3D, translationVector);

console.log("Oryginalny wektor 3D:", originalVector3D);
console.log("Wektor 3D po translacji:", translatedVector3D);
