// 1. UNderstand the problem
// Return the reverse of a string

// 2. Explore concrete examples
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// 3. Break it down
// awe:
//     e + fn(aw) return ewa
//       w + fn(a)  return wa
//         a return a

function reverse(str){
   if(str.length === 1) return str[0];
    return str.slice(-1) + reverse(str.substring(0, str.length-1));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'