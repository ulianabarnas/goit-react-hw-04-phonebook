import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from "./Filter.styles";

export default function Filter({value, onChange}) {
  return (
        <FilterLabel>Find contacts by name
          <FilterInput
              type="text"
              value={value}
              onChange={onChange} />
        </FilterLabel>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}