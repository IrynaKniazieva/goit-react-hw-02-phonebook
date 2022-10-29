import React from "react"
import PropTypes from 'prop-types';

const Filter = ({filter, onChange}) => (
    <div>
        <label>
        Find contact by name
        </label>
        <input
            type="text"
            value={filter}
            onChange={onChange}
      ></input>
        
    </div>

)

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
  };

export default Filter