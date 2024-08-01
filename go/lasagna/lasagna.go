package lasagna

// TODO: define the 'OvenTime' constant
const OvenTime int = 40

// RemainingOvenTime returns the remaining minutes based on the `actual` minutes already in the oven.
func RemainingOvenTime(actualMinutesInOven int) int {
	return OvenTime - actualMinutesInOven
}

// PreparationTime calculates the time needed to prepare the lasagna based on the amount of layers.
func PreparationTime(numberOfLayers int) int {
	// Define the `PreparationTime` function that takes the number of layers you added to the lasagna
	// as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.
	return numberOfLayers * 2
}

// ElapsedTime calculates the time elapsed cooking the lasagna. This time includes the preparation time and the time the lasagna is baking in the oven.
func ElapsedTime(numberOfLayers, actualMinutesInOven int) int {
	//	Define the `ElapsedTime` function that takes two parameters: the first parameter is the number of layers you added to the lasagna,
	//	and the second parameter is the number of minutes the lasagna has been in the oven.
	//
	// The function should return how many minutes in total you've worked on cooking the lasagna,
	//
	//	which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.
	var preparationTime = PreparationTime(numberOfLayers)
	return preparationTime + actualMinutesInOven
}
