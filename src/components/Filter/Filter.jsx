
import { Input} from './FIlter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'Redux/filterReducer';
import { nanoid } from 'nanoid';
export const Filter =()=> {
 const filter = useSelector(state => state.filter);
 const dispatch = useDispatch()

const id = nanoid()
  const onfilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
    
        return (
          <div>
            <h2>Find contacts by name</h2>
            <Input
              id={id}
              type="text"
              value={filter}
              onChange={onfilterChange}
              name="filter"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        );
        

    }
    


// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onfilterChange: PropTypes.func.isRequired,
// };





// import { useDispatch, useSelector } from 'react-redux';
// import { qwery } from 'Redux/sliceFilter';

// export const Filter = () => {
//   const filter = useSelector(state => state.filter);
//   const dispatch = useDispatch();
//   return (
//     <>
//       <label htmlFor="">
//         <span>Find contacts by name</span>
//       </label>
//       <input
//         value={filter}
//         onChange={evt => dispatch(qwery(evt.currentTarget.value))}
//         type="text"
//         name="filter"
//         placeholder="Find contacts by name"
//       />
//     </>
//   );
// };

