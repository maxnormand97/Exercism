package airportrobot

import "fmt"

type Greeter interface {
	LanguageName() string
	Greet(name string) string
}

type Italian struct{}

type Portuguese struct{}

func (g Italian) LanguageName() string {
	return "Italian"
}

func (g Portuguese) LanguageName() string {
	return "Portuguese"
}

func (g Italian) Greet(name string) string {
	return fmt.Sprintf("Ciao %s!", name)
}

func (g Portuguese) Greet(name string) string {
	return fmt.Sprintf("Olá %s!", name)
}

func SayHello(name string, g Greeter) string {
	return fmt.Sprintf("I can speak %s: %s", g.LanguageName(), g.Greet(name))
}
