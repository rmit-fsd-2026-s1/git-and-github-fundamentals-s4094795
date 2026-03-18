import { useState } from 'react';

interface Student {
  name: string;
  email: string;
  id: number;
}

export default function Home() {

  const names: string[] = ['Lisa', 'Marge', 'Homer'];
  const emails: string[] = ['lisa@thesimpsons.com', 'marge@thesimpsons.com', 'homer@thesimpsons.com'];
  const ids: number[]= [12345, 12346, 12347];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [student, setStudent] = useState<Student>({
    name: names[0],
    email: emails[0],
    id: ids[0]
  });

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);

    setStudent((curValue) => ({...curValue,
      id: ids[currentIndex],
      name: names[currentIndex],
      email: emails[currentIndex]
    }));
};

return (
  <div>
    <button onClick={handleClick}>NextStudent</button>
    <div>
      <h2>Name: {student.name}</h2>
      <p>Email: {student.email}</p>
      <p>ID: {student.id}</p>
    </div>
  </div>
);

}
