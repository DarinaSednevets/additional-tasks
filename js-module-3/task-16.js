function countTotalSalary(salaries) {
    let totalSalary = 0;
    let oneSal;
    let allSall = Object.values(salaries);
    for (oneSal of allSall) {
        totalSalary += oneSal;
    };
    return totalSalary ;
};

console.log(countTotalSalary({}) );//возвращает 0.
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));// возвращает 330.
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) );//возвращает 400.