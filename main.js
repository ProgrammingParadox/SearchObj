var getSearchObj = function(s){
    var guessType = function(s){
        // guessType function guesses whether
        // or not a string can be turned into
        // a number

        var isString = s.match(/[^0-9]/);

        if(isString){
            return s;
        } else {
            return Number(s);
        }
    };

    // Remove any extra whitespace
    s = s.trim();

    // if it begins with a "?", remove it
    if(s[0] === "?"){
        s = s.slice(1, s.length);
    }

    // split up the different entries (seperated by an ampersand)
    var entries = s.split("&");

    if(entries[0] === ''){
        return {};
    }

    // now we're going to loop through the entries and add them to an object
    var obj = {};
    for(var i = 0; i<entries.length; i++){
        // get the data from the current entry
        var cur = entries[i].match(/([a-zA-Z_]*)=(.*)/);

        // throw an error if it was formatted incorrectly
        if(!cur){ throw new SyntaxError("Error converting " + entries[i]); }

        // add it to the object
        obj[cur[1]] = guessType(cur[2]);
    }

    return obj;
};
