import React from 'react';
import './Widgets.css';

// !styles imports
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return (
          <div className="widgets__article">
            <div className="widgets__articleLeft">
              <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
              <h4>{heading}</h4>
              <p>{subtitle}</p>
            </div>
          </div>
        );
    }

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("weirdo pon this", "realest weirdo alive")}
      {newsArticle("weirdo pon this", "realest weirdo alive")}
      {newsArticle("weirdo pon this", "realest weirdo alive")}
      {newsArticle("weirdo pon this", "realest weirdo alive")}
    </div>
  );
}

export default Widgets