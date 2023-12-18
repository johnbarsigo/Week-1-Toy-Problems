let marks = prompt('What is your mark?');

function gradeStudents ( marks ){
    if (marks > 79){
        return 'A';
    }
    if (marks >= 60 && marks <=79){
        return 'B';
    }
    if (marks >= 49 && marks <=59){
        return 'C';
    }
    if (marks >= 40 && marks <=49){
        return 'D';
    }
    else if (marks < 40){
        return 'E'
    }
}
console.log(gradeStudents);