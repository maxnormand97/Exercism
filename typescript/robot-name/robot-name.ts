let upperCaseAlphabet: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export class Robot {
    public name: string;
    private static usedNames = new Set<string>();

    constructor() {
        this.name = this.generateUniqueName();
    }

    private generateUniqueName(): string {
        let newName = "";
        do {
            newName = this.createName();
        } while (Robot.usedNames.has(newName));
        Robot.usedNames.add(newName);
        return newName;
    }

    private createName(): string {
        let newName = "";
        // generate two random uppercase letters
        for (let i = 0; i < 2; i++) {
            newName += upperCaseAlphabet[Math.floor(Math.random() * upperCaseAlphabet.length)];
        }
        // generate three random numbers
        for (let i = 0; i < 3; i++) {
            newName += Math.floor(Math.random() * 10);
        }
        return newName;
    }

    public resetName(): void {
        this.name = this.generateUniqueName();
    }

    public static releaseNames(): void {
        Robot.usedNames.clear();
    }
}