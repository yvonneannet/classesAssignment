class Car {
    constructor(make, model, year, isAvailable) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isAvailable = isAvailable;
    }

    toggleAvailability() {
        this.isAvailable = !this.isAvailable;
    }
}

class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
        this.car = car;
        this.renterName = renterName;
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date(rentalEndDate);
    }

    calculateRentalDuration() {
        const timeDifference = this.rentalEndDate.getTime() - this.rentalStartDate.getTime();
        const days = timeDifference / (1000 * 3600 * 24);
        return Math.ceil(days);
    }
}

// Create an instance of Car with specified values
let myCar = new Car("Toyota", "Camry", 2020, true);

// Create an instance of Rental with specific values and actual dates
let myRental = new Rental(myCar, "John Doe", '2024-04-01', '2024-04-10');

// Calculate the rental duration and display it
console.log("Rental Duration:", myRental.calculateRentalDuration(), "days");

// Toggle the car's availability status
myCar.toggleAvailability();
console.log("Car Available:", myCar.isAvailable); 

//2.
class Question {
    constructor(text, options, correctAnswer) {
        this.text = text;
        this.options = options;
        this.correctAnswer = correctAnswer;
    }

    checkAnswer(userAnswer) {
        return userAnswer === this.correctAnswer;
    }
}

class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }

    addQuestion(question) {
        this.questions.push(question);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
    }

    submitAnswer(answer) {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if (currentQuestion.checkAnswer(answer)) {
            this.score++;
        }
        this.nextQuestion();
    }
}

// Example setup with real values
const quiz = new Quiz();
quiz.addQuestion(new Question("What is the capital of France?", ["London", "Paris", "Berlin", "Madrid"], "Paris"));
quiz.addQuestion(new Question("What is 2 + 2?", ["3", "4", "5", "6"], "4"));
quiz.addQuestion(new Question("Who wrote '1984'?", ["George Orwell", "Aldous Huxley", "Ray Bradbury"], "George Orwell"));

// Example interactions
quiz.submitAnswer("Paris"); // Correct answer, score = 1
quiz.submitAnswer("4");     // Correct answer, score = 2
quiz.submitAnswer("George Orwell"); // Correct answer, score = 3

