import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../api';

export default function FilterAndSort() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        fetchCategories().then(res => {
            setCategories(res.categories);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <h3>Items loading ...</h3>;

    function handleChange(event) {
        const cat = event.target.value;
        if(cat === 'all') {
            navigate(`/`);
        } else {
            navigate(`/category/${cat}`)
        }
    }

    return (
        <section className="FilterAndSort">
            <div id="filter">
                <label htmlFor="categoryNames">
                    Category:
                </label>
                <select name="category" id="categorySelect" onChange={handleChange}>
                    <option value='all' key='default' className='categoryOption'>All</option>
                    {categories.map(category => {
                        return (
                            <option
                                value={category.slug}
                                key={category.slug}
                                className="categoryOption"
                            >
                                {category.slug}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div id="sort">Sort By</div>
        </section>
    );
}
