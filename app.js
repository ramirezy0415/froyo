const user_flavors = prompt(
  "Please enter a list of comma-separated froyo flavors. Example:vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

function count_flavor_frequency(flavors) {
  const flavor_list = flavors.split(",");
  let flavor_counter = {};
  for (let index = 0; index < flavor_list.length; index++) {
    const flavor = flavor_list[index];
    if (flavor in flavor_counter) {
      flavor_counter[flavor]++;
    } else {
      flavor_counter[flavor] = 1;
    }
  }
  return flavor_counter;
}

console.log(count_flavor_frequency(user_flavors));
