package chessboard

// Declare a type named File which stores if a square is occupied by a piece - this will be a slice of bools
type File = []bool

// Declare a type named Chessboard which contains a map of eight Files, accessed with keys from "A" to "H"
type Chessboard = map[string]File

// CountInFile returns how many squares are occupied in the chessboard,
// within the given file.
func CountInFile(cb Chessboard, file string) int {
	count := 0
	for _, v := range cb[file] {
		if v {
			count++
		}
	}
	return count
}

// CountInRank returns how many squares are occupied in the chessboard,
// within the given rank.
func CountInRank(cb Chessboard, rank int) int {
	// Check if rank is valid
	if rank < 1 || rank > 8 {
		return 0
	}

	count := 0

	// Iterate over each file in the chessboard
	for _, file := range cb {
		// Check if the rank is within the bounds of the file
		if rank-1 < len(file) && file[rank-1] {
			// If the square at the given rank is occupied, increment the count
			count++
		}
	}

	return count
}

// CountAll should count how many squares are present in the chessboard.
func CountAll(cb Chessboard) int {
	count := 0
	// Iterate over each file in the chessboard
	for _, file := range cb {
		// Add the number of squares in the file to the count
		count += len(file)
	}
	return count
}

// CountOccupied returns how many squares are occupied in the chessboard.
func CountOccupied(cb Chessboard) int {
	count := 0

	for _, file := range cb {
		for _, v := range file {
			if v {
				count++
			}
		}
	}

	return count
}
