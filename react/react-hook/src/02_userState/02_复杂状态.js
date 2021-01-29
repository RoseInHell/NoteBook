import React, { useState }from 'react';

export default function CompletHookState() {
  const [friends, setFriends] = useState(['kobe', 'lilei']);
  const [student, setStudent] = useState([
    {id: 1, name: 'lilei', age: 1},
    {id: 2, name: 'aaaa', age: 2},
    {id: 13, name: 'dddd', age: 3},
  ])

  function incrementByIndex(index) {
    const newStudent = [...student];
    newStudent[index].age += 1
    setStudent(newStudent);
  }

  return (
    <div>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={item}>{item}</li>
          })
        }  
      </ul>
      <button onClick={e => setFriends([...friends], 'tom')}>++</button>

      <ul>
        {
          student.map((item,index) => {
            return (
              <div key={item.id}>
                {item.name} {item.age}
                <button onClick={e => incrementByIndex(index)}>+1</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
