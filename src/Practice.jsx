function Mother() {
    const name = '홍부인';
    return <Child motherName={name} />; // 💡"props로 name을 전달했다."
}

function Child(props) {
    return <div>연결 성공
        <p>props.name</p>
    </div>;
}