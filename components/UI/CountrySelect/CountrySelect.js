import { Select } from "antd";
import countries from "./countries";

const { Option } = Select;

export default function CountrySelect(props) {
  return (
    <Select
      showSearch
      placeholder="Select Country"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      {...props}
    >
      {countries.map((country) => {
        return <Option value={country.code}>{country.name}</Option>;
      })}
    </Select>
  );
}
