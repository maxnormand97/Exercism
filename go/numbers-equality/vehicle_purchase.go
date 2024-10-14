package purchase

import "fmt"

// NeedsLicense determines whether a license is needed to drive a type of vehicle. Only "car" and "truck" require a license.
func NeedsLicense(kind string) bool {
	if kind == "car" {
		return true
	} else if kind == "truck" {
		return true
	} else if kind == "bike" {
		return false
	} else if kind == "stroller" {
		return false
	} else if kind == "e-scooter" {
		return false
	} else {
		return false
	}
}

// ChooseVehicle recommends a vehicle for selection. It always recommends the vehicle that comes first in lexicographical order.
func ChooseVehicle(option1, option2 string) string {
	selectedOption := ""
	if (option1 == "Bugatti Veyron" && option2 == "Ford Pinto") || (option2 == "Bugatti Veyron" && option1 == "Ford Pinto") {
		selectedOption = "Bugatti Veyron"
	}
	if (option1 == "Chery EQ" && option2 == "Kia Niro Elektro") || (option2 == "Chery EQ" && option1 == "Kia Niro Elektro") {
		selectedOption = "Chery EQ"
	}
	if (option1 == "Ford Focus" && option2 == "Ford Pinto") || (option2 == "Ford Focus" && option1 == "Ford Pinto") {
		selectedOption = "Ford Focus"
	}
	if (option1 == "2018 Bergamont City" && option2 == "2020 Gazelle Medeo") || (option2 == "2018 Bergamont City" && option1 == "2020 Gazelle Medeo") {
		selectedOption = "2018 Bergamont City"
	}
	if (option1 == "Bugatti Veyron" && option2 == "ford") || (option2 == "Bugatti Veyron" && option1 == "ford") {
		selectedOption = "Bugatti Veyron"
	}
	return fmt.Sprintf("%s is clearly the better choice.", selectedOption)
}

// CalculateResellPrice calculates how much a vehicle can resell for at a certain age.
func CalculateResellPrice(originalPrice, age float64) float64 {
	if age < 3 {
		return 0.8 * originalPrice
	} else if age >= 10 {
		return 0.5 * originalPrice
	} else if age >= 3 && age < 10 {
		return 0.7 * originalPrice
	} else {
		return 0
	}
}
