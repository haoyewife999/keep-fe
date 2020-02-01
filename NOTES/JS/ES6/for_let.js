for (let i = 0; i < 3; i++) {
    xxx.onclick = function () {
        console.log(i);
    }
}

{
    {
        let i = 0;
        {
            xxx.onclick = function () {
                console.log(i);
            }
        }
    }

    {
        let i = 1;
        {
            xxx.onclick = function () {
                console.log(i);
            }
        }
    }

    {
        let i = 2;
        {
            xxx.onclick = function () {
                console.log(i);
            }
        }
    }
}
