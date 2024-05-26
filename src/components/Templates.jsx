import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Templates = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleTemplateClick = (templateId) => {
        navigate(`/template${templateId}/${id}`);
        console.log(`Template ${templateId} clicked`);
    }

    return (
        <div>
            <button onClick={() => handleTemplateClick(1)}>
                Template1
            </button>
            <button onClick={() => handleTemplateClick(2)}>Template2</button>
            <button onClick={() => handleTemplateClick(3)}>Template3</button>
            <button onClick={() => handleTemplateClick(4)}>Template4</button>
        </div>
    );
}

export default Templates;
