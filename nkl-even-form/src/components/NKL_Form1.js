import React, { useState } from 'react';

const NKL_Form1 = () => {
    const [studentName, setStudentName] = useState("Nguyen Khanh Linh");

    // Hàm xử lý sự kiện
    const handleChange = (ev) => {
        // Lấy giá trị khi thay đổi trên form
        const { value } = ev.target;
        // Cập nhật state
        setStudentName(value);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        // Hiển thị giá trị mới trong state
        alert(studentName);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ và tên</label>
                    <input
                        name='studentName'
                        value={studentName}
                        onChange={handleChange}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default NKL_Form1;
