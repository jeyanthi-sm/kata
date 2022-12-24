function toRomanNumeral(inputNumber) {
    function suffixDigits(inpNum) {
        let resstr = "";
        while (inpNum > 0) {
            if (inpNum > 5) {
                resstr += romanObj[5];
                inpNum -= 5;
            }
            else {
                resstr += romanObj[1];
                inpNum -= 1;
            }

        }
        return resstr;

    }

    function prefixDigits(inpNum, denom) {
        let resstr = "";
        while (inpNum > 0) {
            if (inpNum === 9) {
                resstr += romanObj[denom];
                inpNum = 1;
            }

            else if (inpNum === 4) {
                resstr += romanObj[denom];
                inpNum = 1;
            }
            else {
                resstr = romanObj[1] + resstr;
                inpNum -= 1;
            }

        }
        return resstr;

    }


    const romanObj = { 1: "I", 10: "X", 5: "V" };

    if ((inputNumber === 1) || (inputNumber === 10) || (inputNumber === 5))
        return romanObj[inputNumber];
    else if (inputNumber % 10 === 9) {
        return (prefixDigits(inputNumber, 10));
    }
    else if (inputNumber % 5 === 4) {
        return (prefixDigits(inputNumber, 5));
    }
    else {
        return (suffixDigits(inputNumber));
    }
};

export { toRomanNumeral };