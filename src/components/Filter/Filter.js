import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, Label } from './Filter.styled';
import { getFilter, updateFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  return (
    <Label>
      Find contact by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
      />
    </Label>
  );
};
