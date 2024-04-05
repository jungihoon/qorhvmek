// let fruit = ["banana", "apple", "grape", "mango"]

// console.log(fruit)

// fruit[0] = "fuck"

// console.log(fruit)


// // pop () : 마지막에 있는 아이템을 뺌
// fruit.pop()
// console.log(fruit)

// // push () : 아이템을 넣음
// fruit.push("pineapple")
// console.log(fruit)

// // incl지udes () : 아이템이 있는 없는지 확인
// console.log(fruit.includes("pear"))

// // indexOf () : 아이템에 인덱스 번호를 갈켜줌
// console.log(fruit.indexOf("apple"))

// // slice : 배열 아이템을 잘라내는 역할 (시작점,끝점-끝점 미포함)
// console.log(fruit.slice(1,3))

// // splice : 아이템을 잘라내는 역할 (시작점, 갯수)
// fruit.splice(0,3)
// console.log(fruit)

// // if(조건문) {
// //   조건이 충족하면 할 일들
// // } else <조건문이 false 일때






// let skills = ["HTML","CSS","Javascript"]

// if(skills.includes("Javascript") && skills.includes("React")) {
//   console.log("합격")
// } else if (skills.includes("Javascript") || skills.includes("React")) {
//   console.log("예비")
// } else {
//   console.log("탈락")
// }



// for(let i = 2;i<=9;i++){
//   for(let j = 1; j<=9; j++){
//     console.log(i+'*'+j+ '=' +i*j )
//   }
// }



// let i = 0
// while(i<10){
//   console.log("while무ㅠㄴ 싫애",i)
//   i++;
// }

// let fruit = ["banana","apple","grape","mango"]

// for(let i = 0; i<fruit.length;i++){
//   console.log(fruit[i])
// }

 






let fruit = ["banana","saddsa","asdwqe","qwqwe"]

// for(let i=0; i<fruit.length;i++){
//   console.log("내가 좋아하는 과일은",fruit[i])
// }

for(let item of fruit) {
  console.log("내가 좋아하는 과일은",item)
}



function makeBurger(type,size,num){
  console.log("빵")
  console.log("상추")

  if(num < 1){
    return "버거 갯수가 0개 입니다"
  }
  if(type == "불고기"){
    console.log("고기패티")
  } else if(type == "새우"){
    console.log("새우패티")
  }

  
  console.log("뚜껑덮기")
  console.log(type, "버거",size, "사이즈",num,"개 준비")
  return "완료되었습니다."
}

function serveCoke(){
  console.log("콜라 박스 선택")
  console.log("얼음 담기")
  console.log("콜라 담기")
}

function servefrenchFries(){
  console.log("감자튀김 박스선택")
  console.log("감자튀김 넣기")
}


let result = makeBurger("불고기","M","1")
console.log("버거 프로세스 결과", result)


function makeSet(){
  makeBurger("새우","L",3)
  serveCoke()
  servefrenchFries()
}

makeSet()

function greet(name){
  console.log("안녕 내이름은",name,"이야")
  return name
}

