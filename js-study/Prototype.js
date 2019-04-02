// "안녕".sayStr() // "안녕"

// let Str = function(){
//     this.sayStr = function(e){
//         return e
//     }
// }

// .prototype.sayStr = function(){
//     return 
// }

String.prototype.sayStr= function(){
    return this.toString()
    }
    
    "안녕".sayStr()
    //"안녕"