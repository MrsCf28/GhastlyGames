import { useParams } from 'react-router-dom';
import '../../styling/SearchBar.css';
import FilterAndSort from './FilterAndSort';
import Reviews from './Reviews';

export default function Home() {
    const params = useParams();

    return (
        <div className='ReviewsPage'>
            <FilterAndSort />
            <Reviews params={params} />
        </div>
    );
}
