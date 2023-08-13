import { useParams } from "react-router-dom";


const PostDetails = () => {
    const { id } = useParams()
    return (
        <div className="container">
            <h3>details {id}</h3>
        </div>
    );
};

export default PostDetails;