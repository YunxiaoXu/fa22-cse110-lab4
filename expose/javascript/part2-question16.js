let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const property in statistics) {
    if (statistics.hasOwnProperty(property)) {
        const value = statistics[property];
        if (property.startsWith('r') || value % 2) {
            console.log(value);
        }
        
    }
}