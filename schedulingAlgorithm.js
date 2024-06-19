// Therapist class definition
class Therapist {
  constructor(id, name, schedule) {
    this.id = id;
    this.name = name;
    this.schedule = schedule; // An array of booleans representing availability
  }

  isAvailable(timeSlot) {
    // Check if the therapist is available at the given time slot
    return this.schedule[timeSlot];
  }
}

// Instantiate therapists with their schedules
const therapists = [
  new Therapist(1, 'Alice', [true, false, true, true]), // true means available
  new Therapist(2, 'Bob', [true, true, false, true]),
  // Add more therapists as needed
];

// Function to find the next available therapist
function findNextAvailableTherapist(timeSlot) {
  // Filter out therapists who are available at the requested time slot
  const availableTherapists = therapists.filter(therapist => therapist.isAvailable(timeSlot));

  // Sort available therapists by their ID
  availableTherapists.sort((a, b) => a.id - b.id);

  // Return the therapist with the lowest ID who is available
  return availableTherapists.length > 0 ? availableTherapists[0] : null;
}

// Example usage:
const requestedTimeSlot = 2; // This would be dynamic based on user input
const nextTherapist = findNextAvailableTherapist(requestedTimeSlot);

if (nextTherapist) {
  console.log(`The next available therapist is ${nextTherapist.name} with ID ${nextTherapist.id}.`);
} else {
  console.log('No therapists are available at the requested time.');
}
