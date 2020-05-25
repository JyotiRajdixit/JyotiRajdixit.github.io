import React from 'react';
import ReactDOM from 'react-dom';
import Sem from './Sem.jsx';
import Semester from './SemesterData.jsx'

function App() {
  
  const SemComponent = Semester.map(
    sem => <Sem key={sem.id} sm={sem.sm} sub1={sem.sub1} sub2={sem.sub2} sub3={sem.sub3} sub4={sem.sub4} sub5={sem.sub5} />)
    
    return(
      <div>
         {SemComponent}
      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
 );