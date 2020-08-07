function encode(n,s) {
    x = n
    while(x>0) {
        let spaces_indx = []
        for (let i=0; i<=s.length;i++){
            if(s[i]==' '){
                spaces_indx.push(i)
            }
        }
        nospace = s.replace(/ /g, "")
        shifted = shiftString(nospace,n)
        len = s.length - nospace.length + shifted.length
        for (let i = 0; i<=len; i++){
            for (let j = 0; j<=spaces_indx.length;j++){
                if (i == spaces_indx[j]) {
                    shifted= [shifted.slice(0, i), " ", shifted.slice(i)].join('')
                }
            }
        }
        splited = shifted.split(' ')
        for (let i = 0; i<=splited.length -1;i++){
            splited[i] = shiftString(splited[i],n)
        }
        s = splited.join(' ')
        x--
    }
    
    return `${n} ` + s
}


function decode(s) {
    n = parseInt(s)
    s = s.slice(n.toString().length+1,s.length)
    x = n
    while(x>0) {
        splited = s.split(' ')
        for (let i = 0; i<=splited.length -1;i++){
            splited[i] = shiftString(splited[i],-n)
        }
        spaced = splited.join(' ')
        let spaces_indx = []
        for (let i=0; i<=spaced.length;i++){
            if(spaced[i]==' '){
                spaces_indx.push(i)
            }
        }
        nospace = spaced.replace(/ /g, "")
        shifted = shiftString(nospace,-n)
        len = s.length - nospace.length + shifted.length
        for (let i = 0; i<=len; i++){
            for (let j = 0; j<=spaces_indx.length;j++){
                if (i == spaces_indx[j]) {
                    shifted= [shifted.slice(0, i), " ", shifted.slice(i)].join('')
                }
            }
        }
        s = shifted
        x--
    }
    return s
}


const shiftString = (str='', step = 0) => {
    const length = str.length;
    step = step % length;
    step = step < 0 ? length + step : step;
    if (!str || length === 1 || !step) {
        return str;
    }
    const reverseString = (str) => str.split('').reverse().join('');
    str = reverseString(str);
    const s1 = str.slice(0, step);
    const s2 = str.slice(step);
    return reverseString(s1) + reverseString(s2);
};







console.log(encode(10,'If you wish to make an apple pie from scratch, you must first invent the universe.'))
console.log(decode('10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet'))