import { useParams } from 'react-router-dom';
import FilterAndSort from './FilterAndSort';
import Reviews from './Reviews';

export default function Category() {
    const params = useParams();

    return (
        <div className="ReviewsPage">
            <FilterAndSort />
            <Reviews params={params} />
        </div>
    );
}
