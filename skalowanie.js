// Funkcja do skalowania wektora 3D
function scaleVector3D(vector, scaleFactor) {
    // Upewnij się, że wektor ma odpowiednią liczbę elementów
    if (vector.length !== 3) {
        console.error("Wektor musi mieć trzy współrzędne.");
        return null;
    }

    // Skaluj każdą współrzędną wektora
    const scaledVector = vector.map(coord => coord * scaleFactor);

    return scaledVector;
}

// Przykładowe użycie
const originalVector3D = [2, 3, 4];
const scaleFactor3D = 2;

const scaledVector3D = scaleVector3D(originalVector3D, scaleFactor3D);

console.log("Oryginalny wektor 3D:", originalVector3D);
console.log("Wektor 3D po skalowaniu:", scaledVector3D);
