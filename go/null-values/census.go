// Package census simulates a system used to collect census data.
package census

import "fmt"

// Resident represents a resident in this city.
type Resident struct {
	Name    string
	Age     int
	Address map[string]string
}

// NewResident registers a new resident in this city.
func NewResident(name string, age int, address map[string]string) *Resident {
	// creates and returns a new Resident struct
	return &Resident{
		Name:    name,
		Age:     age,
		Address: address,
	}
}

// HasRequiredInfo determines if a given resident has all of the required information.
func (r *Resident) HasRequiredInfo() bool {
	if r.Name == "" {
		return false
	} else if len(r.Address) == 0 {
		return false
	} else {
		// must have address if getting here check prop
		for key, value := range r.Address {
			if key == "unknown key" {
				return false
			}

			if value == "" {
				return false
			}
		}
		return true
	}
}

// Delete deletes a resident's information.
func (r *Resident) Delete() {
	r.Name = ""
	r.Age = 0
	r.Address = nil
}

// Count counts all residents that have provided the required information.
func Count(residents []*Resident) int {
	count := 0
	for i, s := range residents {
		fmt.Println(i, "RES")
		fmt.Println(s.Name, "RES NAME")
		if s.HasRequiredInfo() {
			count++
		}

	}
	return count
}
