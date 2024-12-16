import React from "react";
const LeagueCell = ({ value, expanded, onToggle }) => {
    const visibleItems = 2; // Number of items to show initially
    const itemsToShow = expanded ? value.length : visibleItems;
  
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', height:'100%'}}>
        {value.slice(0, itemsToShow).map((item, index) => (
          <span
            key={index}
            style={{
              border: "1px solid #BDBDBD",
              margin: "4px",
              padding: "8px 10px",
              display: "inline-block",
              lineHeight:'18px',
              fontSize: '13px',
              borderRadius: '100px'
            }}
          >
            {item}
          </span>
        ))}
        {value.length > visibleItems && (
          <div
            style={{
              color: "blue",
              border: '1px solid #1976D2',
              cursor: "pointer",
              margin: "4px",
              padding: '10px 10px',
              borderRadius: '100px',
              lineHeight:1,
              fontSize: '13px'
            }}
            onClick={onToggle}
          >
            {expanded ? "Less.." : "More.."}
          </div>
        )}
      </div>
    );
  };
  export default LeagueCell;