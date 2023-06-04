import PropTypes from 'prop-types';
import { Label, Input, Container } from './Filter.styled';
const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <Label>
        Find contacts by name
        <Container>
          <Input type="text" name="filter" value={value} onChange={onChange} />
        </Container>
      </Label>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
