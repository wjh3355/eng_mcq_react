fetch('https://gist.githubusercontent.com/wjh3355/85ea89c3330149e56c71002dc8b1aad2/raw/846ecf602d0e51fb8bd3c28f7e2020748d6501d0/source.json')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))