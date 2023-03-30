import { FilterContainer } from "./Filter.styled";
import { Label, Input } from "components/Form/Form.styled";
import { useDispatch } from "react-redux";
import { filterContact } from "redux/contactsSlice";
// import { contactsFilter } from "redux/contactsFilter";
export const Filter = () => {

    const dispatch = useDispatch(); 
    const filterInput = e => {
      const { value } = e.currentTarget;
      dispatch(filterContact(value))
    }
    return (
        <FilterContainer>
        <Label>Find Contacts By Name
        <Input type="text" onChange={filterInput}/>
        </Label>
        </FilterContainer>
    )
}