// Therapist class definition
class Therapist {
  constructor(id, name, schedule, gender) {
    this.id = id;
    this.name = name;
    this.schedule = schedule; // An array of booleans representing availability
    this.gender = gender; // 'male' or 'female'
  }

  isAvailable(timeSlot, duration) {
    // Check if the therapist is available at the given time slot
    // and can accommodate the specified duration
    return this.schedule[timeSlot] && (this.gender === 'male' || duration !== 35);
  }
}

// Instantiate therapists with their schedules and genders
const therapists = [
  new Therapist(1, 'Alice', [true, false, true, true], 'female'),
  new Therapist(2, 'Bob', [true, true, false, true], 'male'),
  // Add more therapists as needed
];

// Function to find the next available therapist
function findNextAvailableTherapist(timeSlot, duration) {
  // Filter out therapists who are available at the requested time slot
  // and can accommodate the specified duration
  const availableTherapists = therapists.filter(therapist => therapist.isAvailable(timeSlot, duration));

  // Sort available therapists by their ID
  availableTherapists.sort((a, b) => a.id - b.id);

  // Return the therapist with the lowest ID who is available
  return availableTherapists.length > 0 ? availableTherapists[0] : null;
}

// Example usage (adapted for HTML form):
function checkAvailability() {
  const selectedHour = parseInt(document.getElementById('hour').value, 10); // Convert to integer
  const selectedMinute = parseInt(document.getElementById('minute').value, 10); // Convert to integer
  const requestedDuration = 60; // Choose from 30, 60, 90, or 120 minutes

  const requestedTimeSlot = selectedHour; // Assume requestedTimeSlot corresponds to the selected hour
  const nextTherapist = findNextAvailableTherapist(requestedTimeSlot, requestedDuration);

  if (nextTherapist) {
    console.log(`The next available therapist is ${nextTherapist.name} with ID ${nextTherapist.id}.`);
  } else {
    console.log('No therapists are available at the requested time or duration.');
  }
}
