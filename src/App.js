import './App.css';
import { IdCard } from './components/IdCard';
import Random from './components/random';
// import { ClickablePicture } from './components/ClickablePicture';

function App() {
  return (
    <div className="App">
      <div className="itteration">
        <div className="card">
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            birth={new Date('1992-07-14')}
            picture={
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="pic"
              />
            }
          />
        </div>

        <div className="card">
          <IdCard
            lastName="Delores "
            firstName="Obrien"
            gender="female"
            height={172}
            birth={new Date('1988-05-11')}
            picture={
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="pic"
              />
            }
          />
        </div>
      </div>
      <div className="itteration">
        <div>
          <Random min={10} max={2000} />
        </div>
      </div>
      <div>{/* <ClickablePicture /> */}</div>
    </div>
  );
}

export default App;
