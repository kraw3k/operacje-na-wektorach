// Funkcja do odbicia wektora 3D względem płaszczyzny XY
function reflectVector3DInXY(vector) {
    // Upewnij się, że wektor ma odpowiednią liczbę elementów
    if (vector.length !== 3) {
        console.error("Wektor musi mieć trzy współrzędne.");
        return null;
    }

    // Odbicie względem płaszczyzny XY
    const reflectedVector = [vector[0], vector[1], -vector[2]];

    return reflectedVector;
}

// Przykładowe użycie
const originalVector3D = [2, 3, 4];

const reflectedVectorXY = reflectVector3DInXY(originalVector3D);

console.log("Oryginalny wektor 3D:", originalVector3D);
console.log("Wektor 3D po odbiciu względem płaszczyzny XY:", reflectedVectorXY);
