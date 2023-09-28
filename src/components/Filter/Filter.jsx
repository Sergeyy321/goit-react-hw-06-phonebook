
import PropTypes from 'prop-types';
import { Input} from './FIlter.styled';
import {useSelector} from 'react-redux'
export const Filter =()=> {
//  const filter = useSelector(state => state.contactFilter.filter);

  
    return (
      <div>
        <h2>Find contacts by name</h2>
        <Input
          id={this.Id}
          type="text"
          value={this.props.filter}
          onChange={this.props.onfilterChange}
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
    );
  }


