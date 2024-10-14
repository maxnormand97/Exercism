package thefarm

import (
	"errors"
	"fmt"
)

type InvalidCowsError struct {
	cows    int
	message string
}

func (e *InvalidCowsError) Error() string {
	return fmt.Sprintf("%d cows are invalid: %s", e.cows, e.message)
}

func DivideFood(f FodderCalculator, cows int) (float64, error) {
	totalFodder, err := f.FodderAmount(cows)
	// Each time the func call could err check that and return error with other return types
	if err != nil {
		return 0, err
	}

	multiplyAmount, err := f.FatteningFactor()
	if err != nil {
		return 0, err
	}

	result := totalFodder * multiplyAmount / float64(cows)
	return result, nil
}

func ValidateInputAndDivideFood(f FodderCalculator, cows int) (float64, error) {
	if cows > 0 {
		return DivideFood(f, cows)
	} else {
		// Can call errors directly with this
		return 0, errors.New("invalid number of cows")
	}
}

func ValidateNumberOfCows(cows int) error {
	if cows <= 0 {
		if cows == 0 {
			return &InvalidCowsError{
				cows:    cows,
				message: "no cows don't need food",
			}
		} else {
			return &InvalidCowsError{
				cows:    cows,
				message: "there are no negative cows",
			}
		}
	}
	return nil
}
