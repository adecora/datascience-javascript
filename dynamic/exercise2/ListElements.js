const ListElement = ({even, name: {firstName: first, lastName: last}}) => {
    return (
        <div>
            {even
                ? <li id={`${first}:${last}`}>{first}, {last}</li>
                : <li id={`${first}:${last}`}><em>{first}, {last}</em></li>
            }
        </div>
    );
}