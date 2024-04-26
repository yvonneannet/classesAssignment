// 1.You are working on a web application for a car rental company. They want to keep track of their car inventory and rental information. Your task is to create a JavaScript class or function constructor
//  for representing cars in their inventory and another one for representing rental information. 
// Requirements: 
// 1) Create a Car class or function constructor that has the following properties: a. make (string): The make of the car, e.g., "Toyota". 
// b. model (string): The model of the car, e.g., "Camry". 
// c. year (number): The year the car was manufactured, e.g., 2020. 
// d. isAvailable (boolean): Indicates if the car is currently available for rent. 
// The Car class or function constructor should also have a method called toggleAvailability that changes the isAvailable property to its opposite value (true to false, false to true) 

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


let myCar = new Car("Toyota", "Camry", 2020, true);


let myRental = new Rental(myCar, "John Doe", '2024-04-01', '2024-04-10');

console.log("Rental Duration:", myRental.calculateRentalDuration(), "days");

myCar.toggleAvailability();
console.log("Car Available:", myCar.isAvailable); 

//2.1. Create a Question class with the following properties: 
// ● text(string): The text of the question. 
// ● options(array): An array containing the multiple-choice options. ● correctAnswer(string): The correct answer to the question. 
// The Question class should also have a method called checkAnswer that takes a user's answer as a parameter and returns true if the answer is correct and false otherwise. 
// 2. Create a Quiz class with the following properties: 
// ● questions(array):An array of Question objects. 
// ● currentQuestionIndex(number): The index of the current question in the questions array. 
// ● score(number): The user’s current score. 
// The Quiz class should have the following methods: 
// ● addQuestion: Takes a Question object as a parameter and adds it to the questions array. 
// ● nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex. 
// ● submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of the Question class, and updates the score if the answer is correct.




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


const quiz = new Quiz();
quiz.addQuestion(new Question("Who is Africa's biggest artist?", ["Awilo Logomba", "Tiwa Savage", "Davido", "Burna Boy","Johnny Drille"], "Burna Boy"));
quiz.addQuestion(new Question("What is 10 * 10?", ["10", "20", "30", "40"], "50"));
quiz.addQuestion(new Question("Who is the current president of Uganda?", ["Idi Amin", "Milton Obote", "Kaguta Museveni"], "Kaguta Museveni"));

quiz.submitAnswer("Burna Boy"); 
       quiz.submitAnswer("100");     
       quiz.submitAnswer("Kaguta Museveni"); 

