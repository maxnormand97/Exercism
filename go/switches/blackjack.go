package blackjack

// ParseCard returns the integer value of a card following blackjack ruleset.
func ParseCard(card string) int {
	switch card {
	case "ace":
		return 11
	case "two":
		return 2
	case "three":
		return 3
	case "four":
		return 4
	case "five":
		return 5
	case "six":
		return 6
	case "seven":
		return 7
	case "eight":
		return 8
	case "nine":
		return 9
	case "ten", "jack", "queen", "king":
		return 10
	default:
		return 0
	}
}

// FirstTurn returns the decision for the first turn, given two cards of the
// player and one card of the dealer.
func FirstTurn(card1, card2, dealerCard string) string {
	cardTotal := ParseCard(card1) + ParseCard(card2)

	switch {
	case card1 == "ace" && card2 == "ace":
		return "P"
	case cardTotal == 21 && (dealerCard != "ace" && dealerCard != "ten" && dealerCard != "jack" && dealerCard != "queen" && dealerCard != "king"):
		return "W"
	case cardTotal == 21:
		return "S"
	case cardTotal >= 17 && cardTotal <= 20:
		return "S"
	case cardTotal >= 12 && cardTotal <= 16:
		if ParseCard(dealerCard) >= 7 {
			return "H"
		} else {
			return "S"
		}
	case cardTotal <= 11:
		return "H"
	default:
		return "S"
	}
}
