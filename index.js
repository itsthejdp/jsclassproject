/*


if(title === '' || author === '' || isbn === '') {

  //Show success message
  UI.showAlert('Book Added', 'success')
}

*/

/* Ideal features
  1. Must have option to modify reps and sets
  2. Must have option to 

*/

// Exercise Class: represents a workout
class Exercise {
  constructor(exerciseName, bodyPart, category) {
    this.exerciseName = exerciseName;
    this.bodyPart = bodyPart;
    this.category = category;
  }
}

//UI class: handle UI tasks
class UI {
  static displayExercises() {
    const premadeExercises = [
      {
        exerciseName: "DB Bench Press",
        bodyPart: ["Triceps", "Biceps"],
        category: "weighted",
      },
      {
        exerciseName: "DB Skullcrushers ",
        bodyPart: ["Triceps", "Forearm"],
        category: "weighted",
      },
    ];
    const exercises = premadeExercises;

    static addExerciseToList(exercise) {
      const list = document.querySelector('#book-list')
    }
  }
}

//Storage class: handles storage
class Storage {}

//Event: Display Exercises

//Event: Add an Exercise

  //Get form values
  const exercise = document.querySelector('#exercise').value
  const bodyPart = document.querySelector('#bodyPart').value
  const category = document.querySelector('#category').value

  //Instiate book
  const book = new Book();

//Event: Remove an Exercise
