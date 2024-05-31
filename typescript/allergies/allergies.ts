type Allergy = {
  name: string;
  score: number;
};

const allergyList: Allergy[] = [
  { name: 'eggs', score: 1 },
  { name: 'peanuts', score: 2 },
  { name: 'shellfish', score: 4 },
  { name: 'strawberries', score: 8 },
  { name: 'tomatoes', score: 16 },
  { name: 'chocolate', score: 32 },
  { name: 'pollen', score: 64 },
  { name: 'cats', score: 128 },
];

export class Allergies {
  private allergenIndex: number;
  private knownAllergies: string[];

  constructor(allergenIndex: number) {
    this.allergenIndex = allergenIndex
    this.knownAllergies = this.setAllergyList()
  }

  private setAllergyList(): string[] {
    let newAllergy: string[] = []
    allergyList.forEach((allergy) => {
      if ((this.allergenIndex & allergy.score) !== 0){
        newAllergy.push(allergy.name)
      }
    })
    this.knownAllergies = newAllergy
    return this.knownAllergies
  }

  public list(): string[] {
    const setAllergen = allergyList.find((allergy) => allergy.score === this.allergenIndex)
    if (setAllergen) {
      return [setAllergen.name]
    } else {
      return this.knownAllergies
    }
  }

  public allergicTo(allergen: string): boolean {
    if(this.knownAllergies.includes(allergen)) {
      return true
    } else {
      return false
    }
  }
}
