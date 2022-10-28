import Select, { components } from 'react-select';

import { bread, chicken, chop, coffee, dessert, diet, goat, lamb, noo, pasta, sea, steak, vegan, vegetarian } from '../assets/icons';


const arrIcons = [
  steak,
  chicken,
  dessert,
  goat,
  chop,
  pasta,
  lamb,
  sea,
  diet,
  bread,
  vegan,
  vegetarian,
  coffee,
  noo
]



const customStyles = {
  container: styles => ({
    ...styles,
    backgroundColor: "#ffffff",
    width: "12rem",


  }),
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "transparent",
    border: isFocused && "none",
  }),
  valueContainer: styles => ({
    ...styles,
    backgroundColor: "transparent",
  }),
  indicators: styles => ({
    ...styles,
    backgroundColor: "transparent",
  }),
  menu: styles => ({
    ...styles,
    backgroundColor: "#fff",
    border: "2px solid #FFF387",
  }),
  menuList: styles => ({
    ...styles,
    borderRadius: "10px",
    minHeight: "35.3rem",
    padding: "0"

  }),
  option: (provided, { isSelected }) => ({
    ...provided,
    backgroundColor: isSelected ? '#FFF387' : '#fff',
    color: "#000",
    fontWeight: isSelected ? "500" : "400",
    padding: ".5rem"
  }),
}

export default ({ categories, dispatch, traerDatos }) => {
  const { Option } = components;

  const result = categories?.map((C, i) => {
    return {
      label: C.strCategory,
      value: C.strCategory,
      Icon: arrIcons[i]
    }

  }) || []


  function IconOption(props) {
    const { data: { label, Icon } } = props;
    return (
      <Option {...props}>
        <div className="flex justify-between rounded-lg ">
          <span>{label}</span>

          <img src={Icon} className="w-4" alt="" />
        </div>
      </Option>
    );
  }


  const handleChange = ({ value }) => dispatch(traerDatos(`/filter.php?c=${value}`))

  return (
    <div>
      <p>Categorias</p>
      <Select
        className="w-40 border-2 border-yellow-400 rounded h-auto bg-transparent font-inter"
        classNamePrefix="select"
        name="color"
        options={result}
        styles={customStyles}
        onChange={handleChange}
        components={{ Option: IconOption }}
      />
    </div>
  );
};