package electionday

import "fmt"

// NewVoteCounter returns a new vote counter with
// a given number of initial votes.

func NewVoteCounter(initialVotes int) *int {
	// panic("Please implement the NewVoteCounter() function")
	var counter *int
	// var p *int
	counter = &initialVotes
	fmt.Println(counter, "POINTER REF")
	return counter
}

// VoteCount extracts the number of votes from a counter.
func VoteCount(counter *int) int {
	// panic("Please implement the VoteCount() function")
	if counter == nil {
		return 0
	} else {
		return *counter
	}
}

// IncrementVoteCount increments the value in a vote counter.
func IncrementVoteCount(counter *int, increment int) {
	*counter = *counter + increment
}

// NewElectionResult creates a new election result.
func NewElectionResult(candidateName string, votes int) *ElectionResult {
	return &ElectionResult{Name: candidateName, Votes: votes}
}

// DisplayResult creates a message with the result to be displayed.
func DisplayResult(result *ElectionResult) string {
	return fmt.Sprintf("%s (%d)", result.Name, result.Votes)
}

// DecrementVotesOfCandidate decrements by one the vote count of a candidate in a map.
func DecrementVotesOfCandidate(results map[string]int, candidate string) {
	if _, ok := results[candidate]; ok {
		// If the candidate exists, decrement their vote count by one
		results[candidate]--
	}
}
