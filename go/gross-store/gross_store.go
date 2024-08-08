package gross

// Units stores the Gross Store unit measurements.
func Units() map[string]int {
	units := map[string]int{
		"quarter_of_a_dozen": 3,
		"half_of_a_dozen":    6,
		"dozen":              12,
		"small_gross":        120,
		"gross":              144,
		"great_gross":        1728,
	}
	return units
}

// NewBill creates a new bill.
func NewBill() map[string]int {
	bill := map[string]int{}
	return bill
}

// AddItem adds an item to customer bill.
func AddItem(bill, units map[string]int, item, unit string) bool {
	selectedUnit := units[unit]
	if selectedUnit == 0 {
		return false
	}
	itemPresent := bill[item]
	if itemPresent != 0 {
		bill[item] = itemPresent + selectedUnit
	} else {
		bill[item] = units[unit]
	}
	return true
}

// RemoveItem removes an item from customer bill.
func RemoveItem(bill, units map[string]int, item, unit string) bool {
	itemFromBill, itemExists := bill[item]
	unitInUnits, unitExists := units[unit]

	// Return `false` if the given item is **not** in the bill
	if !itemExists {
		return false
	}

	// Return `false` if the given `unit` is not in the `units` map.
	if !unitExists {
		return false
	}

	// Calculate the new quantity
	newQuantity := itemFromBill - unitInUnits

	// Return `false` if the new quantity would be less than 0.
	if newQuantity < 0 {
		return false
	}

	// If the new quantity is 0, completely remove the item from the `bill` then return `true`.
	if newQuantity == 0 {
		delete(bill, item)
	} else {
		// Otherwise, reduce the quantity of the item and return `true`.
		bill[item] = newQuantity
	}

	return true
}

// GetItem returns the quantity of an item that the customer has in his/her bill.
func GetItem(bill map[string]int, item string) (int, bool) {
	selectedItem, itemExists := bill[item]

	if !itemExists {
		return 0, false
	}

	return selectedItem, true
}
