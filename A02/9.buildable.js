function buildable(str, obj) {
    for (let i = 0; i < str.length; i++) {
        // let char = str[i]; 
        // console.log('str[i]:', str[i])
        // console.log('obj[str[i]]:', obj[str[i]])
        if (obj[str[i]] === 0) {
            return false;
        } else {
            obj[str[i]] -= 1;
        }
    }
    return true;
}


let materials1 = {'a': 1,'b': 1,'c': 2,'d': 0,'e': 1,'f': 1,'g': 0,'h': 1,'i': 1,'j': 0,'k': 1,
'l': 1,'m': 2,'n': 1,'o': 1,'p': 0,'q': 1,'r': 1,'s': 1,'t': 1,'u': 0,'v': 1,'w': 1,'x': 0,'y': 1,'z': 0
}
let materials2 = {'a': 1,'b': 1,'c': 2,'d': 0,'e': 1,'f': 1,'g': 0,'h': 1,'i': 1,'j': 0,'k': 1,
'l': 1,'m': 2,'n': 1,'o': 1,'p': 0,'q': 1,'r': 1,'s': 1,'t': 1,'u': 0,'v': 1,'w': 1,'x': 0,'y': 1,'z': 0
}
let materials3 = {'a': 1,'b': 1,'c': 2,'d': 0,'e': 1,'f': 1,'g': 0,'h': 1,'i': 1,'j': 0,'k': 1,
'l': 1,'m': 2,'n': 1,'o': 1,'p': 0,'q': 1,'r': 1,'s': 1,'t': 1,'u': 0,'v': 1,'w': 1,'x': 0,'y': 1,'z': 0
}
let materials4 = {'a': 1,'b': 1,'c': 2,'d': 0,'e': 1,'f': 1,'g': 0,'h': 1,'i': 1,'j': 0,'k': 1,
'l': 1,'m': 2,'n': 1,'o': 1,'p': 0,'q': 1,'r': 1,'s': 1,'t': 1,'u': 0,'v': 1,'w': 1,'x': 0,'y': 1,'z': 0
}
let materials5 = {'a': 1,'b': 1,'c': 2,'d': 0,'e': 1,'f': 1,'g': 0,'h': 1,'i': 1,'j': 0,'k': 1,
'l': 1,'m': 2,'n': 1,'o': 1,'p': 0,'q': 1,'r': 1,'s': 1,'t': 1,'u': 0,'v': 1,'w': 1,'x': 0,'y': 1,'z': 0
}

console.log(buildable('listen', materials1)) // true
console.log(buildable('listening', materials2)) // false
console.log(buildable('love', materials3)) // true
console.log(buildable('zebra', materials4)) // false
console.log(buildable('julie', materials5)) // false
