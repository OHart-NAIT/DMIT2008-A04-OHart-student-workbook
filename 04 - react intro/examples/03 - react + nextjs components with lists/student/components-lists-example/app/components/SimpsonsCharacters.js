const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Bart Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Lisa Simpson",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]


export default function SimpsonsCharacters() {
  return <ul>
    {SIMPSON_CHARACTERS.map(
	// Adding the 'Index' term (built-in) will preserve the array index of each element under the hood,
	// which we can eventually use to refere to a specific rendered element 
	(characterName, index)=> {
      return <li key={index}>{characterName}</li>
    })}
  </ul>
}