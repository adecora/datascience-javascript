const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <ul>{programmers.map((programmer, idx) => <ListElement even={idx % 2 === 0} name={programmer} />)}</ul>
);