import '../../styling/SearchBar.css';
import FilterAndSort from './FilterAndSort';
import Reviews from './Reviews';

export default function Home() {
    return (
        <div className='ReviewsPage'>
            <FilterAndSort />
            <Reviews />
        </div>
    );
}
