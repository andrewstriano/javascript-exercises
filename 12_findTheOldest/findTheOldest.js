const findTheOldest = function(people) {
    const currentYear = 2023;
    let firstAge, nextAge;
    const sorted = people.sort( (first, next) => {
        if("yearOfDeath" in first && "yearOfDeath" in next){
        firstAge = first.yearOfDeath - first.yearOfBirth;
        nextAge = next.yearOfDeath - next.yearOfBirth; 
        } else if (!("yearOfDeath" in first)) {
            firstAge = currentYear - first.yearOfBirth;
            nextAge = next.yearOfDeath - next.yearOfBirth;
        } else if (!("yearOfDeath" in next)) {
            nextAge = currentYear - next.yearOfBirth;
            firstAge = first.yearOfDeath - first.yearOfBirth;
        }
        if(firstAge > nextAge) {
            return -1;
            
        }else {
            return 1}
    });
    oldestPerson = sorted[0];

    return oldestPerson;
}
// Do not edit below this line
module.exports = findTheOldest;
