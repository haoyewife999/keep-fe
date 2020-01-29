function nQueen(n) {
    const result = new Array(n);

    _nQueen(0);

    function _nQueen(k) {
        if (k === n) {
            console.log(result.map(item => item + 1));
        }

        for (let i = 0; i < n; i++) {
            let j;
            for (j = 0; j < k; j++) {
                if (result[j] === i || Math.abs(j-k) === Math.abs(result[j]-i)){
                    break;
                }
            }
            if (j === k) {
                result[k] = i;
                _nQueen(k+1);
            }
        }
    }
}

nQueen(4);