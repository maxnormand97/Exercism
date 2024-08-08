package birdwatcher

func TotalBirdCount(birdsPerDay []int) int {
	counter := 0

	for _, birds := range birdsPerDay {
		counter += birds
	}
	return counter
}

// BirdsInWeek returns the total bird count by summing
// only the items belonging to the given week.
func BirdsInWeek(birdsPerDay []int, week int) int {
	start := (week - 1) * 7
	end := start + 7

	// Ensure we don't go out of bounds
	if end > len(birdsPerDay) {
		end = len(birdsPerDay)
	}

	// Sum the bird counts for the week
	weekCount := 0
	for _, birds := range birdsPerDay[start:end] {
		weekCount += birds
	}

	return weekCount
}

// FixBirdCountLog returns the bird counts after correcting
// the bird counts for alternate days.
func FixBirdCountLog(birdsPerDay []int) []int {
	for i, birdCount := range birdsPerDay {
		if i%2 == 0 {
			birdsPerDay[i] = birdCount + 1
		}
	}

	return birdsPerDay
}
