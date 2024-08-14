package logs

import "strings"

// Application identifies the application emitting the given log.
func Application(log string) string {
	match := "default"
	recommendation := '❗'
	search := '🔍'
	weather := '☀'

	for _, char := range log {
		if char == recommendation {
			match = "recommendation"
			break
		} else if char == search {
			match = "search"
			break
		} else if char == weather {
			match = "weather"
			break
		}
	}

	return match
}

func Replace(log string, oldRune, newRune rune) string {
	return strings.Replace(log, string(oldRune), string(newRune), -1)
}

func WithinLimit(log string, limit int) bool {
	lengthCount := 0
	for range log {
		lengthCount++
	}

	return lengthCount <= limit
}
