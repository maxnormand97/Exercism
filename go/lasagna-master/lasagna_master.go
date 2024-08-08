package lasagna

func PreparationTime(layers []string, prepTime int) int {
	if prepTime == 0 {
		prepTime = 2
	}
	layerCount := len(layers)
	return layerCount * prepTime
}

func Quantities(items []string) (int, float64) {
	noodleCount := 0
	sauceCount := 0
	for _, value := range items {
		if value == "noodles" {
			noodleCount++
		}
		if value == "sauce" {
			sauceCount++
		}
	}
	noddleAmount := noodleCount * 50
	sauceAmount := float64(sauceCount) * 0.2
	return noddleAmount, sauceAmount
}

func AddSecretIngredient(friendsList []string, myList []string) {
	secretIngredient := friendsList[len(friendsList)-1]
	myList[len(myList)-1] = secretIngredient
}

func ScaleRecipe(quantities []float64, scaleAmount int) []float64 {
	scaleFactor := float64(scaleAmount) / 2.0
	newValues := []float64{}
	for _, value := range quantities {
		newValues = append(newValues, value*scaleFactor)
	}
	return newValues
}
