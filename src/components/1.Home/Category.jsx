import { useParams } from 'react-router-dom';
import FilterAndSort from './FilterAndSort';
import Reviews from './Reviews';

export default function Category() {
    const { category } = useParams();

    return (
        <div className="ReviewsPage">
            <FilterAndSort />
            <Reviews category={category} />
        </div>
    );
}
