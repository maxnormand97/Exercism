package parsinglogfiles

import (
	"regexp"
)

func IsValidLine(text string) bool {
	pattern := `^\[(TRC|DBG|INF|WRN|ERR|FTL)\]`
	re := regexp.MustCompile(pattern)
	return re.MatchString(text)
}

func SplitLogLine(text string) []string {
	re := regexp.MustCompile(`<[~*=\\-]*>`)
	fields := re.Split(text, -1)
	return fields
}

func CountQuotedPasswords(lines []string) int {
	count := 0
	re := regexp.MustCompile(`"(.*?)(?i)password(.*?)"`)
	for _, line := range lines {
		if re.MatchString(line) {
			count++
		}
	}
	return count
}

func RemoveEndOfLineText(text string) string {
	re := regexp.MustCompile(`end-of-line\d+`)
	cleanText := re.ReplaceAllString(text, "")
	return cleanText
}

func TagWithUserName(lines []string) []string {
	re := regexp.MustCompile(`User\s+(\w+)`)
	taggedLines := make([]string, len(lines))
	for i, line := range lines {
		match := re.FindStringSubmatch(line)
		if match != nil {
			taggedLines[i] = "[USR] " + match[1] + " " + line
		} else {
			taggedLines[i] = line
		}
	}
	return taggedLines
}
