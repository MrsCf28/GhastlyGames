import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../styling/SearchBar.css';
import FilterAndSort from './FilterAndSort';
import Reviews from './Reviews';

export default function Home() {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.sortBy && !['created_at', 'comment_count', 'votes'].includes(params.sortBy)) {
            navigate('/error');
        }
    }, [params, navigate]);

    return (
        <div className='ReviewsPage'>
            <FilterAndSort />
            <Reviews params={params} />
        </div>
    );
}
