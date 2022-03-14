import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryBadge = ({ categoryId, categories }) => {
    let categoryName
    categories.forEach(element => {
      if (element.id === categoryId) {
        categoryName = element.name
      }
    });

    return (
      <span>
        <Link to={`/category#${categoryId}`}>
          <Badge pill bg="primary" style={{ marginRight: 5, fontSize: "0.8rem"}}>{categoryName}</Badge>
        </Link>
      </span>
    )
  }

export default CategoryBadge