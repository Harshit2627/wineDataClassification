import DataTable from "../../stateless/dataTable/dataTable"
import rawData from "../../../../assets/data/Wine-Data.json"
import { getFlavanoidsCalucaltion } from "../../../utilities/helpers"

const FlavanoidDataTable = () => {

    //Destructuring to get dynamic columns and processed data to be passed onto the child component.
    const {columns, data} = getFlavanoidsCalucaltion(rawData)
    const source = {
        columns: columns,
        data: data
    }
    return(
        <DataTable columns={source?.columns} data={source.data}/>
    )
}

export default FlavanoidDataTable