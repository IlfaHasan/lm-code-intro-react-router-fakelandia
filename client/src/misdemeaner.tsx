import { useEffect,useState } from "react";
import { Misdemeanour } from "./types/misdemeanors.types";

const MisDeamenour : React.FC = () =>{ const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
       useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/misdemeanours/${Math.floor((Math.random()+1)*10)}`);
                const data = await response.json();
                setMisdemeanours(data.misdemeanours);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [])
    
return(
    <div className="misdemeanours">
        <h2>Misdemeanour Data</h2>
        <table className='misdemeanours__table'>
            <thead>
                <tr>
                    <th className='misdemeanours__header'>CitizenId</th>
                    <th className='misdemeanours__header'>Date</th>
                    <th className='misdemeanours__header' >Misdemeanour</th>
                    <th className='misdemeanours__header' >Punishment Idea</th>
                </tr>
            </thead>
            <tbody>
                {misdemeanours.map(misdemeanour => (
                    <tr key={misdemeanour.citizenId} className="misdemeanours__row">
                        <td className='misdemeanours__entry'>{misdemeanour.citizenId}</td>
                        <td className="misdemeanours__entry">{misdemeanour.date}</td>
                        <td className="misdemeanours__entry">{misdemeanour.misdemeanour}</td>
                        <td className="misdemeanours__entry"><img src={`https://picsum.photos/${Math.floor((Math.random()+1) * 100)}/${Math.floor((Math.random()+1) * 100)}`}/></td>

                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};
export default MisDeamenour;