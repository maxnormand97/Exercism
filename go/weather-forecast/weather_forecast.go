// Package weather is a package for weather reporting.
package weather

// CurrentCondition finds the current condition.
var CurrentCondition string

// CurrentLocation finds the current location.
var CurrentLocation string

// Forecast function is something that takes the current condition and location and finds the weather.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
