import React, {useState} from "react";
import Counter from "../counter/counter";

const CountersList = () => {
    const initialState = [
        {id: 0, value: 0, name: "Ненужная вещь", price: "200"},
        {id: 1, value: 4, name: "Ложка"},
        {id: 2, value: 0, name: "Вилка"},
        {id: 3, value: 0, name: "Тарелка"},
        {id: 4, value: 0, name: "Набор минималиста"},
    ];

    const [counters, setCounters] = useState(initialState);
    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id);
        setCounters(newCounters);
    };
    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = (id) => {
        const newCounters = counters.map(item => {
            if (item.id === id) {
                return {...item, value: item.value + 1}
            } else {
                return item
            }
        })
        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        const newCounters = counters.map(item => {
            if (item.id === id) {
                return {...item, value: item.value > 0 ? item.value - 1 : 0}
            } else {
                return item
            }
        })
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={handleReset}
            >
                Сброс
            </button>
        </>
    );
};
export default CountersList;
