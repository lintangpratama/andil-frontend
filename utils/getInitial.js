export default function getInitial(name) {
  const word = name.split(" ");

  if (word.length < 2) {
    const firstName = word[0];
    return firstName[0];
  } else {
    const firstName = word[0];
    const lastName = word[word.length - 1];

    const firstNameInitial = firstName[0];
    const lastNameInitial = lastName[0];

    return firstNameInitial + lastNameInitial;
  }
}
