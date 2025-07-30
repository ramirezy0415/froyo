// Prompt the user to provide a comma-separated list of froyo flavors
const user_flavors = prompt(
  "Please enter a list of comma-separated froyo flavors. Example:vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

/**
 * Counts the frequency of each flavor in the string provided
 *
 * @param {flavors} string - A comma-separated string of flavors
 * @returns {hashmap} Returns a hashmap containing the frequency counts of all flavors
 */
function flavor_frequency_counter(flavors) {
  // Derive a list of the flavors provided by splitting on the comma
  const flavor_list = flavors.split(",");
  let flavor_counter = {};

  // Iterate through the flavors in the list and insert into the hashmap
  for (let index = 0; index < flavor_list.length; index++) {
    const flavor = flavor_list[index];
    // If flavor is in counter, increase the count
    if (flavor in flavor_counter) {
      flavor_counter[flavor]++;
    } else {
      // If flavor not in counter, initialize to 1
      flavor_counter[flavor] = 1;
    }
  }
  // Return counter results
  return flavor_counter;
}

console.log(flavor_frequency_counter(user_flavors));
