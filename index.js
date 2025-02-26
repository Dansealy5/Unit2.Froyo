const userInputString = prompt(
    "Please enter your favorite froyo flavors seperated with commas"
  );

  const stringArray = userInputString.split(",");

  const countflavors = (stringArray) => {
    const obj = {};
    for (const flavor in stringArray) {
        if (obj[stringArray[flavor]]) {
            obj[stringArray[flavor]] += 1
        }
        else {
            obj[stringArray[flavor]] = 1
        }
    }
    return obj;
  }

  const froyo = countflavors(stringArray)

  console.table(froyo)