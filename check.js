let userInput = prompt("Nhập kí tự cần (C,R,U,D): ")


if (userInput === "C"){
    alert("Mời người dùng nhập món ăn muốn thêm vào menu");
    let a = prompt("Nhập món ăn:")
    let menu = JSON.parse(localStorage.getItem("menu")) || ["rau xào”, “thịt luộc”, “gà rán"]
    menu.push(a);
    localStorage.setItem("menu", JSON.stringify(menu))

} else if (userInput ==="U"){
    
} else if (userInput ==="R"){
    alert("Danh sách món ăn mới nhất trong menu:"+ localStorage.getItem("latesmenu"));
    let menu = JSON.parse(localStorage.getItem("menu")) || ["rau xào”, “thịt luộc”, “gà rán"]
    localStorage.setItem("latesmenu",menu.join(""));
} else if (userInput === "D"){
    alert("Mời người dùng nhập vào tên món muốn update");
    
}