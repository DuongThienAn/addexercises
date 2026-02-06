import { useState } from "react";
// Đỗi màu chữ
function UseStateSimple() {
  const [isRed, setIsRed] = useState(false);

  return (
    <div>
      <h3 style={{ color: isRed ? "red" : "green" }}>useState cơ bản</h3>
      <button onClick={() => setIsRed(!isRed)}>Đổi màu chữ trên</button>
    </div>
  );
}

export default UseStateSimple;
//Ban đầu state isRed được gán là false.
//Khi người dùng bấm nút, gọi hàm setIsRed để đổi giá trị state sang ngược lại.
//Mỗi lần state thay đổi thì React sẽ render lại component, từ đó cập nhật lại màu chữ theo state mới.
//Nếu không dùng useState mà chỉ dùng biến thường thì khi bấm nút, giao diện sẽ không thay đổi vì React không theo dõi được sự thay đổi đó.
