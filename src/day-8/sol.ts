const input = require("fs").readFileSync("./input.txt", "utf-8") as string;
let height = 0;
let width = 0;
let count = 0;
let t = 0;
let a: Array<number>[]= [];
let visit: Array<number>[] = [];
input.split("\n").forEach((line)=>{
    height++
    if(width === 0) width = line.length;
    for(let i = 0;i<width;i++){
        if(a[height-1] === undefined){ 
            a[height-1] = [];
        }
        a[height-1][i] = +line[i];
    }
})

for(let i=0;i<height;i++){
    for(let j=0;j<width;j++){
        if(visit[j] === undefined ) visit[j] = []; 
            visit[i][j]=0;
    }
}
// count=2*(height+width-2);
//view from front j i
let temp : any[] = [];
for(let i = 0 ; i<width;i++){
    temp.push(a[0][i]);
    for(let j =0;j<height;j++){
        let p = temp.pop()
        temp.push(p);
        if(i===0 || j===0 || i===(width-1) || j===(height-1)){
            if(visit[j][i]===0){
                count++;
                visit[j][i]=1;
            }
        }
        else if(a[j][i] > p){
            if(visit[j][i]===0){
                count++;
                console.log(`${j} , ${i}`);
                visit[j][i] = 1 ;
            }
            temp.push(a[j][i])
        }
    }
}
temp = [];
//view from bottom
for(let i = 0 ; i<width;i++){
    temp.push(a[height-1][i]);
    for(let j = height-1;j>=0;j--){
        let p = temp.pop()
        temp.push(p);
        if(i===0 || j===0 || i===(width-1) || j===(height-1)){
            if(visit[j][i]===0){
                count++;
                visit[j][i]=1;
            }
        }
        else if(a[j][i] > p){
            if(visit[j][i]===0){
                count++;
                console.log(`${j} , ${i}`);
                visit[j][i] = 1 ;
            }
            temp.push(a[j][i])
        }
    }
}
temp = [];
//view from left 
for(let i = 0 ; i< height;i++){
    temp.push(a[0][i])
    for(let j = 0 ; j<width;j++){
        let p = temp.pop()
        temp.push(p);
        if(i===0 || j===0 || (i===(height-1) || j===(width-1)){
            if(visit[i][j]===0){
                count++;
                visit[i][j]=1;
            }
        }
        else if(a[i][j] > p){
            if(visit[i][j]===0){
                count++; 
                console.log(`${i} , ${j}`);
                visit[i][j] = 1 ;
            }
            temp.push(a[i][j])
        }
    }
}
temp = [];
//view from right 
for(let i = 0 ; i< height;i++){
    temp.push(a[width-1][i])
    for(let j = width-1 ; j>=0;j--){
        let p = temp.pop()
        temp.push(p);
        if(i===0 || j===0 || (i===(height-1) || j===(width-1)){
            if(visit[i][j]===0){
                count++;
                visit[i][j]=1;
            }
        }
        else if(a[i][j] > p){
            if(visit[i][j]===0){
                count++;
                console.log(visit[i][j]);
                console.log(`${i} , ${j}`);
                visit[i][j] = 1 ;
            }
            temp.push(a[i][j])
        }
    }
}
console.log(visit);
