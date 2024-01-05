
class UberPrice{
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }
    Price(distance, duration) {
        const distanceCost = distance * this.costPerKilometer;
        const timecost = duration * this.costPerMinute;
        const totalFare = this.baseFare + distanceCost + timecost;

        return totalFare;
    }
}

const uber = new UberPrice(10, 2, 1.2);
const distanceTraveled = 18;
const durationMinutes = 20;

const totalPrice = uber.Price(distanceTraveled,durationMinutes);

console.log(`The estimated Uber price is $${totalPrice.toFixed(2)}`);