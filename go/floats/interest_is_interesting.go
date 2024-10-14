package interest

// InterestRate returns the interest rate for the provided balance.
func InterestRate(balance float64) float32 {
	const NegativeRate float32 = 3.213
	const LowRate float32 = 0.5
	const MediumRate float32 = 1.621
	const HighRate float32 = 2.475

	if balance < 0 {
		return NegativeRate
	} else if balance >= 0 && balance < 1000 {
		return LowRate
	} else if balance >= 1000 && balance < 5000 {
		return MediumRate
	} else {
		return HighRate
	}
}

// Interest calculates the interest for the provided balance.
func Interest(balance float64) float64 {
	interestRate := float64(InterestRate(balance)) // Convert interest rate to float64
	return balance * interestRate / 100
}

// AnnualBalanceUpdate calculates the annual balance update, taking into account the interest rate.
func AnnualBalanceUpdate(balance float64) float64 {
	interestRate := float64(InterestRate(balance)) // Convert interest rate to float64
	interest := balance * interestRate / 100
	return balance + interest
}

// YearsBeforeDesiredBalance calculates the minimum number of years required to reach the desired balance.
func YearsBeforeDesiredBalance(balance, targetBalance float64) int {
	years := 0
	for balance < targetBalance {
		balance = AnnualBalanceUpdate(balance)
		years++
	}
	return years
}
