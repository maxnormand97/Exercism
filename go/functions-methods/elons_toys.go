package elon

import "fmt"

func (car *Car) Drive() {
	if car.battery >= car.batteryDrain {
		car.battery = car.battery - car.batteryDrain
		car.distance = car.distance + car.speed
	}
	// NOTE: don't need to return this it manipulates the original object cause it passes in a pointer
}

func (car *Car) DisplayDistance() string {
	return fmt.Sprintf("Driven %d meters", car.distance)
}

func (car *Car) DisplayBattery() string {
	return fmt.Sprintf("Battery at %d%%", car.battery)
}

func (car *Car) CanFinish(trackDistance int) bool {
	// Calculate the maximum distance the car can drive with the current battery
	maxDistance := car.battery / car.batteryDrain * car.speed

	// The car can finish the race if the maximum distance it can drive is greater than or equal to the track distance
	return maxDistance >= trackDistance
}
