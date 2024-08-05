package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	productionRateDec := float64(productionRate)
	percentage := successRate / 100.0
	return productionRateDec * percentage
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	carsProduced := CalculateWorkingCarsPerHour(productionRate, successRate)
	return int(carsProduced) / 60
}

// CalculateCost works out the cost of producing the given number of cars.
func CalculateCost(carsCount int) uint {
	groupCost := carsCount / 10
	remainderCost := carsCount % 10
	groupCostTotal := groupCost * 95000
	remainderCostTotal := remainderCost * 10000
	return uint(remainderCostTotal) + uint(groupCostTotal)
}
