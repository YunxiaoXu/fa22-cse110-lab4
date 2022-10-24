1. `3`
    - The `for` loop increase `i` by `1` each time, and the loop ends when `i == prices.length`. The length of `prices` is 3.
2. `150`
    - The last assignment of `discountedPrice` is the discounted price of last price `300 * (1-0.5)`.
3. `150`
    - The last assignment of `finalPrice` is the rounded `discountedPrice` which is `150`.
4. `[ 50, 100, 150 ]`
    - Each element of `prices` is discounted, rouned, and pushed into the `discounted` array.
5. `ReferenceError: i is not defined`
    - The variable `i` is not defined since it is declared by `let` in the `for` loop.
6. `ReferenceError: discountedPrice is not defined`
    - The variable `discountedPrice` is not defined since it is declared by `let` in the `for` loop.
7. `150`
    - The variable `finalPrice` is declared outside the `for` loop, so it is accessible.
8. `[ 50, 100, 150 ]`
    - Each element of `prices` is discounted, rouned, and pushed into the `discounted` array; the `discounted` is declared outside the `for` loop, so it accessible both in and out of the loop.
9. `ReferenceError: i is not defined`
    - The variable `i` is not defined since it is declared by `let` in the `for` loop.
10. `3`
    - The variable `length` is the length of `prices` which is `3`.
11. `[ 50, 100, 150 ]`
    - Each element of `prices` is discounted, rouned, and pushed into the `discounted` array; the `discounted` is declared outside the `for` loop, so it accessible both in and out of the loop; values are pushed into the array, but `disounted` always points to the same array.
12. 
    1. `student.name`
    2. `student['Grad Year']`
    3. `student.greeting()`
    4. `student['Favorite Teacher'].name`
    5. `student.courseLoad[0]`
13. 1. `'32'`: the integer maps to its string representation
    2.  `1`: the string of number maps to its integer representation
    3.  `3`: `null` maps to 0
    4.  `'3null'`: `null` maps to its string representation
    5.  `4`: `true` maps to `1`
    6.  `0`: both `false` and `null` map to `0`
    7.  `'3undefined'`: `undefined` maps to string resprensatation
    8.  `NaN`: both maps to integers, and `undefined` maps to `NaN`
14. 1. `true`: `'2'` maps to `2`
    2. `false`: string comparison `'2'` > `'1'`
    3. `true`: `'2'` maps to `2`
    4. `false`: `2` is not `'2'` without conversion
    5. `false`: `true` maps to `1`
    6. `true`: `Boolean(2)` returns `true`
15. `===` is strict equality without automatic conversion. `==` compares the automaticly converted values if they have different types.
16. [javascript file](part2-question16.js)
17. `[ 2, 4, 6 ]`
    - The function `doSomething` doubles and returns the input `num`. The function `modifyArray` takes an array and a callback function and return a new array whose elements are the return values of `callback(array[i])`. So `modifyArray([1,2,3], doSomething)` returns an array whose every element is the double of the element in `[1,2,3]`.
18. [javascript file](part2-question18.js)
19. ```js
    1
    4
    3
    2
    ```