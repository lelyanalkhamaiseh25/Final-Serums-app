import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Bootstrap() {
    return (
        <>
            <Link to="/Shop">
                <Button variant="primary">Shop Now</Button>
            </Link >
        </>
    );
}

export default Bootstrap

