// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/components/DesignCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './DesignCard.css'; // 确保创建并导入这个CSS文件

function DesignCard({ design, onClick }) {
    return (
        <div className="design-card">
            <div className="image-container">
                <img
                    src={design.src}
                    alt={design.title}
                    onClick={() => onClick(design)}
                />
            </div>
            <h3>{design.title}</h3>
        </div>
    );
}

DesignCard.propTypes = {
    design: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default DesignCard;
