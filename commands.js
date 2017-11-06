const fs = require('fs');
module.exports = {
    pwd: function(){
        console.log(`\ncurrent directory: ${process.cwd()}`)
        setTimeout(()=>{module.exports.prompt()},0);
    },
    date: function(){
        console.log(`\ncurrent date: ${Date.now()}`)
        setTimeout(()=>{module.exports.prompt()},0);
    },
    ls: function(){
        fs.readdir('.',function(err,files){
            if (err) throw err;
            console.log('\n');
            files.forEach(function(file){

                console.log(`${file.toString()}`);
            })
            
        })
        setTimeout(()=>{module.exports.prompt()},0);
    },
     prompt: function(){console.log('\nprompt > ')},
     echo: function(arr){
         if(arr.length === 1 && global.hasOwnProperty(arr[0])){
             console.log(global[arr[0]]);
         } else {
            console.log(arr.join(' '));
         }
         setTimeout(()=>{module.exports.prompt()},0);
     },
     cat: function(arr){
         if(!arr.length) return;
        
         
         
            fs.readFile(`./${arr[0]}`,'utf8',(err,data)=>{
                if (err) throw err;
                console.log(data);
                if(arr.length === 1){  
                    setTimeout(()=>{module.exports.prompt()},0);
                }  
            });
            
        
        module.exports.cat(arr.slice(1));

    
            
     },
     head: function(arr){
         const file = arr[0];
         let fileString;
         let outputArray = [];
         fs.readFile(`./${arr[0]}`,'utf8',(err,data)=>{
            if (err) throw err;
            fileString = data;
            const newLine = /\n/;
            while(fileString.length && outputArray.length < 5){
                let index = fileString.search(newLine)+1;
                let line = fileString.slice(0,index);
                fileString = fileString.slice(index);
                outputArray.push(line);
    
            }
            console.log(outputArray.join(""));
            setTimeout(()=>{module.exports.prompt()},0);
        });
        
         
     },
     tail: function(arr){
        const file = arr[0];
        let fileString;
        let outputArray = [];
        fs.readFile(`./${arr[0]}`,'utf8',(err,data)=>{
           if (err) throw err;
           fileString = data;
           const newLine = /\n/;
           while(fileString.length > 0){
               let index = fileString.search(newLine);
               let line;
               if(index>-1){
                index++;
                line = fileString.slice(0,index);
                fileString = fileString.slice(index);
               } else {
                  line = fileString.slice(0);
                  fileString = ''; 
               }
               outputArray.push(line);
               
   
           }
           console.log(outputArray.slice(outputArray.length - 5).join(''));
           setTimeout(()=>{module.exports.prompt()},0);
       });
    },
    sort: function(arr){
        const file = arr[0];
        let fileString;
        let outputArray = [];
     
        fs.readFile(`./${arr[0]}`,'utf8',(err,data)=>{
           if (err) throw err;
           fileString = data;
           const newLine = /\n/;
           while(fileString.length > 0){
               let index = fileString.search(newLine);
               let line;
               if(index>-1){
                
                line = fileString.slice(0,index);
                fileString = fileString.slice(index+1);
               } else {
                  line = fileString.slice(0);
                  fileString = ''; 
               }
               outputArray.push(line);
               
   
           }
          console.log(outputArray.sort().join('\n'));

           setTimeout(()=>{module.exports.prompt()},0);
       });
    },
    wc: function(arr){
        const file = arr[0];
        let fileString;
        let outputArray = [];
        let wordCount;
        let charCount;
     
        fs.readFile(`./${arr[0]}`,'utf8',(err,data)=>{
           if (err) throw err;
           fileString = data;
           const newLine = /\n/;
           charCount = fileString.length;
           while(fileString.length > 0){
               let index = fileString.search(newLine);
               let line;
               if(index>-1){
                
                line = fileString.slice(0,index);
                fileString = fileString.slice(index+1);
               } else {
                  line = fileString.slice(0);
                  fileString = ''; 
               }
               outputArray.push(line);
               
   
           }
          console.log(`Lines: ${outputArray.length}`);
            wordCount = outputArray.reduce((accumulator, current)=>{
                let numWords = current.split(/\s+/).length;
                return accumulator + numWords;
            },0);
            console.log(`words: ${wordCount}`);

            console.log(`bytes: ${charCount}`);

           setTimeout(()=>{module.exports.prompt()},0);
       });
    },

    uniq: function(arr){
        const file = arr[0];
        let fileString;
        let outputArray = [];
     
        fs.readFile(`./${arr[0]}`,'utf8',(err,data)=>{
           if (err) throw err;
           fileString = data;
           const newLine = /\n/;
           while(fileString.length > 0){
               let index = fileString.search(newLine);
               let line;
               if(index>-1){
                index++;
                line = fileString.slice(0,index);
                fileString = fileString.slice(index);
               } else {
                  line = fileString.slice(0);
                  fileString = ''; 
               }
               outputArray.push(line);
               
   
           }
          outputArray.sort();
          let uniqueArray = [outputArray[0]];
          outputArray.reduce((previous, current)=>{
            if(current != previous){
                uniqueArray.push(current);
            } 
            
            return current;
          });
          console.log(uniqueArray.join(''));

           setTimeout(()=>{module.exports.prompt()},0);
       });
    }


}