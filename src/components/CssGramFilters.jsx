import { useContext } from "react";
import { ImageEditorContext } from "./ImageEditorProvider";

const CssGramFilters = () => {

    const {
        appliedFilter,
        applyFilter,
        image,

    } = useContext(ImageEditorContext);
    const filters = [
        "aden",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
    ];
    const handleApplyFilter = (filter) => {
        applyFilter(filter);
    };

    return (
        <div className="cssGram-filters">
            {/* Render filter previews */}
            {filters.map((filter) => (
                <img
                    key={filter}
                    className={`filter-preview ${filter} ${appliedFilter === filter ? "selected" : ""
                        }`}
                    onClick={() => handleApplyFilter(filter)} // Pass the filter to the function
                    alt={filter}
                    src={image}
                />
            ))}
        </div>
    );
}

export default CssGramFilters;